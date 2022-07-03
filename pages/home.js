/* eslint-disable react/no-unescaped-entities */
import Header from '/components/Header.js'
import Slider from '/components/Slider.js'
import Benefit from '/components/Benefit.js'
import Profile from '/components/Profile.js'
import Partner from '/components/Partner.js'
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
  
{/* perbaiki container */}

     <h3 className='container ' style={{color:"white", textAlign:"center"}}>A friendly and loving community who believes that anyone from anywhere regardless of
background, social status, age, race & gender can <h3 className='badge bg-warning text-wrap' style={{color:'#2368a2', fontSize:'28px'}}>COLLECTIVELY</h3> make a <h3 className='badge bg-warning text-wrap' style={{color:'#2368a2', fontSize:'28px'}}>POSITIVE IMPACT</h3> to the
world. Consisting of  <h3 className='badge bg-success text-wrap' style={{color:'white', fontSize:'28px'}}>7,777 uniquely AI powered generative NFT bunnies </h3> surfing & hopping around
the Bunnyverse. GoodBunnies are now on a mission to spread goodness and empower
Changemakers on Earth,<h3 className='badge bg-danger text-wrap' style={{color:'white', fontSize:'28px'}}> starting from Indonesia!</h3>
</h3>
   </div>

    <div className='bg-section1'>
   <div className='container'>
    <div className='row '>
      <div className='col-md-5'>
      <Image
      alt='sdg-image'
      src='/sdg.png'
      width={400}
      height={400}
      />
    

      </div>


      <div className='col-md-7 align-self-center'>
      
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
      <><Profile/>
      <><Partner/>


  <div className='bg-section7'>
    <div className='container'>
      <h1 className='text-center text-white py-5 px-5'>FAQ</h1>
  {/* 1 */}
      <div className='d-grid gap-2'>
      <button className="btn btn-primary collapsed text-start rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample1" aria-expanded="false" aria-controls="collapseWidthExample1">
      <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing</h2>
      </button>
      </div>

    <div style={{minHeight: "20px"}}>
      <div className="collapse-vertical collapse" id="collapseWidthExample1" >
        <div className="card card-body rounded-pill" style={{width: '1300px'  }}>
        <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing</h2>
        </div>
      </div>
    </div>
    {/* 2 */}
    <div className='d-grid gap-2'>
      <button className="btn btn-primary collapsed text-start rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample2" aria-expanded="false" aria-controls="collapseWidthExample2">
      <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing</h2>
      </button>
      </div>
    
    <div style={{minHeight: "20px"}}>
      <div className="collapse-vertical collapse" id="collapseWidthExample2" >
        <div className="card card-body rounded-pill" style={{width: '1300px'  }}>
        <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing</h2>
        </div>
      </div>
    </div>
    {/* 3 */}
    <div className='d-grid gap-2'>
      <button className="btn btn-primary collapsed text-start rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample3" aria-expanded="false" aria-controls="collapseWidthExample3">
      <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing</h2>
      </button>
      </div>
    
    <div style={{minHeight: "20px"}}>
      <div className="collapse-vertical collapse" id="collapseWidthExample3" >
        <div className="card card-body rounded-pill" style={{width: '1300px'  }}>
        <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing</h2>
        </div>
      </div>
    </div>
    {/* 4 */}
    <div className='d-grid gap-2'>
      <button className="btn btn-primary collapsed text-start rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample4" aria-expanded="false" aria-controls="collapseWidthExample4">
      <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing</h2>
      </button>
      </div>
    
    <div style={{minHeight: "20px"}}>
      <div className="collapse-vertical collapse" id="collapseWidthExample4" >
        <div className="card card-body rounded-pill" style={{width: '1300px'  }}>
        <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing</h2>
        </div>
      </div>
    </div>
    {/* 5 */}
    <div className='d-grid gap-2'>
      <button className="btn btn-primary collapsed text-start rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample5" aria-expanded="false" aria-controls="collapseWidthExample5">
      <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing</h2>
      </button>
      </div>
    
    <div style={{minHeight: "20px"}}>
      <div className="collapse-vertical collapse" id="collapseWidthExample5" >
        <div className="card card-body rounded-pill" style={{width: '1300px'  }}>
        <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing</h2>
        </div>
      </div>
    </div>
    {/* 6 */}

    <div className='d-grid gap-2'>
      <button className="btn btn-primary collapsed text-start rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample6" aria-expanded="false" aria-controls="collapseWidthExample6">
      <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing</h2>
      </button>
      </div>
    
    <div style={{minHeight: "20px"}}>
      <div className="collapse-vertical collapse" id="collapseWidthExample6" >
        <div className="card card-body rounded-pill" style={{width: '1300px'  }}>
        <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing</h2>
        </div>
      </div>
    </div>
    {/* 7 */}
    <div className='d-grid gap-2'>
      <button className="btn btn-primary collapsed text-start rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample7" aria-expanded="false" aria-controls="collapseWidthExample7">
      <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing</h2>
      </button>
      </div>
    
    <div style={{minHeight: "20px"}}>
      <div className="collapse-vertical collapse" id="collapseWidthExample7" >
        <div className="card card-body rounded-pill" style={{width: '1300px'  }}>
        <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing</h2>
        </div>
      </div>
    </div>
    {/* 8 */}
    <div className='d-grid gap-2'>
      <button className="btn btn-primary collapsed text-start rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample8" aria-expanded="false" aria-controls="collapseWidthExample8">
      <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing</h2>
      </button>
      </div>
    
    <div style={{minHeight: "20px"}}>
      <div className="collapse-vertical collapse " id="collapseWidthExample8" >
        <div className="card card-body rounded-pill " style={{width: '1300px'  }}>
        <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing</h4>
        </div>
      </div>
    </div>
   
    <div className='container py-5'>
      <h1 className='text-center text-white '>BE A CHANGEMAKER,</h1> 
      <h1 className='text-center text-white'>JOIN OUR MOVEMENT NOW!</h1>
    </div>
   
   
      <div className="container icon-footer py-3 px-5"> 
        <a href="https://twitter.com"><Image src="/twitter-footer.png" alt="twitter" width={150} height={150} /></a>
        <a href="#"><Image src="/instagram-footer.png" alt="instagram" width={150} height={150}/></a>
        <a href="#"><Image src="/discord-footer.png" alt="discord" width={150} height={150}/></a>
      </div>
    


  </div>
</div>


   </>
   </>
   </>
   </>
   </>
   
   

   

   
  
    
  )
}

