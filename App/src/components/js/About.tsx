

//import { AiFillTwitterCircle } from 'react-icons/ai'
//import { Icon } from '@iconify/react';
//import brandGithubFilled from '@iconify/icons-tabler/brand-github-filled';
//import { MdFacebook } from 'react-icons/md'
import SocialLinks from './SocialLinks';
import Divider from './Divider';

function About() {



    return (

<>


     {/* CONTAINER */}
    <div className="matrixBack justify-center  h-full bg-black text-white" >
    <h2 className="text-5xl py-5 ml-2 lg:text-8xl font-primary lg:ml-20" id="About"><span className=" text-black">Who</span> Am I ?</h2>
      <div className="flex flex-col ">
          <div className="w-4/5 justify-center m-auto  lg:w-1/2 lg:text-3xl">
          <h2 className="font-primary my-7 w-full h-full  text-3xl text-cyan-50  lg:text-6xl text-center  " >My Name is <span className="text-black h-3"> Darius Hansley</span> And I Am Here To code   </h2>
            <p className="text-2xl mb-6 leading-6 font-secondary font-light tracking-wider ">Labore pariatur laboris et consequat in dolor adipisicing sit nisi do.
              Ipsum mollit incididunt est ea reprehenderit adipisicing tempor occaecat officia proident do ad Lorem.Occaecat quis adipisicing ut quis.Pariatur aliqua tempor incididunt enim id velit do eiusmod irure consequat mollit duis mollit.In id sunt non sunt commodo dolor non laborum nostrud.Amet velit esse pariatur ad laborum in est et velit.</p>

         
                  <Divider />
              
           <SocialLinks />

          </div>

          <div className="flex m-auto justify-center lg:w-4/6">
            <img src="./img/about-meColor.png"></img>

            
          </div>

            <h1 id="Blogs" className=" ml-2 lg:text-9xl font-primary  justify-center mb-4 mt-[100px] text-8xl lg:mt-[200px]">My <span className="text-black h-3">Blogs</span></h1>
            <ol className="font-primary gap-y-2 flex max-w-max flex-wrap  mb-[100px] lg:pb-10 w-full">
              
           
           
              <li className="blogs flex flex-wrap md:flex-nowrap text-white md:mx-3 lg:m-0 lg:w-1/2 lg:h-full text-3xl ">
                <img className="lg:w-1/2 md:max-h-72 lg:max-h-max" src="./img/BlogImage.png"></img>
                <div className='flex flex-col m-2'>
                  <span className="font-secondary">Coding</span>
                  <h2 className='text-5xl lg:text-3xl '>Mastering Javascript Before 30</h2>
                  <p className="text-1xl font-secondary lg:text-xl ">Ut tempor nostrud incididunt qui aliquip fugiat dolor cupidatat aliqua consequat.Esse aute nostrud nulla ea.Duis pariatur et eiusmod sint voluptate consectetur magna fugiat nostrud mollit culpa dolore nostrud cupidatat.</p>
                </div>
              </li>

              <li className="blogs flex flex-wrap md:flex-nowrap text-white md:mx-3 lg:m-0 lg:w-1/2 lg:h-full text-3xl ">
                <img className="lg:w-1/2 md:max-h-72 lg:max-h-max" src="./img/youtubecomputer.png"></img>
                <div className='flex flex-col m-2'>
                <span className="font-secondary">Coding</span>
                <h2 className='text-5xl lg:text-3xl '>The downsides of Youtube studying</h2>
                  <p className="text-1xl font-secondary lg:text-xl ">Youtube can be a great source for learning how to code for free,but what if it also the worst way to learn?</p>
                </div>
              </li>

                 <li className="blogs flex flex-wrap md:flex-nowrap text-white md:mx-3 lg:m-0 lg:w-1/2 lg:h-full text-3xl ">
                <img className="lg:w-1/2 md:max-h-72 lg:max-h-max" src="./img/tekken7 yoshi.png"></img>
                <div className='flex flex-col m-2'>
                <span className="font-secondary">Coding</span>
                <h2 className='text-5xl lg:text-3xl '>Does Front End Development Exist Anymore?</h2>
                  <p className="text-1xl font-secondary lg:text-xl ">In my opinion front end is started to become just a buzz word for newer devs.</p>
                </div>
              </li>

              <li className="blogs flex flex-wrap md:flex-nowrap text-white md:mx-3 lg:m-0 lg:w-1/2 lg:h-full text-3xl ">
                <img className="lg:w-1/2 md:max-h-72 lg:max-h-max" src="./img/marioandcharacters.png"></img>
                <div className='flex flex-col m-2'>
                <span className="font-secondary">Gaming</span>
                <h2 className='text-5xl lg:text-3xl '>Are Video Game Movies Finally Good?</h2>
                  <p className="text-1xl font-secondary lg:text-xl ">With the recent success of the super mario movie,does this mean that we are finally able to get video game movies that fulffull the viewers and fans of the franchise its based upon ?</p>
                </div>
              </li>

            
 
            </ol>

             
        
      </div>
    </div>

    <Divider />
  </>
    )

   
  }


  
  export default About
  
