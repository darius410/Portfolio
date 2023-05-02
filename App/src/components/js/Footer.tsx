import Divider from "./Divider"


function Footer() {


    return (

        <>

        <Divider />

        <div className="flex flex-col justify-center m-auto text-center text-cyan-50 bg-black text-3xl  w-full h-[150px]  lg:px-20 lg:flex-row lg:justify-between lg:h-[100px] lg:items-center" >
     
                  <img src="./src/img/Untitled-2.png" className="w-3/5 self-center lg:w-1/4"/>

                

        <ul className="flex flex-row text-3xl justify-center py-2 font-secondary mt-3 lg:py-0 lg:h-9 lg:mt-0">

            <li className="footerLinks"> ABOUT </li>
            <li className="footerLinks"> BLOG </li>
            <li className="footerLinks"> PORTFOLIO </li>
            <li className="footerLinks text-black"><span> FIND ME </span></li>
            
        </ul>

    </div>

    </>
    )
  }
  
  export default Footer
  