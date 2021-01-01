const express = require("express");
const router = express.Router();
const controller = require("./getElected.ctrl");

router.get("/", controller.getElected);

module.exports = router;
//TODO
