const assert = require("chai").assert;
const tf = require(".");

it("whole string", () => {
  // this is just the native uppercase
  assert.equal(tf.toUpperCase("hello"), "HELLO");
});
it("index", () => {
  assert.equal(tf.toUpperCase("hello", 0), "Hello");
  assert.equal(tf.toUpperCase("hello", 1), "hEllo");
});
it("string portion", () => {
  assert.equal(tf.toUpperCase("hello", 1, 3), "hELLo");
});
