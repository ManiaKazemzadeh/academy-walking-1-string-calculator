export class StringCalculator {
    add(input: string) {
        if (input === "") return 0;

        const inputNumbers = input.split(",");
        return inputNumbers.reduce((total, num) => parseInt(num) + total, 0)
    }
}