

import { AiFillTwitterCircle } from 'react-icons/ai'
import { Icon } from '@iconify/react';
import brandGithubFilled from '@iconify/icons-tabler/brand-github-filled';
import { MdFacebook } from 'react-icons/md'
import SocialLinks from './SocialLinks';

function About() {



    return (

<>


     {/* CONTAINER */}
    <div className="matrixBack justify-center h-full bg-black text-white" >
    <h2 className="text-5xl py-5 ml-2 lg:text-8xl font-primary lg:ml-20"><span className=" text-black">Who</span> Am I ?</h2>
      <div className="flex flex-col">
          <div className="w-4/5 justify-center m-auto  lg:w-1/2 lg:text-3xl">
          <h2 className="font-primary my-7 w-full h-full  text-3xl text-cyan-50  lg:text-6xl text-center  " >My Name is <span className="text-black h-3"> Darius Hansley</span> And I Am Here To code   </h2>
            <p className="text-2xl mb-6 leading-6 font-secondary font-light tracking-wider ">Labore pariatur laboris et consequat in dolor adipisicing sit nisi do.
              Ipsum mollit incididunt est ea reprehenderit adipisicing tempor occaecat officia proident do ad Lorem.Occaecat quis adipisicing ut quis.Pariatur aliqua tempor incididunt enim id velit do eiusmod irure consequat mollit duis mollit.In id sunt non sunt commodo dolor non laborum nostrud.Amet velit esse pariatur ad laborum in est et velit.</p>

         

              
           <SocialLinks/>

          </div>

          <div className="flex m-auto justify-center lg:w-4/6">
            <img src="./src/img/about-meColor.png"></img>

            
          </div>

            <h1 className=" ml-2 lg:text-8xl font-primary lg:ml-20 justify-center mb-4 mt-[100px] text-6xl lg:mt-[200px]">My <span className="text-black h-3">Blogs</span></h1>
            <ol className="font-secondary flex flex-col lg:flex-wrap gap-1 px-2 pb-10 lg:pb-10 justify-center m-auto border-b-2 border-solid w-4/5 lg:h-[300px] lg:gap-2 ">
              
              <li className="bg-white text-black lg:w-1/2 lg:h-20 text-3xl pl-3">Mastering Javascript Before 30<p className="text-base">Esse aute nostrud nulla ea.Duis pariatur et eiusmod sint voluptate consectetur magna fugiat nostrud mollit culpa dolore nostrud cupidatat.</p></li>
              <li className="bg-white text-black lg:w-1/2 lg:h-20 text-3xl pl-3">Why Learning Code On Youtube Is Harder Then It Should Be<p className="text-base">Esse aute nostrud nulla ea.Duis pariatur et eiusmod sint voluptate consectetur magna fugiat nostrud mollit culpa dolore nostrud cupidatat.</p></li>
              <li className="bg-white text-black lg:w-1/2 lg:h-20 text-3xl pl-3">Things I hate About Your Video Game Trailer<p className="text-base">Esse aute nostrud nulla ea.Duis pariatur et eiusmod sint voluptate consectetur magna fugiat nostrud mollit culpa dolore nostrud cupidatat.</p></li>
              <li className="bg-white text-black lg:w-1/2 lg:h-20 text-3xl pl-3">The Future Of Video Games Are Free To Play RogueSoul Lites<p className="text-base">Esse aute nostrud nulla ea.Duis pariatur et eiusmod sint voluptate consectetur magna fugiat nostrud mollit culpa dolore nostrud cupidatat.</p></li>
              <li className="bg-white text-black lg:w-1/2 lg:h-20 text-3xl pl-3">Should You Invest In Video game Companies?<p className="text-base">Esse aute nostrud nulla ea.Duis pariatur et eiusmod sint voluptate consectetur magna fugiat nostrud mollit culpa dolore nostrud cupidatat.</p></li>
              <li className="bg-white text-black lg:w-1/2 lg:h-20 text-3xl pl-3">Am I Afraid Of AI Taking Jobs ?<p className="text-base">Esse aute nostrud nulla ea.Duis pariatur et eiusmod sint voluptate consectetur magna fugiat nostrud mollit culpa dolore nostrud cupidatat.</p></li>
           
  
            </ol>
        
      </div>
    </div>
  </>
    )

   
  }


  
  export default About
  