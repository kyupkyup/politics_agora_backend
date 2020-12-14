const express = require("express");
const app = express();
const request = require("request");
const router = express.Router();
const bodyParser = require("body-parser");

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));

const url = {
  url:
    "http://apis.data.go.kr/9760000/ElecPrmsInfoInqireService/getCnddtElecPrmsInfoInqire/",
  method: "GET",
};
app.get(url, (req, res) => {
  console.log(url);
  let queryParams = req.params;
  //   let serviceKey =
  //     "6h0Y8RwZFzORaLc37wC3eVg9EUxIkqB0dbKVQREpOh%2BU%2F%2FFV3mz%2BaWLlJMDCjJvKMzOnPeMDUQOdzDyaZM2OhA%3D%3D";

  //   let sgId = "20170509";
  //   let sgTypecode = "1";
  //   let candidateId = "100120965"; // 문재인

  //   let queryParams = "?" + encodeURIComponent("serviceKey") + "=" + serviceKey;
  //   queryParams +=
  //     "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /* */
  //   queryParams +=
  //     "&" +
  //     encodeURIComponent("numOfRows") +
  //     "=" +
  //     encodeURIComponent("10"); /* */
  //   queryParams +=
  //     "&" +
  //     encodeURIComponent("sgId") +
  //     "=" +
  //     encodeURIComponent("20170509"); /* */
  //   queryParams +=
  //     "&" +
  //     encodeURIComponent("sgTypecode") +
  //     "=" +
  //     encodeURIComponent("1"); /* */
  //   queryParams +=
  //     "&" +
  //     encodeURIComponent("cnddtId") +
  //     "=" +
  //     encodeURIComponent("100120965"); /* */
  //   queryParams +=
  //     "&" + encodeURIComponent("resultType") + "=" + encodeURIComponent("JSON");
});
request(
  app
  //   {
  //     url: url + queryParams,
  //     method: "GET",
  //   },
  //   function (error, response, body) {
  //     res.json(body);
  //   }
);

module.exports = app;
