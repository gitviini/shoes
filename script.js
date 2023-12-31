const menu = document.querySelector('#menu')
const menubox = document.querySelector('#menubox')

menu.addEventListener('click',()=>{
    document.querySelector('#logo').classList.toggle('click')
    menu.classList.toggle('click')
    menubox.classList.toggle('click')
})