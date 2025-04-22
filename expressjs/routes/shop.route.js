const expres = require("express");
const path = require("path");
const router = expres.Router();
const rootDir = require("../utils/path");

router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
