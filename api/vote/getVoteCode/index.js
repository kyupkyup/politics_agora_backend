const express = require("express");
const router = express.Router();
const controller = require("./getVoteCode.ctrl");

router.get("/", controller.getVoteCode);

module.exports = router;
