const express = require("express");
const app = express();
const request = require("request");

/**
 * 후보자
 * 예비 후보자
 *  key 값 구하는 모듈
 */

app.get("/getCandidate", (req, res) => {
  let url = req.query.url;
  let serviceKey = req.query.serviceKey;
  let sgId = req.query.sgId;
  let sgTypecode = req.query.sgTypecode;
  const test_sgTypeCode = parseInt(sgTypecode, 10);

  // 테스트 코드 처리
  // 선거자
  if (
    url !==
    "http://apis.data.go.kr/9760000/PofelcddInfoInqireService/getPofelcddRegistSttusInfoInqire"
  ) {
    return res.status(400).end();
  }
  if (
    serviceKey !==
    "6h0Y8RwZFzORaLc37wC3eVg9EUxIkqB0dbKVQREpOh%2BU%2F%2FFV3mz%2BaWLlJMDCjJvKMzOnPeMDUQOdzDyaZM2OhA%3D%3D"
  ) {
    return res.status(401).end();
  }
  if (Number.isNaN(parseInt(sgId, 10))) {
    return res.status(402).end();
  }
  if (test_sgTypeCode < 0 || test_sgTypeCode > 10) {
    return res.status(403).end();
  }

  var queryParams =
    "?" + encodeURIComponent("ServiceKey") + serviceKey; /* Service Key*/
  queryParams +=
    "&" +
    encodeURIComponent("sgId") +
    "=" +
    encodeURIComponent("20200415"); /* */
  queryParams +=
    "&" +
    encodeURIComponent("sgTypecode") +
    "=" +
    encodeURIComponent("1"); /* */

  request(
    {
      url: url + queryParams,
      method: "GET",
    },
    function (error, response, body) {
      //console.log('Status', response.statusCode);
      //console.log('Headers', JSON.stringify(response.headers));
      //console.log('Reponse received', body);
      console.log(body);
      res.status(200);
      res.json(body);
    }
  );
});

app.listen(3000, () => {
  console.log("local");
});
module.exports = app;
