const ApiError = require('../error/ApiError.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Basket} = require('../models/models.js');



const generateJwt = (id, email, role) => {
    return jwt.sign(
      {id, email, role},
      process.env.SECRET_KEY,
      {expiresIn: '24h'}

    )
}

class UserController {

  async registration(req, res, next) {
    const {email, password, role} = req.body;
    const candidate = await User.findOne({where: {email}});

    if (!email || !password) {
      return next(ApiError.badRequest('Email or Password incorrect !'));
    }


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
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.json({token});
  }


}

module.exports = new UserController();