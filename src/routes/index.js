import { Router } from 'express';
import IndexController from '../controllers/index.js';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app) {
  router.post('/api/video', indexController.getVideoData.bind(indexController));
  
  app.use(router);
}