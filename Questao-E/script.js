// const botaoMenu = document.querySelector('.header__button--menu');
// const botaoMenuClose = document.querySelector('.menu__button');
// const menu = document.querySelector('.menu');

// botaoMenu.addEventListener('click', () =>{
//     if(menu.classList.contains("menu-open")){
//         document.body.style.overflow = "auto";
//     }else{
//         document.body.style.overflow = "hidden";
//     }

//     menu.classList.toggle('menu-open');
// })

function openMenu(){
    document.querySelector('aside.menu').classList.add('menu-open');
    document.body.style.overflow = "hidden";
}

function closeMenu(){
    document.querySelector('aside.menu').classList.remove('menu-open');
    document.body.style.overflow = "auto";
}

function openSearch(){
    document.querySelector('input.header__search').classList.add('header__search--open');
    document.querySelector('img.header__logo').classList.add('header__logo--close');
    document.querySelector('button.header__button--search').classList.add('header__button--search-close');
    document.querySelector('button.search-close').classList.add('search-open');
}

function closeSearch(){
    document.querySelector('input.header__search').classList.remove('header__search--open');
    document.querySelector('img.header__logo').classList.remove('header__logo--close');
    document.querySelector('button.header__button--search').classList.remove('header__button--search-close');
    document.querySelector('button.search-close').classList.remove('search-open');
}
