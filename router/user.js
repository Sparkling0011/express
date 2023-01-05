const express = require("express");
const router = express.Router();

const { validator, validations } = require("../validator/registerValidator");
const { register, login, query } = require("../controller/user");

router.post("/register", validator(validations), register);
router.post("/login", login);
router.get("/query", query);

module.exports = router;
