function Menu(){

const button = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

button.addEventListener('click',() => {
    button.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
})


}

export default Menu

