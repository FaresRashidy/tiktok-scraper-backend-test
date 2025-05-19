# TikTok Video Downloader Backend

A simple Express.js backend API for extracting TikTok video data using [`ruhend-scraper`](https://www.npmjs.com/package/ruhend-scraper).

---

## 🚀 Features

- **POST /api/video** — Extracts TikTok video information from a provided URL.
- Built with [Express.js](https://expressjs.com/)
- Easy to deploy on platforms like Render, Vercel, or Railway.

---

## 🗂️ Project Structure

```
.
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers
│   │   └── index.js          # Controller for handling video extraction
│   ├── routes
│   │   └── index.js          # API route definitions
│   └── utils
│       └── index.js          # Utility functions (error handling, etc.)
├── package.json
└── README.md
```

---

## 🛠️ Setup & Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/tiktok-backend.git
   cd tiktok-backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the server**

   - For development (with auto-reload):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

4. **The server will start on [http://localhost:3000](http://localhost:3000) by default.**

---

## 📦 API Usage

### `POST /api/video`

**Request Body:**

```json
{
  "url": "https://www.tiktok.com/@username/video/1234567890"
}
```

**Response:**

- `200 OK` with video data on success
- `400 Bad Request` if URL is missing
- `500 Internal Server Error` on failure

**Example using `curl`:**

```bash
curl -X POST http://localhost:3000/api/video \
  -H "Content-Type: application/json" \
  -d '{"url":"https://www.tiktok.com/@username/video/1234567890"}'
```

---

## 📝 Deployment

You can deploy this backend easily to [Render](https://render.com):

1. Push your code to GitHub.
2. Create a new Web Service on Render, connect your repo.
3. Set the **Start Command** to `npm start`.
4. Deploy!

---

## ⚠️ Disclaimer

This project is for educational purposes. Use responsibly and respect TikTok's terms of service.

---

## 📄 License

MIT
