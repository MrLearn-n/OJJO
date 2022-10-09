let catalogBtn = document.querySelectorAll('.catalog-list-btn');
let catalogMenu = document.querySelectorAll('.catalog-list-menu');

let btnMoreProduct = document.querySelector('.catalog__column__btn');
let contentMoreProduct = document.querySelector('.catalog-column.moreProduct');

let btnReadMore = document.querySelector('.read-more__btn');
let readMore = document.querySelector('.seo-text');


const activeHide = (btn, content) => {
    btn.addEventListener('click', function() {
        if(!content.classList.contains('active')) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');;
        }
    })
}

activeHide(btnMoreProduct, contentMoreProduct);
activeHide(btnReadMore, readMore);

var i = 0;

catalogBtn.forEach(item => {
    item.addEventListener('click', function(event) {
        let target = event.target;
        i++;
        showMenu(target.dataset.num);
        hiddenMenu();
    })
})

function showMenu (id) {
    catalogMenu.forEach(item => {
        item.classList.remove('active');
    })
    catalogMenu[id].classList.add('active');
}

function hiddenMenu () {
    if( i % 2 == 0) {
        catalogMenu.forEach(item => {
            item.classList.remove('active');
        })
    }
}