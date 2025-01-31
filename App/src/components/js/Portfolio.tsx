function Portfolio() {


    return (
      
      
    <div className="flex flex-col h-full bg-black text-white pb-2 md:p-2" >


            <h2 id="Port" className="ml-2 lg:text-8xl font-primary justify-center mb-4 mt-9 text-6xl lg:mt-[200px]"><span className="bg-white text-black">Port</span>folio</h2>

            <div className="">
                <ul className="flex flex-row flex-wrap gap-2 text-center md:m-2 lg:gap-2">
                      <li className=" bg-white w-1/2 h-[400px] portfolioOne lg:w-1/4 lg:h-[600px]" >
                        
                        <div className="portSiteDesc">
                            <h3 className="text-4xl pb-3 font-primary">Fightcade</h3>
                            <p className="tracking-wider font-secondary mx-7">I mimicked the layout and styling of Fightcade. A popular software that allows users to play old school fighting games with other players online. </p>
                            <div className="flex justify-center">
                              <a href="https://fightcade.netlify.app/">
                                <img src="/src/img/www-click.png"></img>
                              </a>
                              <a href="https://github.com/darius410/FightcadeClone">
                                <img src="/src/img/github.png"></img>
                              </a>
                            </div>
                        </div>
                        
                       </li>
                      
                       {/* image two */}
                      <li className="bg-cyan-300 w-1/2 flex-1 portfolioTwo lg:w-1/4">

                            <div className="portSiteDesc">
                            <h3 className="text-4xl pb-3 font-primary" >Kitty Bot</h3>
                            <p className="tracking-wider font-secondary mx-7">A uniqe Twitch bot that randomly gives information on cats in the chat</p>
                              <div className="flex justify-center mt-10">
                              <a href="https://www.twitch.tv/popout/kittyfactzplz/chat?popout=">
                                <img src="/src/img/www-click.png"></img>
                              </a>
                              <a href="https://github.com/darius410/KittyFactz">
                                <img src="/src/img/github.png"></img>
                              </a>
                            </div>
                        </div>
                        
                      </li>


                      <li className="bg-green-500 w-1/2 h-[400px] flex-initial portfolioThree lg:w-1/4 lg:h-[600px]">
                      
                      <div className="portSiteDesc">
                            <h3 className="text-4xl pb-3 font-primary">Front-End Mentor</h3>
                            <p className="tracking-wider font-secondary mx-7">My attempt at a front end mentor challenge using tailwind and react JS</p>
                            <div className="flex justify-center mt-10">
                              <a href="https://anotherfrontendchallenge.netlify.app/">
                                <img src="/src/img/www-click.png"></img>
                              </a>
                              <a href="https://github.com/darius410/Front-End-Mentor-Challenge-Tailwind">
                                <img src="/src/img/github.png"></img>
                              </a>
                            </div>
                        </div>
                        
                      </li>


                    <li className="bg-red-600 w-1/2 flex-1 portfolioFour lg:w-1/4">
                    
                    <div className="portSiteDesc">
                      
                            <h3 className="text-4xl pb-3 font-primary">ASTRO BLOG</h3>
                            <p className="tracking-wider font-secondary px-7">My own personal blog site made using Astro.Please visit if you like opinions on gaming as well as coding</p>
                              <div className="flex justify-center mt-5">
                              <a href="https://chaosandvideogames.com/">
                                <img src="/src/img/www-click.png"></img>
                              </a>
                              <a href="https://github.com/darius410/Chaosandvideogames">
                                <img src="/src/img/github.png"></img>
                              </a>
                            </div>
                        </div>
                      
                    </li>
                    
                </ul>

            </div>
    </div>
    )
  }
  
  export default Portfolio
  