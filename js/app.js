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


// var submit = document.getElementById('send');
// submit.addEventListener('click', getText, false);

/* consumiendo api generadora de usuarios aleatorios */
function getUsers(){
    fetch("https://randomuser.me/api/?results=2")
    .then((results) => {
        return results.json();
    })
    .then((data)=>{
        let pElement = document.querySelector('.reviews__apidata');
        console.log(data);
        pElement.textContent = JSON.stringify(data);
    })
}

function setMyAlert(title, text, alert_type){
    var myAlert = document.getElementById('myalert__container');
    var mytitle = myAlert.querySelector('.myalert__title');
    var mytext = myAlert.querySelector('.myalert__text');
    var iconContent = myAlert.querySelector('.myalert__icon-container')
    var icon;

    switch(alert_type){
        case 'success':
            myAlert.classList.add('alert__success');
            icon ='<i class="fa fa-check-circle"></i>';
            break;
        case 'error':
            myAlert.classList.add('alert__error');
            icon = '<i class="fa fa-times-circle"></i>'; 
            break;
        default:
            myAlert.classList.add('alert__warning');
            icon = '<i class="fa fa-exclamation-triangle"></i>';
            break;
    }

    mytitle.textContent = title;
    mytext.textContent = text;
    iconContent.innerHTML = icon;
    myAlert.classList.toggle('myalert--show');
}

function myalertClose(){
    var myAlert = document.getElementById('myalert__container');
    myAlert.classList.toggle('myalert--show');
    try{
        myAlert.classList.remove('alert__success') || myAlert.classList.remove('alert__warning') || myAlert.classList.remove('alert__error');
    }catch(err){
        alert(err);
    }
}