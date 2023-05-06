function Hero() {


    return (
      
    <div className="flex flex-col pt-7 h-full hero-bg bg-black text-3xl lg:flex-row" >
      <div className="m-16 md:m-[100px] lg:mx-[80px] lg:mt-[10px] lg:w-1/2">
            <h2 className="font-primary w-full h-full text-4xl text-cyan-50 lg:text-4xl lg:h-min lg:mb-10" >The Two Most Important Days in Your Life: 
            The Day You Were <span className="bg-white text-black"> Born </span>
            and the Day You <span className="bg-white text-black"> Discover </span>Why
            
          </h2>
          
            <p className=" font-secondary hidden text-xl text-cyan-50 lg:text-2xl lg:flex lg:mb-2">My Objective is to make sites and applications that look amazing and perform at their best. Quis aute nisi labore in elit dolor minim ut.</p>
          <button className="hidden font-primary lg:inline-block m-auto text-cyan-50 border-2 w-1/2 text-2xl ">
            <a id="Portfolio" href=""/>"See My Work"<a/> 
            </button>
      </div>
        
        <div className=" bg-zinc-900 flex flex-row  mb-12  lg:w-1/2">  
            <img className="w-3/5 h-[300px]  lg:w-3/5 md:mx-32 lg:mr-20 lg:mt-2"  src="./src/img/Darius.jpg" />

            {/* <p className="font-primary stroke sideways text-[100px] h-[200px] w-[300px] text-black absolute" >WHO AM I
            </p> */}
            <button id="" className="m-auto absolute font-primary sideways text-cyan-50 w-[340px] top-[420px]  left-[171px]  text-6xl lg:hidden ">"See My Work" </button>
        </div>
      
    </div>
    )
  }
  
  export default Hero
  