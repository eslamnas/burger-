/*=============== SHOW MENU ===============*/
let navMenu   = document.getElementById('nav__menu');
let navToggle = document.getElementById('nav__toggle');
let navClose  = document.getElementById('nav__close');
let navLink   = document.querySelectorAll('.nav__link');


navToggle.onclick = function(){
    navMenu.classList.add('left');
}

navClose.onclick = function(){
    navMenu.classList.remove('left')
}


/*=============== REMOVE MENU MOBILE ===============*/
let navAction = () =>{
    let navMenu   = document.getElementById('nav__menu');
        navMenu.classList.remove('left')
}

navLink.forEach(n=> n.addEventListener('click',navAction));

/*=============== ADD SHADOW HEADER ===============*/
let scrollHeader = () =>{

let header = document.getElementById('header');

this.scrollY >= 50 ? header.classList.add('shadow_header'): header.classList.remove('shadow_header')

}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
let scrollUP = document.querySelector('.sroll_Up');

window.onscroll = function(){
    if(this.scrollY >= 100){
        scrollUP.classList.add('show')
    }else{
        scrollUP.classList.remove('show')
    }
}


scrollUP.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
