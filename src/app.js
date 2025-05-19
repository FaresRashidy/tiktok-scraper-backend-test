import express from "express";
import cors from "cors";
import { setRoutes } from "./routes/index.js";

const app = express();
app.use(cors()); // Enable CORS for all origins
app.use(express.json());

setRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
