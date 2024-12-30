const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  res.render("shop", { prods: adminData.products,  pageTitle: 'Shop', path: '/', hasProducts: adminData.products.length > 0 });
});

module.exports = router;
