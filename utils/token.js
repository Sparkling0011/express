const webToken = require("jsonwebtoken");
const { uuid } = require("../config");
exports.getToken = (user) => {
  return webToken.sign(user, uuid, { expiresIn: 60 * 60 });
};

exports.vertifyToken = (token) => {
  return webToken.verify(token, uuid);
};
