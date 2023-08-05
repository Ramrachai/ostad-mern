const imgSlider = document.getElementById('imgSlider')
const imgSliderPrev = document.getElementById('imgSlider-prev')
const imgSliderNext = document.getElementById('imgSlider-next')
let currentImg = 1;  

function displayImage(num){
    imgSlider.src = `./photos/${num}.jpg`
}

function imgNumber(action) {
    if(action === "+") {
        if(currentImg === 6){
            currentImg = 1
        } else {
            currentImg ++ 
        }
    } else if (action === "-"){
        if(currentImg === 1){
            currentImg = 6
        } else {
            currentImg--
        }
    }
    return currentImg
}

imgSliderPrev.addEventListener('click', ()=> displayImage(imgNumber("-")))
imgSliderNext.addEventListener('click', ()=> displayImage(imgNumber("+")))
