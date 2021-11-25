const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  if (req.method === "OPTIONS") {
    next()
  }
  try {
    const token = req.headers.authorization.split(' ')[1] // Bearer 'token itself'
      if (!token) {
        res.status(401).json({message: '401 Unauthorized!'});
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.user = decoded;
      next();
  } catch (err) {
    res.status(401).json({message: '401 Unauthorized!'});
  }
}