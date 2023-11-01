import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("hello world");
});

const startServer = async (req, res) => {
  try {
    connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () =>
      console.log(`Server has started on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.log(err);
  }
};

startServer();
