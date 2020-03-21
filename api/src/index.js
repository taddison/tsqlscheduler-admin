const express = require("express");
const fs = require("fs").promises;
const { resolve } = require("path");

const app = express();

const getFiles = async directory => {
  const directoryEntries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    directoryEntries.map(directoryEntry => {
      const resolvedPath = resolve(directory, directoryEntry.name);

      return directoryEntry.isDirectory()
        ? getFiles(resolvedPath)
        : resolvedPath;
    })
  );

  return files.flat();
};

app.get("/api/tasks", async (req, res, next) => {
  const files = await getFiles("/tasks");

  res.status(200).json(files);
});

const port = process.env.PORT || 8881;

const server = app.listen(port, () => {
  console.log(`tsqlscheduler-admin listening on port ${port}`);
});
