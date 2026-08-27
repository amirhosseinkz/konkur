# Source File Naming Conventions

Status: Active

Version: 1

## Deterministic Filenames

All local source files use deterministic names based on artifact type and year.

### Exam Papers

```
ce-msc-{year}-paper.pdf
```

Example: `ce-msc-1395-paper.pdf`

### Answer Keys

```
ce-msc-{year}-answer-key.pdf
```

Example: `ce-msc-1395-answer-key.pdf`

### Corrections

```
ce-msc-{year}-correction-{revision}.pdf
```

Example: `ce-msc-1395-correction-1.pdf`

Revision numbering starts at 1 and increments for each subsequent correction. If a correction is replaced, the old file is retained with a `.replaced` suffix and the new file takes the next revision number.

## Persian Year Format

Years are Solar Hijri (Persian) integers from 1395 through 1404. They are written as plain integers in filenames (e.g., `1395`, not `۱۳۹۵`).

## Directory Placement

- Papers: `sources/papers/ce-msc-{year}-paper.pdf`
- Answer keys: `sources/answer-keys/ce-msc-{year}-answer-key.pdf`
- Corrections: `sources/corrections/ce-msc-{year}-correction-{revision}.pdf`

## Duplicate Source Handling

If two copies of the same source exist with different checksums:
1. Both are recorded as separate source record versions
2. The conflict is marked `disputed`
3. Neither copy is marked `verified` until the conflict is resolved
4. Resolution requires official confirmation or a correction notice

## Replaced-Source Policy

When a source file is replaced:
1. The old file is renamed with a `.replaced` suffix (e.g., `ce-msc-1395-paper.pdf.replaced`)
2. The old file's source record receives `verificationStatus: "unavailable"`
3. The new file is stored with the same deterministic name
4. A new source record version is registered with the new checksum
5. The old record remains in registry history for audit

## Checksum Mismatch Policy

If a file's checksum does not match its registered checksum:
1. The file is considered corrupted or tampered with
2. `verificationStatus` is set to `disputed`
3. The source must be re-acquired from the original URL
4. The new checksum is recorded after re-acquisition
5. A version gap is not permitted; a new version is registered

## Silent Overwrite Prohibition

Never overwrite a source file silently. Any replacement must:
1. Follow the replaced-source policy above
2. Update the source registry with a new version
3. Record the replacement reason in `verificationNotes`
4. Preserve the old file for audit