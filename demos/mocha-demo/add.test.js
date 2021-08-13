var add = require("./add");
var expect = require("chai").expect;
describe("加法函数的测试", () => {
  it("1加1应该等于2", () => {
    expect(add(1, 1)).to.equal(2);
  });
});
