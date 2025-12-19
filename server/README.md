# Demo server

This small Express server demonstrates how to provide configuration or secrets to a frontend from the backend using environment variables.

Usage:

1. Install dependencies:

```bash
cd server
npm install
```

2. Start server (set API_KEY in environment if needed):

```bash
API_KEY=your_api_key_here npm start
```

The server serves static files from the `app/` directory and exposes `/api/config` which returns limited configuration. In production, do NOT return secret values to the browser; instead implement server-side operations that require secrets.
