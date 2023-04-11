

import { AiFillTwitterCircle } from 'react-icons/ai'
import { Icon } from '@iconify/react';
import brandGithubFilled from '@iconify/icons-tabler/brand-github-filled';
import { MdFacebook } from 'react-icons/md'

function About() {

  const SocialIcon = ({icon}) => (
    <button className="SocialIcon">
        {icon}
    </button>
)

    return (

<>


     {/* CONTAINER */}
    <div className="matrixBack justify-center h-full bg-black text-white" >
    <h2 className="text-5xl py-5 ml-2 lg:text-6xl"><span className="bg-white text-black">Who </span>Am I ?</h2>
      <div className="flex flex-col">
          <div className="w-4/5 justify-center m-auto  lg:w-1/2 lg:text-2xl ">
          <h2 className="w-full h-full  text-2xl text-cyan-50  lg:text-4xl lg:w lg:my-7 " >My Name is Darius Hansley And I Am Here To code   </h2>
            <p className="leading-6">Labore pariatur laboris et consequat in dolor adipisicing sit nisi do.
              Ipsum mollit incididunt est ea reprehenderit adipisicing tempor occaecat officia proident do ad Lorem.Occaecat quis adipisicing ut quis.</p>

              
            <ul className=" flex flex-row p-6 justify-center m-auto  socialLinks">
              
              <li>Facebook</li>
      
                    
            </ul>
          </div>

          <div className="flex m-auto justify-center lg:w-4/6">
            <img src="./src/img/about-meColor.png"></img>

            
          </div>

            <h1 className=" justify-center text-center text-4xl lg:text-6xl lg:mb-12">My Blogs</h1>
            <ol className="list-decimal flex flex-col px-6 pb-10 justify-center m-auto border-b-2 border-solid w-4/5  lg:flex-row ">
              
              <li>Love<p>Esse aute nostrud nulla ea.Duis pariatur et eiusmod sint voluptate consectetur magna fugiat nostrud mollit culpa dolore nostrud cupidatat.</p></li>
  <li>Love<p>Esse aute nostrud nulla ea.Sint aute mollit dolore laborum commodo.</p></li>
     <li>Love<p>Esse aute nostrud nulla ea.Pariatur Lorem labore non duis proident aute et adipisicing.</p></li>
  <li>Love<p>Esse aute nostrud nulla uiu kuygyivyv jf tudysy yfuv yfuv  tyvuvgvt uv uuttfu ea.</p></li>
     <li>Love<p>Esse aute nostrud nulla ea.</p></li>
  <li>Love<p>Esse aute nostrud nulla ea.Lorem velit mollit commodo reprehenderit veniam quis pariatur laboris nulla.</p></li>

  
            </ol>
        
      </div>
    </div>
  </>
    )

   
  }
  
  export default About
  