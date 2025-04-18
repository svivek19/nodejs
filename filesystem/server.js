const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "files", "start.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.writeFile(
  path.join(__dirname, "files", "write.txt"),
  "write text using fs.writefile",
  (err) => {
    if (err) throw err;
    console.log("writing completed"); // creating and writing new file

    fs.appendFile(
      path.join(__dirname, "files", "write.txt"),
      "write text using fs.writefile, (update file using appendfile)",
      (err) => {
        if (err) throw err;
        console.log("update completed"); // update the file
        fs.rename(
          path.join(__dirname, "files", "write.txt"), // rename the file name
          path.join(__dirname, "files", "rename.txt"),
          (err) => {
            if (err) throw err;
            console.log("rename completed");
          }
        );
      }
    );
  }
);

process.on("uncaughtException", (err) => {
  console.error("uncaughtException", err);
  process.exit(0);
});
