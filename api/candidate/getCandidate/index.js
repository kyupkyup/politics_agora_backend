const express = require("express");
const router = express.Router();
const controller = require("./getCandidate.ctrl");

router.get("/", controller.getCandidate);

module.exports = router;
