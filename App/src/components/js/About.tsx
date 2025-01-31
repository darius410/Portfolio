

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
    <div className="justify-center mt-10 h-full bg-black text-white" >
    {/* <h2 className="text-5xl py-5 ml-2 lg:text-8xl font-primary lg:ml-20" id="About"><span className=" text-black">Who</span> Am I ?</h2> */}
      <div className="flex flex-col ">
          <div className="w-4/5 justify-center m-auto  lg:w-1/2 lg:text-3xl">
          <h2 className="font-primary my-7 w-full h-full  text-3xl text-cyan-50  lg:text-6xl text-center  " >My Name is <span className="text-black h-3"> Darius Hansley</span> And I'm a web developer   </h2>
            <p className="text-3xl text-center mb-8 leading-8 font-secondary font-light tracking-wider ">I'm a front end developer in the state of Maryland that has done allot of work in debugging CSS issues and fixing JavaScript errors.
                 I enjoy making websites that look great and have great accessibility for the people that use them. My goal in the next five to ten years is to become more familiar with other languages as well as do work on the backend of technology stacks
                  to better help other development teams.
                  </p>


                  <h2 className='text-3xl text-center mb-6 leading-6 font-primary font-light tracking-wider text-black h-3'><span>What Am  currently I doing?</span></h2> 
               
                
                  <ul className='text-2xl mb-10 leading-8 font-secondary font-light tracking-widest text-center list-disc list-inside'>
                    <li> Im currently spending my time doing coding competitions via Hacker rank.</li>
                    <li>Learning the Golang Programming language.</li>
                    <li>Updating websites to have better accessibility</li>

                  </ul>
                  
                
                 
         
                 
              
      

          </div>

          <div className="flex m-auto justify-center lg:w-4/6">
            <div>
              
            </div>
              

            
          </div>

            {/* <h1 id="Blogs" className=" ml-2 lg:text-9xl font-primary  justify-center mb-4 mt-[100px] text-8xl lg:mt-[200px]">My <span className="text-black h-3">Blogs</span></h1> */}
            {/* <ol className="font-primary gap-y-2 flex max-w-max flex-wrap  mb-[100px] lg:pb-10 w-full">
              
           
           
              <li className="blogs flex flex-wrap md:flex-nowrap text-white md:mx-3 lg:m-0 lg:w-1/2 lg:h-full text-3xl ">
                <img className="lg:w-1/2 md:max-h-72 lg:max-h-max" src="./img/30birthday.png"></img>
                <div className='flex flex-col m-2'>
                  <span className="font-secondary">Coding</span>
                  <h2 className='text-5xl lg:text-3xl '><a href="https://chaosandvideogames.com/blogs/blog-1/">Mastering Javascript Before 30</a></h2>
                  <p className="text-1xl font-secondary lg:text-xl ">To master Javascript before the age of thirty is a pretty easy, but unrealistic goal to set for.</p>
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
                <img className="lg:w-1/2 md:max-h-72 lg:max-h-max" src="./img/startup.jpg"></img>
                <div className='flex flex-col m-2'>
                <span className="font-secondary">Coding</span>
                <h2 className='text-5xl lg:text-3xl '><a href="https://chaosandvideogames.com/blogs/blog-13/">Does Front End Development Exist Anymore?</a> </h2>
                  <p className="text-1xl font-secondary lg:text-xl ">In my opinion front end is started to become just a buzz word for newer devs.</p>
                </div>
              </li>

              <li className="blogs flex flex-wrap md:flex-nowrap text-white md:mx-3 lg:m-0 lg:w-1/2 lg:h-full text-3xl ">
                <img className="lg:w-1/2 md:max-h-72 lg:max-h-max" src="./img/marioandcharacters.png"></img>
                <div className='flex flex-col m-2'>
                <span className="font-secondary">Gaming</span>
                <h2 className='text-5xl lg:text-3xl '><a href='https://chaosandvideogames.com/blogs/blog-6/' >Are Video Game Movies Finally Good?</a></h2>
                  <p className="text-1xl font-secondary lg:text-xl ">With the recent success of the super mario movie,does this mean that we are finally able to get video game movies that fulffull the viewers and fans of the franchise its based upon ?</p>
                </div>
              </li>

            
 
            </ol> */}

             
        
      </div>
    </div>

    <Divider />

    <p className="text-3xl text-white text-center mt-10 leading-8 font-secondary font-light tracking-wider ">
                  If you wish to find me or examine my work you can click any of the links below.
                  As always...press F12 for nerd mode
                  </p>

         
                 
              
           <SocialLinks />
  </>
    )

   
  }


  
  export default About
  
