const request = require("request");

var url =
  "http://apis.data.go.kr/9760000/ElecPrmsInfoInqireService/getCnddtElecPrmsInfoInqire";
var queryParams =
  "?" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /* */
queryParams +=
  "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10"); /* */
queryParams +=
  "&" + encodeURIComponent("sgId") + "=" + encodeURIComponent("20200415"); /* */
queryParams +=
  "&" + encodeURIComponent("sgTypecode") + "=" + encodeURIComponent("1"); /* */
queryParams +=
  "&" +
  encodeURIComponent("cnddtId") +
  "=" +
  encodeURIComponent("1000000000"); /* */
queryParams +=
  "&" + encodeURIComponent("resultType") + "=" + encodeURIComponent("xml");

queryParams +=
  "&" +
  encodeURIComponent("ServiceKey") +
  "=" +
  encodeURIComponent(
    "6h0Y8RwZFzORaLc37wC3eVg9EUxIkqB0dbKVQREpOh%2BU%2F%2FFV3mz%2BaWLlJMDCjJvKMzOnPeMDUQOdzDyaZM2OhA%3D%3D"
  );
console.log(queryParams);
request(
  {
    url: url + queryParams,
    method: "GET",
  },
  function (error, response, body) {
    console.log("Status", response.statusCode);
    console.log("Headers", JSON.stringify(response.headers));
    console.log("Reponse received", body);
  }
);
