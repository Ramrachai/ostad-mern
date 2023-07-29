
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
