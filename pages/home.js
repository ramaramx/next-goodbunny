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

      <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
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

