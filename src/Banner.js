import React from 'react'
import banner from './images/main-banner.png'
import './App.css'


function Banner() {
  return (
   <>
    <div style={{width:'80%', margin:'10% auto'}}>
            <img src={banner} style={{maxHeight: '80vh'}} alt="main-banner" className="img-fluid"/>
        </div>
   </>
  )
}

export default Banner