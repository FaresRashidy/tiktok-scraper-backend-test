import { Router } from "express";
import IndexController from "../controllers/index.js";

const router = Router();
const indexController = new IndexController();

router.post("/api/video", indexController.getVideoData.bind(indexController));

export function setRoutes(app) {
  app.use(router);
}
