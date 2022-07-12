import React from 'react'
import Image from 'next/image'

const Benefit = () => {
  return (
    
    
<div className='section3 container-fluid'>
 <div className='row '>
    <div className='container goodbunny-title-utility'>
    <Image
   className='d-flex h-70'
   src="/goodbunny-title-utility.png"
   alt='utility-title'
   width={500}
   height={200}
   />
   </div>
      <div className='col-md-2'>
      <Image
      alt='1'
      src='/1.png'
      width={300}
      height={300}
      />
      </div>

      <div className='col-md-4 align-self-center'>
      
      <h2 className='h2-section3'>Exclusive GoodBunny Passport</h2>
      <h3 className='h3-section3'> 
Access to various exclusive 
real-life events, merchandises,
volunteering, whitelist NFT collabs, 
brand partnerships, and more 
things you don’t want to miss!</h3>

      
      </div>
       <div className='col-md-2'>
      <Image
      alt='2'
      src='/2.png'
      width={300}
      height={300}
      />
      </div>
      <div className='col-md-4 align-self-center'>
      
      <h2 className='h2-section3'>Superpower to Change the World</h2>
      <h3 className='h3-section3'>DAO vote (1 GoodBunny = 1 Vote). 
You want to kick start your own
social project? You want to donate 
to certain NGOs? Submit your 
proposal to GoodBunny DAO.
</h3>

      
      </div>
    </div>
 


   <div className='row '>
      <div className='col-md-2'>
      <Image
      alt='3'
      src='/3.png'
      width={300}
      height={300}
      />
      </div>
      <div className='col-md-4 align-self-center'>
      
      <h2 className='h2-section3' >Expand your GoodBunny Family</h2>
      <h3 className='h3-section3'>chance of FREE MINT or airdrops of 
GoodBunny future NFT collections.</h3>
      </div>

      <div className='col-md-2'>
      <Image
      alt='4'
      src='/4.png'
      width={300}
      height={300}
      />
      </div>
      <div className='col-md-4 align-self-center'>
      
      <h2 className='h2-section3'>Go Above & Beyond</h2>
      <h3 className='h3-section3'>More to come, top secret!
Sshhh…</h3>

      
      </div>
    </div>
   </div>

   
   
 
  

    
  )
}

export default Benefit