const connection = require("../config/connection");
const initModels = require("../models/init-models");
const models = initModels(connection);

class usersController {
  async get(req, res) {
    try {
      const users = await models.user.findAll();
      res.status(200).json({
        data: users,
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
        date_of_birth: req.body.date_of_birth,
        full_name: req.body.full_name,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        active: req.body.active,
      };
      await models.user.create(body);
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
        date_of_birth: req.body.date_of_birth,
        full_name: req.body.full_name,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        active: req.body.active,
      };
      await models.user.update(body, {
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
      await models.user.destroy({
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

module.exports = new usersController();
