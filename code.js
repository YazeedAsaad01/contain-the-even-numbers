// Define an array 'numbers' containing a list of numbers
let numbers = [
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 
    11, 22, 33, 44, 55, 66, 77, 88, 99, 110,
    783, 149, 920, 432, 715, 587, 264, 975, 685, 378, 
    190, 839, 256, 512, 64, 991, 706, 372, 623, 308,
    321, 803, 142, 670, 27, 483, 726, 389, 85, 149, 
    616, 748, 385, 534, 215, 947, 793, 469, 95, 510
];

// Define a function 'findEvenAndOddNumbers' to separate even and odd numbers from an input array
function findEvenAndOddNumbers(array) {
    // Initialize arrays to store even and odd numbers
    let even = [];
    let odd = [];

    // Iterate through the input array and separate even and odd numbers
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            even.push(array[i]); // Push even numbers to the 'even' array
        } else {
            odd.push(array[i]); // Push odd numbers to the 'odd' array
        }
    }

    // Return an object containing arrays of even and odd numbers
    return { even, odd };
}

// Call the 'findEvenAndOddNumbers' function with the 'numbers' array and log the result to the console
console.log(findEvenAndOddNumbers(numbers));
