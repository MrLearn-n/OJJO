'use strict';

let btn = document.querySelectorAll('.slider__btn');
let slider = document.querySelectorAll('.slider'); 
btn.forEach(item => {
    item.addEventListener('click', function(event) {
        let target = event.target;
        activeBtn(target.dataset.num);
        activeSlider(target.dataset.num);
    })
})

function activeSlider (idSlide) {
    slider.forEach(item => {
        item.classList.remove('active');
    })
    if(true) {
        slider[idSlide].classList.add('active');
    }
}

function activeBtn (idBtn) {
    btn.forEach(item => {
        item.classList.remove('active')
    })

    if(true) {
        btn[idBtn].classList.add('active');
    }
}

