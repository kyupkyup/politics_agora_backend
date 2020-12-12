/*
공공데이터 중앙선거관리위원회 선거공약정보 api 테스트
*/

// api fetch가 적절히 되고 있는지
const app = require("./index");
const request = require("supertest");
const should = require("should");

describe("GET api는", () => {
  describe("성공 시", () => {
    it("결과물을 반환한다.", (done) => {
      request(app);
      done();
    });
  });
  describe("실패 시", () => {
    describe("제공기관 서비스 제공상태가 원할하지 않음", () => {
      it("01을 응답한다. ", (done) => {
        console.log("제공기관 서비스 상태가 원활하지 않음");
        done();
      });
    });
    describe("데이터 없음 에러", () => {
      it("03을 응답한다.", (done) => {
        console.log("데이터 없음");
        done();
      });
    });
    describe("serviceKey parameter 오류", () => {
      it("10 에러 요청", (done) => {
        console.log("service key 파라미터 누락");
        done();
      });
    });
    describe("open api 필수 parameter 오류", () => {
      it("11 에러 요청", (done) => {
        console.log("open api 필수 파라미터 누락");
        done();
      });
    });
    describe("open api 호출 url 오류", () => {
      it("12 에러 요청", (done) => {
        console.log("open api 호출 url 오류");
        done();
      });
    });
    describe("서비스 요청 제한 횟수 초과", () => {
      it("22 에러 요청", (done) => {
        console.log("서비스 요청 제한 횟수 초과");
        done();
      });
    });
    describe("등록되지 않은 서비스 키", () => {
      it("30 에러 요청", (done) => {
        console.log("잘못된 서비스키 사용이나 url 인코딩 하지 않음");
        done();
      });
    });
    describe("기한 만료된 서비스키", () => {
      it("31 에러 요청", (done) => {
        console.log("open api 사용 기간이 만료됨");
        done();
      });
    });
  });
});
