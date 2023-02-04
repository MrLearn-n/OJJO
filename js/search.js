let btnSearch = document.querySelector('.seacrh-click-btn')
let inputSearch = document.querySelector('.search-after_click');
let contentSearch = document.querySelector('.search');

btnSearch.addEventListener('click', function() {
    if(!inputSearch.classList.contains('active')) {
        inputSearch.classList.add('active');
        btnSearch.classList.add('active')
        contentSearch.classList.add('active');
    } else {
        inputSearch.classList.remove('active');
        btnSearch.classList.remove('active')
        contentSearch.classList.remove('active');
    }
})
