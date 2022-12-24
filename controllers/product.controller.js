const connection = require("../config/connection");
const initModels = require("../models/init-models");
const models = initModels(connection);

class productController {
  async get(req, res) {
    try {
      const product = await models.product.findAll();
      res.status(200).json({
        data: product,
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
        name: req.body.name,
        price: req.body.price,
        merchant_id: req.body.merchant_id,
      };
      await models.product.create(body);
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
        name: req.body.name,
        price: req.body.price,
        merchant_id: req.body.merchant_id,
      };
      await models.product.update(body, {
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
      await models.product.destroy({
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

module.exports = new productController();
