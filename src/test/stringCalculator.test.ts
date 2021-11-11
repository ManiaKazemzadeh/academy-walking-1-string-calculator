import {StringCalculator} from "../main/stringCalculator";

describe('A StringCalculator Add function', () => {
    it("should return 0 if it receives an empty string", () => {
        let calculator: StringCalculator = new StringCalculator();
        expect(calculator.add("")).toEqual(0);
    })
})