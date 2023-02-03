let btnReadMore = document.querySelector('.read-more__btn');
let readMore = document.querySelector('.seo-text');

btnReadMore.addEventListener('click', function() {
    if(!readMore.classList.contains('active')) {
        readMore.classList.add('active');
    } else {
        readMore.classList.remove('active');;
    }
})