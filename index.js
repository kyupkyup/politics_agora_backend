const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const getCandidates = require("./api/candidate/getCandidates");
const getCandidate = require("./api/candidate/getCandidate");
const getVoteCode = require("./api/vote/getVoteCode");
const getElected = require("./api/candidate/getElected");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/getCandidates", getCandidates);
app.use("/getCandidate", getCandidate);
app.use("/getVoteCode", getVoteCode);
app.use("/getElected", getElected);

app.listen(3306, () => {
  console.log("local");
});
module.exports = app;
