const counterResult = document.getElementById("counterResult")
const counterBtnIncrease = document.getElementById("counterBtn-increase")
const counterBtnDecrease = document.getElementById("counterBtn-decrease")
let count = 0 

function increase(){
    count++
    counterResult.innerText = count
}
function decrease (){
    count--
    counterResult.innerText = count
}

counterBtnIncrease.addEventListener('click', increase)
counterBtnDecrease.addEventListener('click', decrease)