const express = require("express");
const router = express.Router();
const controller = require("./getCandidates.ctrl");

router.get("/", controller.getCandidates);

module.exports = router;
//TODO
// user api 구성
