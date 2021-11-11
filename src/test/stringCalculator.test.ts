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
    `("should return $expectedOutput if it receives $input", ({input, expectedOutput}) => {
        expect(calculator.add(input)).toEqual(expectedOutput);
    })
})