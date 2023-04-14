
import { useState } from "react";



const Links = () => {

const [openMenu, setOpenMenu] = useState(true);

const button = document.getElementById('menu-btn')
const menu = document.getElementById('menu')



        return (
            <>   
  
        <nav class="relative container mx-auto p-6 ">
     
            <div className="flex items-center justify-between">
                <div className="">
                  <p className="lg:text-2xl">Darius Hansley</p>

                </div>
              
                <div className="hidden lg:text-2xl md:flex space-x-6">
                    <a href="" class="hover:text-dark" >About</a>
                    <a href="" class="hover:text-darkGrayishBlue" >Blog</a>
                    <a href="" class="hover:text-darkGrayishBlue" >Portfolio</a>
                    <a href="" class="hover:text-darkGrayishBlue" >Find Me</a>
      
                </div>

          
            
                <button id="menu-btn" onClick={() => setOpenMenu(!openMenu)}class="block hamburger md:hidden focus:outline-none">
                    <span className="hamburger-top"></span>

                    <span class="hamburger-middle"></span>
                    <span class="hamburger-bottom"></span>
                </button>
            </div>
     
            <div class="md:hidden">
                <div id="menu" class="absolute flex-col hidden items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop0shadow-md">
                    <a href="" >Pricing</a>
                    <a href="" >Product</a>
                    <a href="" >About Us</a>
                    <a href="" >Careers</a>
                    <a href="" >Pricing</a>
                    <a href="" >Community</a>                    
                </div>
            </div>
        </nav>
            </>

        

        )

};
export default Links