const express = require("express");
const { join } = require("node:path");

const app = express();

app.get("/", (_req, res) => {
  return res.json({ ok: true });
});

app.get("/package.json", (_req, res) => {
  return res.sendFile(join(__dirname, "..", "package.json"));
});

app.get("/yarn.lock", (_req, res) => {
  return res.sendFile(join(__dirname, "..", "yarn.lock"));
});

app.listen(3030, () => {
  console.log("🚀 App listening on port 3000");
});
