'use strict';

let burgerBtn = document.querySelector('.burger-btn');
let burgerMenu = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', function () {
    if(!burgerMenu.classList.contains('active') && !burgerBtn.classList.contains('active')) {
        burgerBtn.classList.add('active')
        burgerMenu.classList.add('active');
    } else {
        burgerBtn.classList.remove('active')
        burgerMenu.classList.remove('active');
    }
})