const fs = require("fs");

if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("directory removed");
  });
}

process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});
