// Define an array containing numbers
let numbers = [
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 
    11, 22, 33, 44, 55, 66, 77, 88, 99, 110,
    783, 149, 920, 432, 715, 587, 264, 975, 685, 378, 
    190, 839, 256, 512, 64, 991, 706, 372, 623, 308,
    321, 803, 142, 670, 27, 483, 726, 389, 85, 149, 
    616, 748, 385, 534, 215, 947, 793, 469, 95, 510
];

// Define an empty array to store even numbers
let even = [];

// Define a function to find even numbers in an array
function findTheEvenNumber(array) {
    for(let i = 0; i < array.length; i++) {
        if(i % 2 == 0) { // Check if the index is even
            even.push(array[i]); // Push the even number to the 'even' array
        }
    }
    return even; // Return the array containing even numbers
}

// Call the function to find and output even numbers in the 'numbers' array
console.log(findTheEvenNumber(numbers));
