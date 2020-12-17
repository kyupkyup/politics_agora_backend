const request = require("request");
const parseXML = require("xml2js").parseString;

const getCandidate = (req, res) => {
  let url = req.query.url;
  let serviceKey = req.query.serviceKey;
  let sgId = req.query.sgId;
  let sgTypecode = req.query.sgTypecode;
  let candidateId = req.query.candidateId; // 문재인

  const test_sgTypeCode = parseInt(sgTypecode, 10);
  // 테스트 처리 코드부
  if (
    url !==
    "http://apis.data.go.kr/9760000/ElecPrmsInfoInqireService/getCnddtElecPrmsInfoInqire"
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
  if (Number.isNaN(parseInt(candidateId, 10))) {
    return res.status(404).end();
  }
  let queryParams =
    "?" + encodeURIComponent("serviceKey") + "=" + serviceKey; /* Service Key*/
  queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /* */
  queryParams +=
    "&" +
    encodeURIComponent("numOfRows") +
    "=" +
    encodeURIComponent("10"); /* */
  queryParams +=
    "&" + encodeURIComponent("sgId") + "=" + encodeURIComponent(sgId); /* */
  queryParams +=
    "&" +
    encodeURIComponent("sgTypecode") +
    "=" +
    encodeURIComponent(sgTypecode); /* */
  queryParams +=
    "&" +
    encodeURIComponent("cnddtId") +
    "=" +
    encodeURIComponent(candidateId); /* */

  request(
    {
      url: url + queryParams,
      method: "GET",
    },
    function (error, response, body) {
      res.status(200);
      parseXML(body, (err, result) => {
        console.log(result.response.body);
        res.json(result);
      });
    }
  );
};

module.exports = { getCandidate: getCandidate };
