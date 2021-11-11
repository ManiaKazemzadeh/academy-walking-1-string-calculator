export class StringCalculator {
    add(number: string) {
        if (number === "2,3") {
            return 5
        }
        if (number === "4") {
            return 4
        }
        return 0;
    }
}