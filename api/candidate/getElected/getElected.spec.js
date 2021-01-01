const app = require("../../../index");
const request = require("supertest");
const should = require("should");

let url_get_elected =
  "http://apis.data.go.kr/9760000/WinnerInfoInqireService2/getWinnerInfoInqire";

let serviceKey =
  "6h0Y8RwZFzORaLc37wC3eVg9EUxIkqB0dbKVQREpOh%2BU%2F%2FFV3mz%2BaWLlJMDCjJvKMzOnPeMDUQOdzDyaZM2OhA%3D%3D";
let sgId = "20180613";
let sgTypecode = "3";

describe("선거 코드 모두 받아오기", () => {
  describe("성공 시", () => {
    it("결과물을 반환한다.", (done) => {
      request(app)
        .get("/getElected")
        .query({
          url: url_get_elected,
          serviceKey: serviceKey,
          sgId: sgId,
          sgTypecode: sgTypecode,
        })
        .expect(200)
        .end((err, res) => {
          res.body.should.be.instanceOf(Object);
          done();
        });
    });
  });
  describe("실패 시", () => {
    it("url이 잘 못 되었을 경우", (done) => {
      request(app)
        .get("/getElected")
        .query({
          url: "asdfasd",
          serviceKey: serviceKey,
          sgId: sgId,
          sgTypecode: sgTypecode,
        })
        .expect(400)
        .end((err, res) => {
          done();
        });
    });
    it("serviceKey가 잘 못 되었을 경우", (done) => {
      request(app)
        .get("/getElected")
        .query({
          url: url_get_elected,
          serviceKey: "asd",
          sgId: sgId,
          sgTypecode: sgTypecode,
        })
        .expect(401)
        .end((err, res) => {
          done();
        });
    });
    it("sgId가 정수가 아닌 경우", (done) => {
      request(app)
        .get("/getElected")
        .query({
          url: url_get_elected,
          serviceKey: serviceKey,
          sgId: "asdf",
          sgTypecode: sgTypecode,
        })
        .expect(420)
        .end((err, res) => {
          done();
        });
    });
    it("sgTypecode가 범위 밖일 경우", (done) => {
      request(app)
        .get("/getElected")
        .query({
          url: url_get_elected,
          serviceKey: serviceKey,
          sgId: sgId,
          sgTypecode: 23,
        })
        .expect(420)
        .end((err, res) => {
          done();
        });
    });
    it("return이 아무것도 없을 경우", (done) => {
      request(app)
        .get("/getElected")
        .query({
          url: url_get_elected,
          serviceKey: serviceKey,
          sgId: sgId,
          sgTypecode: sgTypecode,
        })
        .expect(450)
        .end((err, res) => {
          res.body.should.be.undefined;
          done();
        });
    });
  });
});
