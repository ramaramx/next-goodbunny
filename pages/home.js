import Header from '/components/Header.js'
import Slider from '/components/Slider.js'
import Benefit from '/components/Benefit.js'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'




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

   <div className='jumbotron' style={{background:"#2368a2", marginTop:"-10px" , paddingTop:"100px" , paddingBottom:"100px"}}>
   <Image
      alt='sdg-image'
      src='/text-section1.png'
      width={1942}
      height={406}
      />
    
    {/* <h4 className='container' style={{color:"white", textAlign:"center"}}>A friendly and loving community who believes that anyone from anywhere regardless of
background, social status, age, race & gender can COLLECTIVELY make a POSITIVE IMPACT to the
world. Consisting of 7,777 uniquely AI powered generative NFT bunnies surfing & hopping around
the Bunnyverse. GoodBunnies are now on a mission to spread goodness and empower
Changemakers on Earth, starting from Indonesia!</h4> */}
   </div>

    <div className='bg-section1'>
   <div className='container'>
    <div className='row '>
      <div className='col-md-6'>
      <Image
      alt='sdg-image'
      src='/sdg.png'
      width={400}
      height={400}
      />
    

      </div>


      <div className='col-md-6 align-self-center'>
      
      <h2 style={{color:"white", textAlign:'left'}}>BUNNYFESTO</h2>
      <h3 style={{color:"white", textAlign:'left'}}>To advance the United Nations 17 Sustainable 
    Development Goals starting from Indonesia! 
    GoodBunny is dedicated to build a closed 
    -loop ecosystem that bridges web 2 and web 
    3 in the aspect of giving back, empowering 
    Agents of Change in making a difference.</h3>

      
      </div>
    </div>
   </div>
   </div>
   
   <><Slider/>

   <div className='bg-section3'> </div>
   <><Benefit/>
   <Image
      alt='sdg-image'
      src='/roadmap.png'
      width={1920}
      height={2400}
      priority
      />
   </>
   </>
   </>
   
   

   

   
  
    
  )
}

