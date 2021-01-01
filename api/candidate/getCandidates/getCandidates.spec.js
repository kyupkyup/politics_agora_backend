const app = require("../../../index");
const request = require("supertest");
const should = require("should");

let url_get_candidate =
  "http://apis.data.go.kr/9760000/PofelcddInfoInqireService/getPofelcddRegistSttusInfoInqire";

// let url_get_spare_candidate =
//   "	http://apis.data.go.kr/9760000/PofelcddInfoInqireService/getPoelpcddRegistSttusInfoInqire";

let serviceKey =
  "6h0Y8RwZFzORaLc37wC3eVg9EUxIkqB0dbKVQREpOh%2BU%2F%2FFV3mz%2BaWLlJMDCjJvKMzOnPeMDUQOdzDyaZM2OhA%3D%3D";

let sgId = "20200415";
let sgTypecode = "2";

describe("선거 공약 정보  fetch 를 위한 공약자 id 받기", () => {
  describe("후보자의 코드를 받는다.", () => {
    describe("성공 시", () => {
      it(" 결과물을 반환한다.", (done) => {
        request(app)
          .get("/getCandidates")
          .query({
            url: url_get_candidate,
            serviceKey: serviceKey,
            sgId: sgId,
            sgTypecode: sgTypecode,
          })
          .expect(200)
          .end((err, res) => {
            res.body.should.be.instanceof(Object);
            done();
          });
      }).timeout(5000);
    });

    describe("실패 시", () => {
      it("url이 잘못되었을 경우", (done) => {
        request(app)
          .get("/getCandidates")
          .query({
            url: "http://apis.",
            serviceKey: serviceKey,
            sgId: sgId,
            sgTypecode: sgTypecode,
          })
          .expect(400)
          .end((err, res) => {
            done();
          });
      });
      it("serviceKey가 잘못된 경우", (done) => {
        request(app)
          .get("/getCandidates")
          .query({
            url: url_get_candidate,
            serviceKey: "asdf",
            sgId: sgId,
            sgTypecode: sgTypecode,
          })
          .expect(401)
          .end((err, res) => {
            done();
          });
      });
      it("선거코드가 정수가 아닌 경우", (done) => {
        request(app)
          .get("/getCandidates")
          .query({
            url: url_get_candidate,
            serviceKey: serviceKey,
            sgId: "asdf",
            sgTypecode: sgTypecode,
          })
          .expect(420)
          .end((err, res) => {
            done();
          });
      });
      it("선거 종류코드가 잘못된 경우", (done) => {
        request(app)
          .get("/getCandidates")
          .query({
            url: url_get_candidate,
            serviceKey: serviceKey,
            sgId: sgId,
            sgTypecode: "-1",
          })
          .expect(430)
          .end((err, res) => {
            done();
          });
      });
    });
  });
});
