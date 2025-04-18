const fs = require("fs");

if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("directory created");
  });
}

process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});
