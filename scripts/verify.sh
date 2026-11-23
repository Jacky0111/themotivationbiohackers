#!/usr/bin/env bash
# One-command verification, mirroring CI:
# install (locked) -> lint -> typecheck -> test -> build -> dependency audit.
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> 1/6 Installing dependencies (frozen lockfile)"
bun install --frozen-lockfile

echo "==> 2/6 Linting"
bun run lint

echo "==> 3/6 Type checking"
bun run typecheck

echo "==> 4/6 Running tests"
bun run test

echo "==> 5/6 Building app"
bun run build

echo "==> 6/6 Auditing dependencies (high + critical)"
bun audit --audit-level=high

echo "==> All checks passed"
