function Portfolio() {


    return (
      
    <div className="flex flex-col h-full bg-black text-white pb-2 md:p-2" >


            <h2 className="ml-2 lg:text-8xl font-primary lg:ml-20 justify-center mb-4 mt-[100px] text-6xl lg:mt-[200px]"><span className="bg-white text-black">Port</span>folio</h2>

            <div className="">
                <ul className="flex flex-row flex-wrap gap-2 text-center md:m-2 lg:gap-2">
                      <li className=" bg-white w-1/2 h-[400px] portfolioOne lg:w-1/4 lg:h-[600px]" >
                        <div className="portSiteDesc">
                            <h3 className="text-2xl pb-3 font-primary">Fightcade</h3>
                            <p className="">I mimicked the layout and styling of Fightcade.A popular software that allows users to play old school fighting games with other players online. </p>
                        </div>
                       </li>
                       {/* image two */}
                      <li className="bg-cyan-300 w-1/2 flex-1 portfolioTwo lg:w-1/4">
                            <div className="portSiteDesc">
                            <h3 className="text-2xl pb-3">Kitty Bot</h3>
                            <p className="">A uniqe Twitch bot that randomly gives information on cats in the chat</p>
                        </div>
                        
                      </li>


                      <li className="bg-green-500 w-1/2 h-[400px] flex-initial portfolioThree lg:w-1/4 lg:h-[600px]">
                      <div className="portSiteDesc">
                            <h3 className="text-2xl pb-3">Front-End Mentor</h3>
                            <p className="">My attempt at a front end mentor challenge using tailwind and react JS</p>
                        </div>

                      </li>


                    <li className="bg-red-600 w-1/2 flex-1 portfolioFour lg:w-1/4">
                    <div className="portSiteDesc">
                            <h3 className="text-2xl pb-3">DeepSix Blocker</h3>
                            <p className="">A site for a fake VPN company that I designed based on keyword research</p>
                        </div>
                    </li>
                    
                </ul>

            </div>
    </div>
    )
  }
  
  export default Portfolio
  