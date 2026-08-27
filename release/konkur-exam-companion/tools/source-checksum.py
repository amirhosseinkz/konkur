#!/usr/bin/env python3
"""SHA-256 checksum utility for Konkur source files.

Usage:
    python3 tools/source-checksum.py <file> [<file> ...]
    python3 tools/source-checksum.py --dir <directory>

Calculates SHA-256 checksums for one or more files without modifying them.
Output is deterministic: filename, size, and sha256 checksum.

This is a repository maintenance tool. It is NOT required at runtime.
The application itself has no Node.js or Python runtime dependency.
"""

import hashlib
import os
import sys


def calculate_checksum(filepath):
    sha256 = hashlib.sha256()
    size = 0
    with open(filepath, "rb") as f:
        while True:
            chunk = f.read(65536)
            if not chunk:
                break
            sha256.update(chunk)
            size += len(chunk)
    return sha256.hexdigest(), size


def format_result(filepath, checksum, size):
    return f"{filepath}\t{size}\tsha256:{checksum}"


def process_file(filepath):
    if not os.path.isfile(filepath):
        return f"ERROR: not a file: {filepath}"
    checksum, size = calculate_checksum(filepath)
    return format_result(filepath, checksum, size)


def process_directory(dirpath):
    results = []
    for entry in sorted(os.listdir(dirpath)):
        filepath = os.path.join(dirpath, entry)
        if os.path.isfile(filepath):
            checksum, size = calculate_checksum(filepath)
            results.append(format_result(filepath, checksum, size))
    return results


def main():
    args = sys.argv[1:]
    if not args:
        print("Usage: python3 tools/source-checksum.py <file> [<file> ...]")
        print("       python3 tools/source-checksum.py --dir <directory>")
        sys.exit(1)

    if args[0] == "--dir":
        if len(args) < 2:
            print("ERROR: --dir requires a directory path")
            sys.exit(1)
        dirpath = args[1]
        if not os.path.isdir(dirpath):
            print(f"ERROR: not a directory: {dirpath}")
            sys.exit(1)
        results = process_directory(dirpath)
        for line in results:
            print(line)
    else:
        for filepath in args:
            print(process_file(filepath))


if __name__ == "__main__":
    main()