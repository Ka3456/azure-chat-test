// index.js の中身（超シンプルなAPI）
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("🌍 Hello from Node.js on Azure!");
});

app.post("/echo", (req, res) => {
  res.json({ youSent: req.body });
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
