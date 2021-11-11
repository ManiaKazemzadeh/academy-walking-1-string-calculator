import {StringCalculator} from "../main/stringCalculator";

describe('A StringCalculator Add function', () => {
    it("should return 0 if it receives an empty string", () => {
        let calculator: StringCalculator = new StringCalculator();
        expect(calculator.add("")).toEqual(0);
    })

    it("should return the number if it receives a single number", () => {
       let calculator: StringCalculator = new StringCalculator();
       expect(calculator.add("4")).toEqual(4);
    });

  it("should return the sum if it receives a pair of comma separated values", () => {
    let calculator: StringCalculator = new StringCalculator();
    expect(calculator.add("2,3")).toEqual(5);
  });
})