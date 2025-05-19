import { ttdl } from "ruhend-scraper";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ success: false, error: "Missing URL" });
  }

  try {
    const videoData = await ttdl(url);
    res.status(200).json({ success: true, data: videoData });
  } catch (error) {
    console.error("Error fetching video data:", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to fetch video data" });
  }
}
