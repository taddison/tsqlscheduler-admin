const express = require("express");
const fs = require("fs").promises;

const app = express();

app.get("/api/tasks", async (req, res, next) => {
  const files = await fs.readdir("/tasks");
  res.status(200).json(files);
});

const port = process.env.PORT || 8881;

const server = app.listen(port, () => {
  console.log(`tsqlscheduler-admin listening on port ${port}`);
});
