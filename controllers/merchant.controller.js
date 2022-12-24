const connection = require("../config/connection");
const initModels = require("../models/init-models");
const models = initModels(connection);

class merchantController {
  async get(req, res) {
    try {
      const merchant = await models.merchant.findAll();
      res.status(200).json({
        data: merchant,
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
        address: req.body.address,
        phone: req.body.phone,
        expired_date: req.body.expired_date,
        city_id: req.body.city_id,
      };
      await models.merchant.create(body);
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
        address: req.body.address,
        phone: req.body.phone,
        expired_date: req.body.expired_date,
        city_id: req.body.city_id,
      };
      await models.merchant.update(body, {
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
      await models.merchant.destroy({
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

module.exports = new merchantController();
