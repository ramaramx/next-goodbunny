import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <div className='bg-section6'>
      <div className='container'>
        <div className='row'>
          {/* 1 */}
          <div className='col-md-6'>
          <Image 
          src="/teams/LULU-BUNNY.png"
          alt="lulu-star"
          width={500}
          height={500}/>
          </div>

          <div className='col-md-6'>
          <Image 
          src="/teams/SANCHIA-BUNNY.png"
          alt="sanchia"
          width={500}
          height={500}/>
          </div>

          {/* 2 */}
          <div className='col-md-6'>
          <Image 
          src="/teams/RACHELL-BUNNY.png"
          alt="rachell"
          width={500}
          height={500}/>
          </div>

          <div className='col-md-6'>
          
          <Image 
          src="/teams/BEV-BUNNY.png"
          alt="beverly"
          width={500}
          height={500}/>
          </div>

        {/* 3 */}
        <div className='col-md-6'>
          <Image 
          src="/teams/DITRA-BUNNY.png"
          alt="ditra"
          width={500}
          height={500}/>
          </div>

          <div className='col-md-6'>
          
          <Image 
          src="/teams/ARGO-BUNNY.png"
          alt="argo"
          width={500}
          height={500}/>
          </div>

          {/* 4 */}
          <div className='container'>
          <div className='col-md-6'>
          <Image 
          src="/teams/RICKY-BUNNY.png"
          alt="ricky"
          width={500}
          height={500}/>
          </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Team