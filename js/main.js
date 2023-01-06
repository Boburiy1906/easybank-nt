const elShowNav = document.querySelector('.show-nav');
const elHeaderWrapper = document.querySelector('.header__wrapper');

elHeaderWrapper.addEventListener('click', function(){
document.body.classList.toggle(".header__wrapper");
});
