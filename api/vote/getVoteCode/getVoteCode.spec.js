const app = require("../../../index");
const request = require("supertest");
const should = require("should");

let url_get_vote_code =
  "http://apis.data.go.kr/9760000/CommonCodeService/getCommonSgCodeList";

let serviceKey =
  "6h0Y8RwZFzORaLc37wC3eVg9EUxIkqB0dbKVQREpOh%2BU%2F%2FFV3mz%2BaWLlJMDCjJvKMzOnPeMDUQOdzDyaZM2OhA%3D%3D";

describe("선거 코드 모두 받아오기", () => {
  describe("성공 시", () => {
    it("결과물을 반환한다.", (done) => {
      request(app)
        .get("/getVoteCode")
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
        .get("/getVoteCode")
        .expect(400)
        .end((err, res) => {
          done();
        });
    });
    it("serviceKey가 잘 못 되었을 경우", (done) => {
      request(app)
        .get("/getVoteCode")
        .expect(401)
        .end((err, res) => {
          done();
        });
    });
    it("return이 아무것도 없을 경우", (done) => {
      request(app)
        .get("/getVoteCode")
        .expect(450)
        .end((err, res) => {
          done();
        });
    });
  });
});
