import React from 'react'
import { useState } from 'react';




const index = () => {
 
  setTimeout(function(){
    
    window.location.href = '/home';
 }, 5000);


  function Progress({ done }) {
    const [style, setStyle] = useState({});
  
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`
      };
  
      setStyle(newStyle);
    }, 600);
  
    return (
      <div className='progress'>
        <div className='progress-done' style={style}>
          {done}%
        </div>
      </div>
      
    );
  }

  return (
    <>
    <div className='body-loading'>
    <h3 style={{  textAlign:'center',
  fontSize: '32px',
  fontWeight:'800'}}>HOP, INTO A WORLD</h3> 
		<Progress done="100"/>
		<h3 style={{  textAlign:'center',
  fontSize: '32px',
  fontWeight:'800'}}>OF GOODNES..</h3>
    </div>
        </>
  )
}

export default index



