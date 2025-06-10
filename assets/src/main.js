const btnLeft = document.getElementById("btn-left"),
    btnRight = document.getElementById("btn-right"),
    slider = document.getElementById("slider"),
    sliderSection = document.querySelector("slider-section");

btnLeft.addEventListener("click", e => moveToLeft());
btnRight.addEventListener("click", e => moveToRight());

let cicle = 0,
    counter = 0;

function moveToRight(){
    if (counter >= 1){
        counter = 0;
        cicle = 0;
        slider.style.transform = `translate(-${cicle}%)`;
    }else {
        counter++;
        cicle = cicle + 50;
        slider.style.transform = `translate(-${cicle}%)`;
        slider.style.transition = "all ease .4s";
    }
}

function moveToLeft(){
    counter--;
    if (counter < 0){
        counter = 1;
        cicle = 50
        slider.style.transform = `translate(-${cicle}%)`;
    }else{
        cicle = cicle - 50;
        slider.style.transform = `translate(-${cicle}%)`;
        slider.style.transition = "all ease .4s";
    }
}
