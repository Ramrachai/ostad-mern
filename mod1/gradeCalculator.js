
function gradeCalculator(score){
    let grade; 
    switch (true) {
        case score >=90 :
            grade = "A"
            break;
        case score >=80 && score <= 89: 
            grade = "B"
            break
        case score >=70 && score <= 79: 
            grade = "C"
            break
        case score >=60 && score <= 69: 
            grade = "D"
            break
        default:
            grade="F"
            break;
    }
    return grade
}

const score = 96;
const grade = gradeCalculator(score)

console.log(`Your score is ${score} and your grade is ${grade}`)


//===== This is for Webpage UI *start ===

function showInUi_grade(){
    const gradeForm= document.getElementById("gradeForm")
    const gradeInput = document.getElementById("gradeInput")
    const gradeResult = document.getElementById("gradeResult")

    gradeForm.addEventListener("submit", (e) =>{
        e.preventDefault()
        if(!gradeInput.value){
            alert("Please enter number to show Grade")
        } else {
            console.log("input is === ", gradeInput.value)
            gradeResult.classList.remove('d-none')
            const grade = gradeCalculator(gradeInput.value)
            gradeResult.innerHTML = `<p> Your grade is =  <span class='text-warning'> "${grade}"  </span> </p>`
        }

        filterForm.reset()
    })
}

showInUi_grade()
//===== This is for Webpage UI *end ===

