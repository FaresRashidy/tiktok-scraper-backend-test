import express from "express";
import { setRoutes } from "./routes/index.js";

const app = express();
app.use(express.json());

setRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
});