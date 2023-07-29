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
console.log("==Filtered Even numbers are===> ", filteredArr)


function showInUi_multi(){
    const filterForm= document.getElementById("filterForm")
    const filterInput = document.getElementById("filterInput")
    const filterResult = document.getElementById("filterResult")

    filterForm.addEventListener("submit", (e) =>{
        e.preventDefault()

        if(!filterInput.value){
            alert("Please enter number separated with comma")
        } else {
            //convert input string to numbered array
            const arr = filterInput.value.split(',').map(Number)
            const filteredArr = filterEvenNumbers(arr)
            filterResult.classList.remove("d-none")
            filterResult.innerText = `Even numbers are : ${filteredArr}`
        }

        filterForm.reset()
    })
}

showInUi_multi()