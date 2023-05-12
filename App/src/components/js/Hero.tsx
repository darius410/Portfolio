function Hero() {


    return (
      
    <div className="flex flex-col pt-24 h-full hero-bg bg-black text-3xl lg:flex-row lg:pt-40 " >
      <div className="m-16 md:m-[100px] lg:mx-[80px] lg:mt-[10px] lg:w-1/2">
            <h2 className="font-primary w-full h-full text-5xl text-cyan-50 lg:h-min lg:mb-10" > The Two Most Important Days in Your Life: 
            The Day You Were <span className="bg-white text-black"> Born </span>
            and the Day You <span className="bg-white text-black"> Discover </span>Why
            
          </h2>
          
            
          
          
      
      
          {/* <button className="hidden font-primary lg:inline-block m-auto text-cyan-50 border-2 w-1/2 text-2xl ">
            <a id="Portfolio" href=""/>"See My Work"<a/> 
            </button>  */}


      </div>
        
        <div className=" flex flex-row justify-between mb-12 lg:pt-0 pt-20  lg:w-1/2">  
            <img className="w-3/5 h-[300px] md:mx-32 md:w-9/12 md:h-1/3 md:ml-2 lg:w-8/12  lg:h-full lg:mr-20 lg:mt-2"  src="./src/img/Darius.jpg" />

      <p className="font-primary stroke sideways text-[140px] h-[100px] w-[400px] bottom-20 -right-24 md:right-12 text-black md:top-24 md:text-[150px] md:w-1/2 lg:hidden" >WHO AM I ?
            </p>  
          
     
        </div>
      
    </div>
    )
  }
  
  export default Hero
  