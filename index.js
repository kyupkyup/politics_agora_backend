const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const getCandidates = require("./api/candidate/getCandidates");
const getCandidate = require("./api/candidate/getCandidate");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/getCandidates", getCandidates);
app.use("/getCandidate", getCandidate);

app.listen(3000, () => {
  console.log("local");
});
module.exports = app;
