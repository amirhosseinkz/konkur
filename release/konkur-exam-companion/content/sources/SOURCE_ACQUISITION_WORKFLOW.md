# Source Acquisition Workflow

Status: Active

Version: 1

This document defines the canonical workflow for acquiring, verifying, and registering official examination sources from 1395 through 1404.

## Workflow Steps

1. **Locate candidate source.** Identify the publisher's original paper, answer key, or correction. Third-party repositories (CSHub, MasterTest) may help locate artifacts but never replace official sources.

2. **Confirm publisher and year.** Verify the document is an official publication from the declared year. Record the publisher name exactly as shown.

3. **Download without modification.** Save the original file without re-encoding, watermarking, cropping, or altering content. The checksum must match the original publication.

4. **Record original URL.** Store the HTTPS URL where the source was found. If only HTTP is available, note the security limitation but do not store an HTTP URL as verified.

5. **Record retrieval date.** Store the ISO date when the file was downloaded.

6. **Calculate checksum.** Run `python3 tools/source-checksum.py <file>` or use `tools/source-checksum.html` in a browser. Record the `sha256:<hex>` value.

7. **Confirm paper identity.** Verify the file is the correct year, subject, and exam by checking the paper's internal metadata, page count, and question structure.

8. **Compare answer key against official publication.** Verify the answer key matches the official publication, not a third-party reproduction. Check for official corrections or amendments.

9. **Check for later corrections.** Search for official correction notices published after the answer key. Record each correction as a separate source record.

10. **Record redistribution constraints.** Note license terms, copyright restrictions, and whether redistribution is permitted. Unknown status is explicitly recorded as "Unknown".

11. **Mark verification status.** Set status to `verified` only after independent source review. Statuses: `pending-acquisition`, `acquired-unverified`, `partially-verified`, `verified`, `disputed`, `unavailable`.

12. **Import only after validation.** Register the source record through the source registry. The registry validates structure, cross-references, and integrity before accepting the record.

## Rejection Conditions

Reject and do not register a source if any of these conditions are true:

- **Unknown year:** The source cannot be confidently assigned to a year from 1395 through 1404.
- **Mismatched answer key:** The answer key does not match the official publication or contains third-party alterations.
- **Modified or watermarked content with missing provenance:** The file has been altered and no unmodified original is available for comparison.
- **Unverifiable answer key:** The answer key cannot be traced to an official publication.
- **Incomplete paper:** The paper is missing pages, sections, or questions that cannot be accounted for.
- **Corrupted file:** The file cannot be opened or read, or its checksum does not match a known-good reference.
- **Conflicting source without resolution:** Two sources disagree and no official correction resolves the conflict. The conflict is recorded as `disputed` but neither source is marked `verified`.

## Verification Status Transitions

```
pending-acquisition → acquired-unverified → partially-verified → verified
                                        ↘ disputed → verified
                                        ↘ unavailable
pending-acquisition → unavailable
verified → disputed (if a later issue is found)
disputed → unavailable (if the source is withdrawn)
unavailable → pending-acquisition (if re-acquisition is attempted)
```

## Checksum Requirement

- A local file is not considered acquired until its SHA-256 checksum is recorded.
- `localFilename` and `checksum` must both be present or both be null.
- A checksum mismatch between two copies of the same source is a `disputed` condition.

## Naming Convention

See `content/sources/NAMING_CONVENTIONS.md` for deterministic filenames.

## Integration

After registration, the source record is available to:
- The source-status UI at `#/settings/sources`
- Dataset validation for questions, answer keys, and corrections that reference it
- The correction precedence resolver for official answer resolution

Never generate, infer, or fabricate source content. Unknown is always better than fabricated.