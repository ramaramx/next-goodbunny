/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'

const Profile = () => {
  return (
    <div className='bg-section4'>
        <div className='container'>
            <h2 style={{textAlign:'center'}}> THE ART BY</h2>
            <h1 style={{textAlign:'center', marginBottom:'100px'}}>Sanchia (@sanchimilikiti)</h1>
        
        <div className='row'>
            
            <div className='col-md-6'>
            <Image
            alt="sanchi"
            src="/profile.png"
            width={500}
            height={500}
            />
            </div>

            <div className='col-md-6'>
                <h3 style={{color:'white'}}>Full time mother & a Poodle Mama. 
                    Jakarta-based visual artist/illustrator, exhibited 
                    in Indonesian National Gallery
                    10+ years in the creative & contemporary art 
                    world and 6 + years in advertising agency
                    Comic maker of Problema Nona & NFT Artist</h3>
                    <br/>
                    <h3 style={{color:'white'}}>In the past 4 years, Sanchia has been 
                    producing comics and podcasts about being a 
                    women in Indonesia called "Problema Nona", 
                    the comics were made from real stories 
                    submitted from women all across Indonesia. 
                    Listening to all these stories opened her eyes 
                    on how long many of us have been living in a 
                    privileged bubble. Inequalities, inclusivity, 
                    domestic abuse to sexual assaults are real 
                    stories she turns into comics with Problema 
                    Nona. As a mother to a 9 year old daughter 
                    made me realised how urgent it is for us to 
                    make progress.</h3>
                    <br/>
                    <h3 style={{color:'white'}}>"This project is a place I've been looking an 
                        answer for. A place where my art can have 
                        bigger impact on sustainable development 
                        goals, especially towards women's children's 
                        health & safety, and many others."</h3>
                        <br/>
                        <h3 style={{color:'white'}}>Over the years, Sanchia has worked with many 
                            clients and brands such as:</h3>

                            
                    <Image
                    alt="un-women"
                    src="/un-women.png"
                    width={400}
                    height={200}
                    />
                    
                    <Image
                    alt="grab"
                    src="/grab.png"
                    width={400}
                    height={200}
                    />
            </div>

        </div>
        </div>
    </div>
  )
}

export default Profile