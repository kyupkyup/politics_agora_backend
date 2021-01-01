const request = require("request");
var parser = require("fast-xml-parser");
const JsonParser = require("../../../parser/JsonParser");

let url_get_vote_code =
  "http://apis.data.go.kr/9760000/CommonCodeService/getCommonSgCodeList";

let serviceKey =
  "6h0Y8RwZFzORaLc37wC3eVg9EUxIkqB0dbKVQREpOh%2BU%2F%2FFV3mz%2BaWLlJMDCjJvKMzOnPeMDUQOdzDyaZM2OhA%3D%3D";

const getVoteCode = (req, res) => {
  let url = url_get_vote_code;

  if (
    url !==
    "http://apis.data.go.kr/9760000/CommonCodeService/getCommonSgCodeList"
  ) {
    return res.status(400).end();
  }
  if (
    serviceKey !==
    "6h0Y8RwZFzORaLc37wC3eVg9EUxIkqB0dbKVQREpOh%2BU%2F%2FFV3mz%2BaWLlJMDCjJvKMzOnPeMDUQOdzDyaZM2OhA%3D%3D"
  ) {
    return res.status(401).end();
  }

  let queryParams =
    "?" + encodeURIComponent("serviceKey") + "=" + serviceKey; /* Service Key*/
  queryParams +=
    "&" +
    encodeURIComponent("numOfRows") +
    "=" +
    encodeURIComponent("50"); /* */
  request(
    {
      url: url + queryParams,
      method: "GET",
    },
    function (error, response, body) {
      res.status(200);
      let temp = parser.parse(body);
      res.json(JsonParser.JsonParser(temp.response.body));
    }
  );
};

module.exports = { getVoteCode: getVoteCode };
