export class StringCalculator {
    add(input: string) {
        if (input === "") return 0;

        const inputNumbers = input.replace(/\n/g, ",");
        const cleanedInput = inputNumbers.split(",");
        return cleanedInput.reduce((total, num) => parseInt(num) + total, 0)
    }
}