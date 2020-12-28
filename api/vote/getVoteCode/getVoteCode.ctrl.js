const request = require("request");
const parseXML = require("xml2js").parseString;
const JsonParser = require("../../../parser/JsonParser");

const getVoteCode = (req, res) => {
  let url = req.query.url;
  let serviceKey = req.query.serviceKey;

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

  request(
    {
      url: url + queryParams,
      method: "GET",
    },
    function (error, response, body) {
      res.status(200);
      parseXML(body, (err, result) => {
        res.json(JsonParser(result.response.body));
      });
    }
  );
};

module.exports = { getVoteCode: getVoteCode };
