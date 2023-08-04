let manipulateResult = document.getElementById("manipulateResult")
let manipulateBtn = document.getElementById("manipulateBtn")

function randomTextGen(){
    let textArr = [
        'ostad.app',
        "mern course", 
        "Rabbil hasan", 
        "ramrachai marma", 
        "random text", 
        "awesome team", 
        "batch 4"
    ]

    let randNum = Math.floor( Math.random() * textArr.length )
    while (randNum === previousNum) {
        randNum = Math.floor(Math.random() * textArr.length);
      }
    manipulateResult.innerText = textArr[randNum]
    previousNum = randNum
}

manipulateBtn.addEventListener('click', randomTextGen)
let previousNum = -1 