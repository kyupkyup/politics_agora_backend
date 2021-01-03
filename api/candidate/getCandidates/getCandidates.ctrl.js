const request = require("request");
var parser = require("fast-xml-parser");
const JsonParser = require("../../../parser/JsonParser");
/**
 * 후보자
 * 예비 후보자
 *  key 값 구하는 모듈
 */
let url_get_vote_code =
  "http://apis.data.go.kr/9760000/PofelcddInfoInqireService/getPofelcddRegistSttusInfoInqire";

let serviceKey =
  "6h0Y8RwZFzORaLc37wC3eVg9EUxIkqB0dbKVQREpOh%2BU%2F%2FFV3mz%2BaWLlJMDCjJvKMzOnPeMDUQOdzDyaZM2OhA%3D%3D";

const getCandidates = (req, res) => {
  let url = url_get_vote_code;
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
    return res.status(420).end();
  }
  if (test_sgTypeCode < 0 || test_sgTypeCode > 10) {
    return res.status(430).end();
  }

  var queryParams =
    "?" + encodeURIComponent("serviceKey") + "=" + serviceKey; /* Service Key*/
  queryParams +=
    "&" +
    encodeURIComponent("numOfRows") +
    "=" +
    encodeURIComponent("50"); /* */
  queryParams +=
    "&" + encodeURIComponent("sgId") + "=" + encodeURIComponent(sgId); /* */
  queryParams +=
    "&" +
    encodeURIComponent("sgTypecode") +
    "=" +
    encodeURIComponent(sgTypecode); /* */

  request(
    {
      url: url + queryParams,
      method: "GET",
    },
    function (error, response, body) {
      let temp = parser.parse(body);
      if ("response" in temp) {
        console.log(temp);

        res.json(JsonParser.JsonParser(temp.response.body));
        res.status(200);
      } else {
        res.status(450).end();
      } // items 리스트 앱 쪽으로 보내줌
      //
    }
  );
};

module.exports = { getCandidates: getCandidates };
