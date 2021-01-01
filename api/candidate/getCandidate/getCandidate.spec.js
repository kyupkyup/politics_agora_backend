/*
공공데이터 중앙선거관리위원회 선거공약정보 api 테스트
*/
// api fetch가 적절히 되고 있는지
const app = require("../../../index.js");
const request = require("supertest");
const should = require("should");

let url =
  "http://apis.data.go.kr/9760000/ElecPrmsInfoInqireService/getCnddtElecPrmsInfoInqire";
let serviceKey =
  "6h0Y8RwZFzORaLc37wC3eVg9EUxIkqB0dbKVQREpOh%2BU%2F%2FFV3mz%2BaWLlJMDCjJvKMzOnPeMDUQOdzDyaZM2OhA%3D%3D";

let sgId = "20170509";
let sgTypecode = "1";
let candidateId = "100120965"; // 문재인

describe("선거공약 정보 open api http://apis.data.go.kr/9760000/ElecPrmsInfoInqireService/getCnddtElecPrmsInfoInqire/:serviceKey/:sgId/:sgTypecode/:candidateId 는", () => {
  describe("성공 시", () => {
    it("결과물을 반환한다.", (done) => {
      request(app)
        .get("/getCandidate")
        .query({
          sgId: sgId,
          sgTypecode: sgTypecode,
          candidateId: candidateId,
        })
        .expect(200)
        .end((err, res) => {
          res.body.should.be.instanceof(Object);
          done();
        });
    }).timeout(20000);
  });
  describe("실패 시", () => {
    it("선거코드가 정수가 아닌경우", (done) => {
      request(app)
        .get("/getCandidate")
        .query({
          sgId: "asdf",
          sgTypecode: sgTypecode,
          candidateId: candidateId,
        })
        .expect(402)
        .end((err, res) => {
          done();
        });
    });
    it("선거 종류코드가 잘 못 된 경우", (done) => {
      request(app)
        .get("/getCandidate")
        .query({
          sgId: sgId,
          sgTypecode: "-1",
          candidateId: candidateId,
        })
        .expect(403)
        .end((err, res) => {
          done();
        });
    });
    it("후보자 코드가 정수가 아닌 경우", (done) => {
      request(app)
        .get("/getCandidate")
        .query({
          sgId: sgId,
          sgTypecode: sgTypecode,
          candidateId: "asdf",
        })
        .expect(404)
        .end((err, res) => {
          done();
        });
    });
    it("결과물이 없는 경우");
  });
});
