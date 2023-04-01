import {useEffect, useState} from 'react';

const HamburgerMenu = () => {
    const [menuOpen, setMenuOpen] =  useState({ data: null, loading: true })

const button = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

useEffect(() => {

        button.addEventListener('click',() => {
        button.classList.toggle('open')
        menu.classList.toggle('flex')
        menu.classList.toggle('hidden')
 
})

})

return(

    <button id="menu-btn" onClick={() => setMenuOpen(!menuOpen)}class="block hamburger md:hidden focus:outline-none">
            <span className="hamburger-top"></span>

            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
</button>


)





}

export default HamburgerMenu

