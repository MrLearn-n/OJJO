let catalogBtn = document.querySelectorAll('.catalog-list-btn');
let catalogMenu = document.querySelectorAll('.catalog-list-menu');

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