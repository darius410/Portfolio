
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
     
            <div className="flex items-center justify-between h-20 bg-white">
                
                <div className="pl-5">
                  <img src="./img/Untitled-1.png" className="w-3/5 self-center lg:pl-16"/>

                </div>
              

                <div className="hidden lg:text-2xl md:flex space-x-6 ">

                    <div className="hidden items-center justify-between text-black text-3xl md:flex md:w-full md:min-w-max md:text-5xl pr-40 lg:pl-10">

                        {/* <a href="" className="hover:text-dark md:pr-6" >About</a> */}
                        <a href="https://chaosandvideogames.com" className="hover:text-darkGrayishBlue pr-12" >Blog</a>
                        {/* <a href="" className="hover:text-darkGrayishBlue pr-6" >Portfolio</a> */}
                        <a href="https://www.linkedin.com/in/darius-hansley-96b752147" className=" text-black bg-black w-[300px];" ><span> Find Me </span></a>
        
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
                    {/* <a href="#About" >About</a> */}
                    <a href="#Blogs" >Blogs</a>
                    {/* <a href="#Port" >Portfolio</a> */}
                    <a href="" >Find Me</a>
                               
                </div>
            </div>
        </nav>
            </>

        

        )

};
export default Links