const connection = require("../config/connection");
const initModels = require("../models/init-models");
const models = initModels(connection);

class cityController {
  async get(req, res) {
    try {
      const city = await models.city.findAll();
      res.status(200).json({
        data: city,
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
        longitude: req.body.longitude,
        latitude: req.body.latitude,
      };
      await models.city.create(body);
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
        longitude: req.body.longitude,
        latitude: req.body.latitude,
      };
      await models.city.update(body, {
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
      await models.city.destroy({
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

module.exports = new cityController;
