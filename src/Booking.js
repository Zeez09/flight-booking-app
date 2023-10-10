import React from 'react'
import {Link} from 'react-router-dom'

function Booking() {
  return (
    <>
 
    <div class="row container mx-auto bg-warning rounded-4" style={{marginTop:'10%'}}>
    <div class="row container text-center p-2">
        <div class="col-4">
           <h1>WLG</h1> 
           <p>12 oct 2023</p>
        </div>
        <div class="col-4">
            <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/airplane-mode-on.png" alt="airplane-mode-on"/>
                    <p>1 stop</p>
        </div>
        <div class="col-4">
           <h1>SYD</h1> 
           <p>15 oct 2023</p>
        </div>
    </div>
    <div class="row p-2 text-center">
        <div class="col">564</div>
        <div class="col">
            <Link type="submit" class="btn bg-info col-5">select</Link>
        </div>
    </div>
    </div>
    </>

  )
}

export default Booking