export class StringCalculator {
    add(input: string) {
        const inputNumbers = input.split(",");

        if(inputNumbers[1]){
            return parseInt(inputNumbers[0]) + parseInt(inputNumbers[1])
        }

        if (input !== "") {
            return parseInt(input);
        }
        return 0;
    }
}