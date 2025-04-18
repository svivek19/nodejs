const fs = require("fs");
const path = require("path");
const rs = fs.createReadStream(path.join(__dirname, "files", "bigfile.txt"), {
  encoding: "utf8",
});
const ws = fs.createWriteStream(
  path.join(__dirname, "files", "new_bigfile.txt")
);

// one approach
rs.on("data", (dataChunks) => {
  ws.write(dataChunks);
});

// effective approach
rs.pipe(ws);
