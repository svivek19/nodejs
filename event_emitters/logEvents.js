const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");

const logEvents = async (msg) => {
  const dateTime = format(new Date(), "ddMMyyyy\tHH:mm:ss");
  const logItem = `${dateTime}\t${uuid()}\t${msg}\n`;

  const logDir = path.join(__dirname, "logs");

  try {
    if (!fs.existsSync(logDir)) {
      await fsPromise.mkdir(logDir);
    }

    await fsPromise.appendFile(path.join(logDir, "eventFile.txt"), logItem);
  } catch (error) {
    console.error("[ERROR Logging]:", error);
  }
};

module.exports = logEvents;
