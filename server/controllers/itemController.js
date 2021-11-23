const uuid = require('uuid');
const path = require('path');
const {Device} = require('../models/models.js');
const ApiError = require('../error/ApiError.js')

class ItemController {
  async create(req, res, next) {
    try {

      const {name, price, brandId, typeId, info} = req.body;
      const {img} = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const device = await Device.create({name, price, brandId, typeId, img: fileName})

      return res.json(device);

    } catch(error) {
      return next(ApiError.badRequest(error.message));
    }
  }
  async getAll(req, res) {
    const {brandId, typeId} = req.query;
    // If brand ID or type ID not provided return all
    let devices = await Device.findAll({brandId, typeId})

  }
  async getOne(req, res) {

  }
}

module.exports = new ItemController();