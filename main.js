var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var subNavColl = document.querySelectorAll('.sub-nav');
for(var i = 0; i < subNavColl.length; i++){
    subNavColl[i].addEventListener('mouseover', function(){
        document.querySelector('.dropdown-menu').classList.toggle('db');
    }); 
    subNavColl[i].addEventListener('mouseout', function(){
        document.querySelector('.dropdown-menu').classList.toggle('db');
    }); 
}