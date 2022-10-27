var menu = document.querySelector('.menu__hamburger');

function toggleMenu(event){
    this.classList.toggle('menu__hamburguer--active');
    document.querySelector('.menu__list').classList.toggle('menu__list--active');
    event.preventDefault();
}

menu.addEventListener('click', toggleMenu, false);

window.onresize = function(){
    winWidth = window.innerWidth;
    if(winWidth >= 480){
        document.querySelector('.menu__list').classList.remove('menu__list--active');
    }
}

/* validacion de formulario */
function getText(){
    var email = document.getElementById("name");
    alert(email.value);
}

var submit = document.getElementById('send');
submit.addEventListener('click', getText, false);