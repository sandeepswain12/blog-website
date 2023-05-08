burgerresp = document.querySelector('.burger');
Navbarresp = document.querySelector('.navbar');
listitemresp = document.querySelector('.list-item');
rightresp = document.querySelector('.right');

burgerresp.addEventListener('click', ()=>{
    Navbarresp.classList.toggle('h-nav');
    listitemresp.classList.toggle('v-nav');
    rightresp.classList.toggle('v-nav');
})
