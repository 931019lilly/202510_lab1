# 202510_lab1

## Changelog

### 2025-12-19 — Security fixes
- Replaced unsafe `innerHTML` usage with `textContent` to prevent XSS.
- Removed `eval()` usage and restricted dynamic evaluation to numeric parsing only.
- Replaced string-based `setTimeout` with function reference and validated delay input (0–10000 ms).
- Added a non-blocking `aiDelay` number input to remove `prompt()` usage.
- Mitigated ReDoS risk by restricting input length and using a linear-time regex.
- Removed hardcoded credentials from client code; secrets should be provided via backend or CI secrets.
