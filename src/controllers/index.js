import { ttdl } from "ruhend-scraper";

class IndexController {
  async getVideoData(req, res) {
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
}

export default IndexController;
