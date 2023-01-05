const md5 = require("md5");

const salt = "xing";
module.exports = (value) => {
  return md5(value + salt);
};
