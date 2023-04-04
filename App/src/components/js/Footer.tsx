import Links from "./Links"

function Footer() {


    return (
      
    <div className="flex flex-col justify-center m-auto text-center text-cyan-50 bg-black text-3xl border-t-2 border-white border-solid w-4/5" >
        <h1 className="flex justify-center">Darius Hansley</h1>

        <ul className="flex flex-row text-xl justify-center py-2">

            <li className="footerLinks">About</li>
            <li className="footerLinks">Blog</li>
            <li className="footerLinks">Portfolio</li>
            <li className="footerLinks bg-cyan-100 text-black">Find Me</li>
            
        </ul>

    </div>
    )
  }
  
  export default Footer
  