var DataTypes = require("sequelize").DataTypes;
var _city = require("./city");
var _master_status = require("./masterStatus");
var _merchant = require("./merchant");
var _order_item = require("./orderItem");
var _order_status = require("./orderStatus");
var _product = require("./product");
var _user = require("./user");

function initModels(sequelize) {
  var city = _city(sequelize, DataTypes);
  var master_status = _master_status(sequelize, DataTypes);
  var merchant = _merchant(sequelize, DataTypes);
  var order_item = _order_item(sequelize, DataTypes);
  var order_status = _order_status(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  merchant.belongsTo(city, { as: "city", foreignKey: "city_id"});
  city.hasMany(merchant, { as: "merchants", foreignKey: "city_id"});
  order_status.belongsTo(master_status, { as: "status", foreignKey: "status_id"});
  master_status.hasMany(order_status, { as: "order_statuses", foreignKey: "status_id"});
  product.belongsTo(merchant, { as: "merchant", foreignKey: "merchant_id"});
  merchant.hasMany(product, { as: "products", foreignKey: "merchant_id"});
  order_status.belongsTo(order_item, { as: "order", foreignKey: "order_id"});
  order_item.hasMany(order_status, { as: "order_statuses", foreignKey: "order_id"});
  order_item.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(order_item, { as: "order_items", foreignKey: "product_id"});
  order_item.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(order_item, { as: "order_items", foreignKey: "user_id"});

  return {
    city,
    master_status,
    merchant,
    order_item,
    order_status,
    product,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
