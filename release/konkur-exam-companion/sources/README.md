# Source Files Directory

This directory stores locally acquired official examination source files.

## Structure

```
sources/
├── papers/         Official exam paper PDFs
├── answer-keys/    Official answer key PDFs
├── corrections/   Official correction notices
└── README.md       This file
```

## Naming Convention

Files must use deterministic names:

- `ce-msc-{year}-paper.pdf` — exam paper
- `ce-msc-{year}-answer-key.pdf` — answer key
- `ce-msc-{year}-correction-{revision}.pdf` — correction (revision starts at 1)

See `content/sources/NAMING_CONVENTIONS.md` for full details.

## Checksum Requirement

Every file must have a recorded SHA-256 checksum before it is considered verified.

Calculate checksums using:
- `python3 tools/source-checksum.py sources/papers/ce-msc-1395-paper.pdf`
- Or open `tools/source-checksum.html` in a browser

## Provenance Requirement

Every file must be registered through the source registry (`content/sources/source-registry.js`) with:
- Original URL (if known)
- Retrieval date
- Publisher
- Verification status
- License/redistribution note

## Redistribution Caution

- Do not commit copyrighted source files to this repository unless they are legitimately available for redistribution.
- License terms must be recorded for every source.
- Unknown license status is explicitly recorded as "Unknown".
- Third-party reproductions cannot silently replace official sources.

## Important

Files in this directory are NOT considered verified merely because they exist locally. Verification requires:
1. Checksum calculation and recording
2. Source record registration through the registry
3. Verification status set to `verified` only after independent source review

A file without a matching source registry record is not part of the application's verified dataset.