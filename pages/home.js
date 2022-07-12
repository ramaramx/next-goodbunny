/* eslint-disable react/no-unescaped-entities */
import Header from '/components/Header.js'
import Slider from '/components/Slider.js'
import Benefit from '/components/Benefit.js'
import Profile from '/components/Profile.js'
import Partner from '/components/Partner.js'
import Roadmap from '../components/Roadmap'
import Faq  from '/components/Faq'
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
  
 const CustomLoading = () => {
  <div className='loader-wrapper'>
    <div className='loader'>
      
    </div>
  </div>
 }


  return (
  
    <><Header />
      
      
		
	
   <video
  className='video-section1'
   style={{ maxWidth: "100%", width: "100%", margin: "0" }}
   playsInline
   loop
   muted
   alt="All the devices"
   src="/bunnyverse_animated.mp4"
   ref={videoEl}
   />

  <div className='jumbotron' style={{background:"#2368a2", marginTop:"-10px" , paddingTop:"100px" , paddingBottom:"100px"}}>
    <div className='container text-center'>
    <div style={{color:"white", fontSize:"26px"}}>A friendly and loving community who believes that anyone from anywhere regardless of
    background, social status, age, race & gender can 
    <p className='text-wrap bg-warning badge' style={{color:'#2368a2', fontSize:'28px'}}>COLLECTIVELY</p> 
    make a 
    <h3 className='badge bg-warning text-wrap' style={{color:'#2368a2', fontSize:'28px'}}>POSITIVE IMPACT</h3> 
    to the world. Consisting of 
    <h3 className='badge bg-success text-wrap' style={{color:'white', fontSize:'28px'}}>7,777 uniquely AI powered generative NFT bunnies </h3>
    surfing & hopping around the Bunnyverse. GoodBunnies are now on a mission to spread goodness and empower Changemakers on Earth,
    <h3 className='badge badge-pink text-wrap' style={{color:'white', fontSize:'28px'}}> starting from Indonesia!</h3>
    </div>

</div>
   </div>

    <div className='bg-section1'>
   <div className='container'>
    <div className='row '>
      <div className='col-md-4'>
      <Image
      className='ps-2'
      alt='sdg-image'
      src='/sdg.png'
      width={400}
      height={400}
      />
    

      </div>


      <div className='col-md-8 align-self-center'>
      
     <Image
     className='float-start ps-1'
     src="/goodbunny-title.png"
     alt='title-textsection2'
     width={500}
     height={200}
     
     />
      <div className='direction-goodbunny-text ps-5' 
      style={{color:"white", textAlign:'left',fontSize:'24px'}}>
      To advance the United Nations 17 Sustainable 
      Development Goals starting from Indonesia! 
      GoodBunny is dedicated to build a closed 
      -loop ecosystem that bridges web 2 and web 
      3 in the aspect of giving back, empowering 
      Agents of Change in making a difference.
      </div>

      
      </div>
    </div>
   </div>
   </div>
   
   <><Slider/>

   <div className='bg-section3'> </div>
   
   <><Benefit/>
   <><Roadmap/>
      <><Profile/>
      <><Partner/>
      <><Faq/>


  

   </>
   </>
   </>
   </>
   </>
   </>
   </>

   
   

   

   
  
    
  )
}

