it("should calculate the monthly rate correctly", function () {
  //arrange
  const values = {
    amount: 1000,
    years: 8,
    rate: 2.99,
  };

  //arrange
  expect(calculateMonthlyPayment(values)).toBe("1.17");
});

it("should return a result with 2 decimal places", function () {
  //arrange
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8,
  };
  //arrange
  expect(calculateMonthlyPayment(values)).toEqual("131.00");
});
