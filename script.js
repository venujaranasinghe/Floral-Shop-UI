// script.js
document.querySelector('#search-btn').onclick = () => {
    document.querySelector('.header').classList.toggle('search-active');
    navbar.classList.remove('active');
};

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick =() => {
    navbar.classList.toggle('active');  
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

