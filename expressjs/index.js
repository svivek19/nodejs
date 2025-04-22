const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRoute = require("./routes/admin.route");
const shopRoute = require("./routes/shop.route");

app.use(bodyParser.urlencoded());

app.use(adminRoute);
app.use(shopRoute);

app.listen(3000);
