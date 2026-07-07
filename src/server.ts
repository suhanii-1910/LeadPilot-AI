import express from "express";
import cors from "cors";

import leadRoutes from "./routes/leadRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { connectDB } from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("LeadPilot AI API is Running 🚀");
});

app.use("/lead", leadRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});