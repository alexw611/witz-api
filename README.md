<p align="center">
  <h1 align="center">😂 Witz API</h1>
  <p align="center">
    <strong>Minimalist serverless API that returns a random German joke on every request</strong>
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
    <img src="https://img.shields.io/badge/Serverless-FD5750?style=for-the-badge&logo=serverless&logoColor=white" alt="Serverless">
  </p>
</p>

---

## About

A lightweight serverless API that returns a random German joke along with a Berlin-timezone timestamp. Built as a single Vercel serverless function — no database, no framework, no dependencies.

## API

### Endpoint

```
GET https://witz-api.vercel.app/api/witz
```

### Response

```json
{
  "witz": "Kommt ein Cowboy aus dem Friseur, Pony weg.",
  "timestamp": "01.03.2026 14:32:07"
}
```

| Field | Type | Description |
|---|---|---|
| `witz` | string | A random German joke |
| `timestamp` | string | Server time (Europe/Berlin), `DD.MM.YYYY HH:MM:SS` |

### CORS

All origins are allowed (`Access-Control-Allow-Origin: *`), so the API can be called from any frontend.

### Example Usage

**JavaScript (fetch)**
```js
const res = await fetch('https://witz-api.vercel.app/api/witz');
const data = await res.json();
console.log(data.witz);
```

**cURL**
```bash
curl https://witz-api.vercel.app/api/witz
```

**Python**
```python
import requests
data = requests.get('https://witz-api.vercel.app/api/witz').json()
print(data['witz'])
```

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js (Vercel Serverless Functions) |
| Hosting | [Vercel](https://vercel.com) |
| Language | JavaScript (ES Modules) |
| Data | Hardcoded array (no database) |

## Getting Started

### Prerequisites

- [Vercel](https://vercel.com) account (free)
- Node.js (for local development)

### Local Development

```bash
# Clone the repository
git clone https://github.com/alexw611/witz-api.git
cd witz-api

# Install Vercel CLI
npm i -g vercel

# Run locally
vercel dev
```

The API is then available at `http://localhost:3000/api/witz`.

### Deployment

```bash
vercel --prod
```

Or connect the repo to Vercel for automatic deployments on push.

### Adding Jokes

Open `api/witz.js` and add new entries to the `witze` array:

```js
const witze = [
  "Existing joke...",
  "Your new joke here."
];
```

Push to GitHub → Vercel auto-deploys.

## Project Structure

```
witz-api/
├── api/
│   └── witz.js         # Serverless function (single endpoint)
├── package.json
└── README.md
```

## License

This project is licensed under the [MIT License](LICENSE).

---
