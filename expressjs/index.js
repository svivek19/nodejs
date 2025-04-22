const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRoute = require("./routes/admin.route");
const shopRoute = require("./routes/shop.route");
const path = require("path");

app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoute);
app.use(shopRoute);
app.use((req, res) => {
  res.status(404).send("<h1>404 | Page Not Fount</h1>");
});

app.listen(3000);
