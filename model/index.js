const mongoose = require("mongoose");
const userModel = require("./userModel");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/mytest");
};


main()
  .then((res) => {
    console.log("连接成功");
  })
  .catch((err) => {
    console.log("连接失败", err);
  });

module.exports = {
  userModel,
};
