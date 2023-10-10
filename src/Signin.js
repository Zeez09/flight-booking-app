import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Signin() {
  return (
   <>
    <Navbar/>
   <form class="g-3 mx-auto pt-5 border col-md-5" style={{marginTop:'10%'}}>
    <h2 class="text-center pb-2 col-4 mx-auto" style={{borderBottom:'green 1px solid'}}>Sign Up</h2>
    <div class="col mt-5">
    <label for="inputText" class="form-label">Name</label>
    <input type="text" class="form-control" id="inputText"/>
  </div>
        <div class="col">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col mt-5">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="row d-flex gap-2 col mx-auto">
    <div class="col">
    <Link type="button" class="btn btn-outline-secondary mt-5" to="/login">
        Or Login
    </Link>
    </div>
    <div class="col-md-6">

    <Link type="button" class="btn btn-success mt-5 col-12" to="/">
            Sign Up
    </Link>
    </div>

</div>
  </form>
   </>
  )
}

export default Signin