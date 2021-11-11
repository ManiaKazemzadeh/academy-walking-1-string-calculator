export class StringCalculator {
    add(input: string) {
        if (input === "") return 0;
        let cleanedInput;

        if (input.startsWith("//"))
        {
            const customSeparator =  input.charAt(2);
            const inputNumbers = input.split("\n")[1];
            cleanedInput = inputNumbers.split(customSeparator);
        }
        else
        {
            const inputNumbers = input.replace(/\n/g, ",");
            cleanedInput = inputNumbers.split(",");
        }

        const negatives = cleanedInput.filter(num => parseInt(num) < 0)
        if (negatives.length){
            throw new Error(`negatives not allowed ${negatives}`)
        }

        return cleanedInput.reduce((total, num) => parseInt(num) + total, 0)
    }
}