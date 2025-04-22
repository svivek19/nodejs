const express = require("express");
const router = express.Router();

router.get("/add", (req, res, next) => {
  res.send(
    "<h1>add product</h1> <form action='http://localhost:3000/admin/add' method='POST'> <input name='title' name='title'/> <input type='submit' vslue='Submit'/> </form> "
  );
});

router.post("/add", (req, res, next) => {
  console.log(req.body);
  res.send("<b>submitted</b>");
});

module.exports = router;
