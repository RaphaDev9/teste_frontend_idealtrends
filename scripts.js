function bannerPrincipal(){
    new Splide('#banner_principal', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        interval: 2000,
        arrows: false,
        loop: true,
        pagination: false
      }).mount();
}

function menuMobile(){
    /* abrir/fechar menu ao clicar no botão menu mobile  */

    let buttonMenu = document.querySelector('.button-menu-mobile');

    buttonMenu.addEventListener('click', function(){
        document.querySelector('.container-topo .menu').classList.toggle('active');
    })

    /* abrir submenu mobile */

    let submenu1 = document.querySelectorAll(".container-topo li.titulo-menu.submenu h3");

    submenu1.forEach(function(menu){
        menu.addEventListener('click', function(){
            this.classList.toggle('open');
        });
    });

    let submenu2 = document.querySelectorAll('.container-topo li.item-lista.submenu p');

    submenu2.forEach(function(menu){
        menu.addEventListener('click', function(){
            this.classList.toggle('open');
        });
    });
}

function gridMobile(){
    console.log('AAAAA')
    new Splide('#box_mobile', {
        type: 'loop',
        perPage: 1,
        autoplay: false,
        interval: 2000,
        arrows: true,
        loop: true,
        pagination: false
      }).mount();
}

document.addEventListener('DOMContentLoaded', function () {
    bannerPrincipal();

    if (window.innerWidth <= 768) {
        menuMobile();
        gridMobile();
    }
});

