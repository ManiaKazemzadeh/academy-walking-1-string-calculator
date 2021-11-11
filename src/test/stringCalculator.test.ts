import {StringCalculator} from "../main/stringCalculator";

let calculator: StringCalculator = new StringCalculator();

describe('A StringCalculator Add function', () => {
    it.each`
    input                | expectedOutput
    ${""}                | ${0}
    ${"1"}               | ${1}
    ${"0,1"}             | ${1}
    ${"2"}               | ${2}
    ${"1,2"}             | ${3}
    ${"2,3"}             | ${5}
    ${"3,4,1"}           | ${8}
    ${"10,3"}            | ${13}
    ${"10,5,5,1"}        | ${21}
    ${"10,10,5\n5,1\n3"} | ${34}
    ${"//;\n20;20;10;5"} | ${55}
    `("should return $expectedOutput if it receives $input", ({input, expectedOutput}) => {
        expect(calculator.add(input)).toEqual(expectedOutput);
    })
})

// describe('If a StringCalculator Add function receives negative numbers', () => {
//     it("should throw an exception and show all of them in the exception message", () => {
//         expect(calculator.add("1,-2,-3")).toThrowError("-2,-3");
//     })
// })