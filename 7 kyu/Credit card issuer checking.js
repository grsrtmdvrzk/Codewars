// TASK
//     Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.
//
//     Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given
//     card number. If the number cannot be matched then the function should return the string Unknown.
//
//     | Card Type  | Begins With          | Number Length |
//     |------------|----------------------|---------------|
//     | AMEX       | 34 or 37             | 15            |
//     | Discover   | 6011                 | 16            |
//     | Mastercard | 51, 52, 53, 54 or 55 | 16            |
//     | VISA       | 4                    | 13 or 16      |
//
//     Examples
//         getIssuer(4111111111111111) == "VISA"
//         getIssuer(4111111111111) == "VISA"
//         getIssuer(4012888888881881) == "VISA"
//         getIssuer(378282246310005) == "AMEX"
//         getIssuer(6011111111111117) == "Discover"
//         getIssuer(5105105105105100) == "Mastercard"
//         getIssuer(5105105105105106) == "Mastercard"
//         getIssuer(9111111111111111) == "Unknown"

// SOLUTION
function getIssuer(number) {
    const str = String(number);
    const firstDigit = str[0];
    const secondDigit = str[1];
    const thirdDigit = str[2];
    const fourthDigit = str[3];
    const length = str.length;

    const cardRules = [
        {
            name: 'AMEX',
            check: () => firstDigit === '3' && (secondDigit === '4' || secondDigit === '7'),
            validLengths: [15],
        },
        {
            name: 'Discover',
            check: () => firstDigit === '6' && secondDigit === '0' && thirdDigit === '1' && fourthDigit === '1',
            validLengths: [16],
        },
        {
            name: 'Mastercard',
            check: () => firstDigit === '5' && ['1', '2', '3', '4', '5'].includes(secondDigit),
            validLengths: [16],
        },
        {
            name: 'VISA',
            check: () => firstDigit === '4',
            validLengths: [13, 16],
        },
    ];

    for (const card of cardRules) {
        if (card.check() && card.validLengths.includes(length)) {
            return card.name;
        }
    }

    return 'Unknown';
}