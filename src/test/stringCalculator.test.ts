import {StringCalculator} from "../main/stringCalculator";

let calculator: StringCalculator = new StringCalculator();

describe('A StringCalculator Add function', () => {
    it.each`
    input     | expectedOutput
    ${""}     | ${0}
    ${"4"}    | ${4}
    ${"5"}    | ${5}
    ${"2,3"}  | ${5}
    ${"1,5"}  | ${6}
    ${"1,2,3"}| ${6}
    `("should return $expectedOutput if it receives $input", ({input, expectedOutput}) => {
        expect(calculator.add(input)).toEqual(expectedOutput);
    })
})