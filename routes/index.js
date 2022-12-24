const express = require("express");
const masterStatus = require("../controllers/masterStatus.controller");
const city = require("../controllers/city.controller");
const merchant = require("../controllers/merchant.controller");
const orderItems = require("../controllers/orderItems.controller");
const orderStatus = require("../controllers/orderStatus.controller");
const product = require("../controllers/product.controller");
const users = require("../controllers/users.controller");
const user = require("../models/user");

const route = express.Router();

const api = "/api";

route.get("/", (req, res) => {
  res.send("hello world");
});

//master status
route.get(api + "/master-status", masterStatus.get);
route.patch(api + "/master-status/:id", masterStatus.update);
route.post(api + "/master-status", masterStatus.create);
route.delete(api + "/master-status/:id", masterStatus.delete);

//city
route.get(api + "/city", city.get);
route.patch(api + "/city/:id", city.update);
route.post(api + "/city", city.create);
route.delete(api + "/city/:id", city.delete);

//merchant
route.get(api + "/merchant", merchant.get);
route.patch(api + "/merchant/:id", merchant.update);
route.post(api + "/merchant", merchant.create);
route.delete(api + "/merchant/:id", merchant.delete);

//order item
route.get(api + "/order-items", orderItems.get);
route.patch(api + "/order-items/:id", orderItems.update);
route.post(api + "/order-items", orderItems.create);
route.delete(api + "/order-items/:id", orderItems.delete);

//order status
route.get(api + "/order-status", orderStatus.get);
route.patch(api + "/order-status/:id", orderStatus.update);
route.post(api + "/order-status", orderStatus.create);
route.delete(api + "/order-status/:id", orderStatus.delete);

//product
route.get(api + "/product", product.get);
route.patch(api + "/product/:id", product.update);
route.post(api + "/product", product.create);
route.delete(api + "/product/:id", product.delete);

//users
route.get(api + "/users", users.get);
route.patch(api + "/users/:id", users.update);
route.post(api + "/users", users.create);
route.delete(api + "/product/:id", users.delete);

module.exports = route;
