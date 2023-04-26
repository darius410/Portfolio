
// import HamburgerMenu from './HamburgerMenu'
import React,{useState} from 'react'
import HamburgerMenu from "./HamburgerMenu";


const Links = () => {

const [menuOpen, setMenuOpen] =  useState(false);

 const button = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

button?.addEventListener('click',function() {
        menu?.classList.add('is-active');
        button?.classList.add('is-active');

    
});

const handleToggle = () => {
    setMenuOpen(!menuOpen);


};





        return (
            <>   
  
        <nav className="z-10 relative w-full mx-auto py-6">
     
            <div className="flex items-center justify-between ">
                
                <div className="pl-6">
                  <p className="text-2xl lg:text-3xl">Darius Hansley</p>

                </div>
              

                <div className="hidden lg:text-2xl md:flex space-x-6">

                    <div className="hidden text-2xl md:flex space-x-6 pr-6">

                        <a href="" class="hover:text-dark" >About</a>
                        <a href="" class="hover:text-darkGrayishBlue" >Blog</a>
                        <a href="" class="hover:text-darkGrayishBlue" >Portfolio</a>
                        <a href="" className="" >Find Me</a>
        
                    </div>

           
                </div>

        <button id="menu-btn" onClick={handleToggle} className="block mr-6 hamburger md:hidden focus:outline-none">
            <span className="hamburger-top"></span>

            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
    </button>


            </div>
                        

     
            <div className="md:hidden ">
                <div id="menu" className = {`hidden z-0 text-3xl w-full absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center mobileMenuOpen ${menuOpen ? "mobileMenu" : "hideMobileMenu"}`}  >
                    <a href="" >About</a>
                    <a href="" >Blog</a>
                    <a href="" >Portfolio</a>
                    <a href="" >Find Me</a>
                               
                </div>
            </div>
        </nav>
            </>

        

        )

};
export default Links