import Header from '/components/Header.js'





import React, { useEffect, useRef } from "react";


export default function Home(){
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  
  


  return (
    
  
    <><Header />
      
      
		
	
   <video
   style={{ maxWidth: "100%", width: "100%", margin: "0" }}
   playsInline
   loop
   muted
   alt="All the devices"
   src="/bunnyverse_animated.mp4"
   ref={videoEl}
   />

   <div className='jumbotron' style={{background:"blue", marginTop:"-10px" , paddingTop:"100px" , paddingBottom:"100px"}}>
    <p style={{color:"white", fontSize:"18px", textAlign:"center"}}>A friendly and loving community who believes that anyone from anywhere regardless of
background, social status, age, race & gender can COLLECTIVELY make a POSITIVE IMPACT to the
world. Consisting of 7,777 uniquely AI powered generative NFT bunnies surfing & hopping around
the Bunnyverse. GoodBunnies are now on a mission to spread goodness and empower
Changemakers on Earth, starting from Indonesia!</p>
   </div>
   </>

   
  
    
  )
}

