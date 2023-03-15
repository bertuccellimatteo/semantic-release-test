const express = require("express");

const app = express();

app.get("/", (_req, res) => {
  return res.json({ ok: true });
});

app.listen(3030, () => {
  console.log("🚀 App listening on port 3000");
});
