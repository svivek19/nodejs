const path = require("path");
const fsPromises = require("fs").promises;

const fileOperations = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "start.txt"),
      "utf8"
    );
    await fsPromises.writeFile(
      path.join(__dirname, "files", "write.txt"),
      "write text using fs.writefile"
    );
    console.log("writing completed");
    await fsPromises.appendFile(
      path.join(__dirname, "files", "write.txt"),
      "write text using fs.writefile, (update file using appendfile)"
    );
    console.log("update completed");
    await fsPromises.rename(
      path.join(__dirname, "files", "write.txt"),
      path.join(__dirname, "files", "vivek.txt")
    );
    console.log("rename completed");
  } catch (error) {
    console.error(error);
  }
};

fileOperations();

process.on("uncaughtException", (err) => {
  console.error("uncaughtException", err);
  process.exit(1);
});
