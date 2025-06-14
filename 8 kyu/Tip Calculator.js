// TASK
//     Complete the function, which calculates how much you need to tip based on the total amount of the bill and the
//     service.
//
//     You need to consider the following ratings:
//         - Terrible: tip 0%
//         - Poor: tip 5%
//         - Good: tip 10%
//         - Great: tip 15%
//         - Excellent: tip 20%
//
//     The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to
//     return:
//         - "Rating not recognised" in Javascript, Python and Ruby...
//         - ...or null in Java
//         - ...or -1 in C#
//
//     Because you're a nice person, you always round up the tip, regardless of the service.

// SOLUTION
function calculateTip(amount, rating) {
    const ratings = {
        terrible: 0,
        poor: 5,
        good: 10,
        great: 15,
        excellent: 20
    };

    const normalizedRating = rating.toLowerCase();
    const tipPercentage = ratings[normalizedRating];

    if (tipPercentage === undefined) {
        return "Rating not recognised";
    }

    return Math.ceil(amount * tipPercentage / 100);
}