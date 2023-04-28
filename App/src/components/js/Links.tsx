
// import HamburgerMenu from './HamburgerMenu'
import React,{useState} from 'react'



const Links = () => {

const [menuOpen, setMenuOpen] =  useState(false);

//  const button = document.getElementById('menu-btn');
// const menu = document.getElementById('menu');

// button?.addEventListener('click',function() {
//         menu?.classList.add('is-active');
//         button?.classList.add('is-active');

    
// });

const handleToggle = () => {
    setMenuOpen(!menuOpen);


};





        return (
            <>   
  
        <nav className=" relative  mx-auto z-10">
     
            <div className="flex items-center justify-between h-20 bg-red-600">
                
                <div className="pl-12">
                  <p className="text-2xl lg:text-3xl">Darius Hansley</p>

                </div>
              

                <div className="hidden lg:text-2xl md:flex space-x-6">

                    <div className="hidden text-white text-2xl md:flex space-x-6 pr-6">

                        <a href="" className="hover:text-dark" >About</a>
                        <a href="" class="hover:text-darkGrayishBlue" >Blog</a>
                        <a href="" class="hover:text-darkGrayishBlue" >Portfolio</a>
                        <a href="" className="text-red-600" ><span> Find Me </span></a>
        
                    </div>

           
                </div>

        <button id="menu-btn" onClick={handleToggle} className="block mr-12 hamburger md:hidden focus:outline-none">
            <span className="hamburger-top"></span>

            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
    </button>


            </div>
                        

     
            <div className="z[-20] md:hidden">
                <div id="menu" className = {`hidden -z-20 text-3xl w-full absolute flex-col items-center self-end py-8 space-y-6 font-bold bg-white sm:self-center mobileMenu ${menuOpen ? "mobileMenu" : "hideMobileMenu"}`}  >
                    <a href="#About" >About</a>
                    <a href="#Blogs" >Blogs</a>
                    <a href="#Port" >Portfolio</a>
                    <a href="" >Find Me</a>
                               
                </div>
            </div>
        </nav>
            </>

        

        )

};
export default Links