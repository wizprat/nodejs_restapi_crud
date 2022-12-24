const connection = require("../config/connection");
const initModels = require("../models/init-models");
const models = initModels(connection);

class orderItemsController {
  async get(req, res) {
    try {
      const orederItems = await models.order_item.findAll();
      res.status(200).json({
        data: orederItems,
        message: "Get Data Success",
        error: false,
      });
    } catch (error) {
      console.error(error);
      res.status(404).json({
        error: true,
        message: error.message,
      });
    }
  }

  async create(req, res) {
    try {
      const body = {
        date: req.body.date,
        quantity: req.body.quantity,
        product_id: req.body.product_id,
        user_id: req.body.user_id,
      };
      await models.order_item.create(body);
      res.status(201).json({
        message: "Input Data Success",
        error: false,
      });
    } catch (error) {
      console.error(error);
      res.status(404).json({
        error: true,
        message: error.message,
      });
    }
  }

  async update(req, res) {
    try {
      const body = {
        date: req.body.date,
        quantity: req.body.quantity,
        product_id: req.body.product_id,
        user_id: req.body.user_id,
      };
      await models.order_item.update(body, {
        where: {
          id: req.params.id,
        },
      });
      console.log(body);
      res.status(200).json({
        message: "Update Data Success",
        error: false,
      });
    } catch (error) {
      console.error(error);
      res.status(404).json({
        error: true,
        message: error.message,
      });
    }
  }

  async delete(req, res) {
    try {
      await models.order_item.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        message: "Delete Data Success",
        error: false,
      });
    } catch (error) {
      console.error(error);
      res.status(404).json({
        error: true,
        message: error.message,
      });
    }
  }
}

module.exports = new orderItemsController();
