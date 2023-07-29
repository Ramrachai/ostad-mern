// 3) Topic: Multiplication Table Generator
// Description:In this assignment, you will create a JavaScript program that generates a multiplication table for a given number. The program will take input from the user, calculate the multiplication table, and display it on the console.

// Tasks:
// Implement a JavaScript function to calculate the multiplication table using a for loop.
// Display the generated multiplication table on the console.
// Examples:
// Generate Multiplication Table for: 5
// 1 x 5 = 5
// 2 x 5 = 10
// 3 x 5 = 15
// 4 x 5 = 20
// 5 x 5 = 25
// 6 x 5 = 30
// 7 x 5 = 35
// 8 x 5 = 40
// 9 x 5 = 45
// 10 x 5 = 50


//===== This is for developer console *start ===
const tableFor = 5 // change this number to generate your desired multiplication table

for (let i = 1; i<=10 ; i++) {
    let result = `${i} X ${tableFor} = ${i*tableFor}`
    console.log(result)
}

//===== This is for developer console *end ===


//===== This is for Webpage UI *start ===

function showInUi_multi(){
    const multiplicationForm= document.getElementById("multiplicationForm")
    const multiplicationInput = document.getElementById("multiplicationInput")
    const multiplicationResult = document.getElementById("multiplicationResult")

    multiplicationForm.addEventListener("submit", (e) =>{
        e.preventDefault()
        if(!multiplicationInput.value){
            alert("Please enter number to generate Multiplication Table")
        } else {
            let num = Number(multiplicationInput.value)
            multiplicationResult.innerHTML = ""
            multiplicationResult.classList.remove("d-none")
            for (let i = 1; i<=10 ; i++) {
                multiplicationResult.innerHTML += `<p> ${i} X ${num} = ${i*num} </p>`
            }
        }

        filterForm.reset()
    })
}

showInUi_multi()
//===== This is for Webpage UI *end ===
