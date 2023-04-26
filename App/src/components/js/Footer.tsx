import Links from "./Links"

function Footer() {


    return (
      
    <div className="flex flex-col justify-center m-auto text-center text-cyan-50 bg-black text-3xl border-t-2 border-white border-solid w-4/5 h-[150px] lg:flex-row lg:justify-around lg:h-[100px] lg:items-center " >
        <h1 className="flex justify-center font-primary text-2xl lg:text-4xl ">Darius Hansley.com</h1>

        <ul className="flex flex-row text-3xl justify-center py-2 font-primary mt-3 lg:py-0 lg:h-9 lg:mt-0">

            <li className="footerLinks">About</li>
            <li className="footerLinks">Blog</li>
            <li className="footerLinks">Portfolio</li>

            <li className="footerLinks text-black"><span>Find Me</span></li>
        </ul>

    </div>
    )
  }
  
  export default Footer
  