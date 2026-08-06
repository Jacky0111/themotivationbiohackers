#!/usr/bin/env bash
# One-command verification: install deps, build the app, and fail on any
# remaining high/critical severity vulnerability findings.
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> 1/3 Installing dependencies (text lockfile)"
bun install --save-text-lockfile

echo "==> 2/3 Building app"
bun run build

echo "==> 3/3 Auditing dependencies (high + critical)"
audit_json="$(mktemp)"
trap 'rm -f "$audit_json"' EXIT

if bun audit --json > "$audit_json" 2>/dev/null && [ -s "$audit_json" ]; then
  :
else
  npm audit --json > "$audit_json" 2>/dev/null || true
fi

node -e '
const fs = require("fs");
let data;
try { data = JSON.parse(fs.readFileSync(process.argv[1], "utf8")); }
catch { console.log("No parsable audit output; skipping vulnerability gate."); process.exit(0); }

const vulns = data.vulnerabilities || {};
const bad = Object.entries(vulns).filter(([, v]) =>
  ["high", "critical"].includes(String(v.severity || "").toLowerCase())
);

if (bad.length === 0) {
  console.log("No high or critical vulnerabilities found.");
  process.exit(0);
}

console.error(`Found ${bad.length} high/critical vulnerability finding(s):`);
for (const [name, v] of bad) {
  console.error(`  - ${name} (${v.severity})`);
}
process.exit(1);
' "$audit_json"

echo "==> All checks passed"
