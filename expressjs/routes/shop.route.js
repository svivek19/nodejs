const expres = require("express");
const router = expres.Router();

router.get("/", (req, res) => {
  res.send("<h1>welcome routes</h1>");
});

module.exports = router;
