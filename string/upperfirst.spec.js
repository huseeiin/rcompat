import upperfirst from "./upperfirst.js";

export default test => {
  test.case("uppercased -> unchanged", assert => {
    assert(upperfirst("Hi")).equals("Hi");
    assert(upperfirst("HI")).equals("HI");
  });
  test.case("lowercased", assert => {
    assert(upperfirst("hi")).equals("Hi");
  });
};
