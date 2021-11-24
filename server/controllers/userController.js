const ApiError = require('../error/ApiError.js');
const bcrypt = require('bcrypt');
const {User, Basket} = require('../models/models.js');
const jwt = require('jsonwebtoken');

const generateJwt = (id, email, role) => {
    return jwt.sign(
      {id, email, role},
      process.env.SECRET_KEY,
      {expiresIn: '24h'}

    )
}
class UserController {

  async registration(req, res) {
    const {email, password, role} = req.body
    if (!email || !password) {
      return next(ApiError.badRequest('Email or Password incorrect !'));
    }

    const candidate = await User.findOne({where: {email}});
    if (candidate) {
      return next(ApiError.badRequest('User with current email already exist'));
    }
    // NEED haspassword and create user
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({email, role, password: hashPassword});
    const basket = await Basket.create({userId: user.id});
    const token = generateJwt(user.id, user.email, user.role)
    return res.json({token});
  }

  async login(req, res, next) {
    const{email, password} = req.body;
    const user = await User.findOne({where:{email}});
    if (!user) {
      return next(ApiError.internal('User not found or email is incorrect!'));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal('Password is incorrect!'));
    }
    const token = generateJwt(user.email, user.password, user.role);

    return res.json({token});
  }

  async check(req, res, next) {
    const {id} = req.query;
    if(!id) {
      return next(ApiError.badRequest('No id provided! Please provide correct ID'));
    }
    res.json(id);
  }


}

module.exports = new UserController();