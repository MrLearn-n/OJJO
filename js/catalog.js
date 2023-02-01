let catalogBtn = document.querySelectorAll('.catalog-list-btn');
let catalogMenu = document.querySelectorAll('.catalog-list-menu');

let btnMoreProduct = document.querySelector('.catalog__column__btn');
let contentMoreProduct = document.querySelector('.catalog-column.moreProduct');

let btnReadMore = document.querySelector('.read-more__btn');
let readMore = document.querySelector('.seo-text');


const showMore = (btn, content) => {
    btn.addEventListener('click', function() {
        if(!content.classList.contains('active')) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');;
        }
    })
}

showMore(btnMoreProduct, contentMoreProduct);
showMore(btnReadMore, readMore);



catalogBtn.forEach(item => {
    item.addEventListener('mouseover', function(event) {
        let target = event.target;
        showMenu(target.dataset.num);
    })
})

function showMenu (id) {
    catalogMenu.forEach(item => {
        item.classList.remove('active');
    })
    catalogMenu[id].classList.add('active');

    catalogMenu[id].addEventListener('mouseover', function(event){
        let target = event.target;
        if(target) {
            catalogMenu[id].classList.add('active');
        }
    })
    catalogMenu[id].addEventListener('mouseout', function(){
        catalogMenu[id].classList.remove('active');
    })
}