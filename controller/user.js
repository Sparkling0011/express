const { userModel } = require("../model");
const { getToken, vertifyToken } = require("../utils/token");

exports.register = async (req, res, next) => {
  const body = req.body;
  const existUser = await userModel.find({ email: body.email });
  if (existUser.length) {
    res.status(400).send("该邮箱已被注册");
  } else {
    const user = userModel(body);
    user.save();
    res.status(200).send("注册成功");
  }
};

exports.login = async (req, res, next) => {
  let body = req.body;
  let user = await userModel.find(body);
  if (!user.length) {
    res.status(400).send("请先注册");
  } else {
    let loginUser = user[0];
    res.send({
      token: getToken({ email: loginUser.email, password: loginUser.password }),
      email: loginUser.email,
    });
  }
}; 

exports.query = async (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1];
  if (token) {
    if (vertifyToken(token)) res.send("test successfully");
  } else {
    res.status(403).send("fail");
  }
};
