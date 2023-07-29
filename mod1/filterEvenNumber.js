// 2) Topic: Filter Even Numbers
// Description: In this assignment, you will create a JavaScript program that filters even numbers from a given array and displays the filtered numbers on the webpage.

// Output is:-
// Original Array: [12, 34, 45, 23, 6, 78, 54, 90]
// Filtered Even Numbers: [12, 34, 6, 78, 54, 90]

// Tasks:
// Implement a JavaScript function to filter even numbers from the array.
// Display /console.log the filtered even numbers on the code.

const originalArr = [12, 34, 45, 23, 6, 78, 54, 90]

function filterEvenNumbers(arr) {
    return arr.filter( num => num % 2 === 0 )
}

const filteredArr = filterEvenNumbers(originalArr)
console.log(filteredArr)