import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

api.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});
