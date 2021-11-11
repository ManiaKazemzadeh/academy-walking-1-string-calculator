export class StringCalculator {
    add(input: string) {
        const inputNumbers = [input.charAt(0), input.charAt(2)];

        if(inputNumbers[1]){
            return parseInt(inputNumbers[0]) + parseInt(inputNumbers[1])
        }

        if (input !== "") {
            return parseInt(input);
        }
        return 0;
    }
}