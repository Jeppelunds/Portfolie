const compass = document.querySelector('.fa-compass')
const navBox = document.querySelector('.navigation-box')

compass.addEventListener('click', myFunction)

function myFunction(){
navBox.classList.toggle('active')
}


