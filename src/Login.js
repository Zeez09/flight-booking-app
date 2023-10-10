import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'

function Login() {
  return (
   <>
   <Navbar/>
   <form class="g-3 mx-auto pt-5 border col-md-5" style={{marginTop:'15%'}}>
    <h2 class="text-center pb-2 col-4 mx-auto" style={{borderBottom:'red 1px solid'}}>Log-in</h2>
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
    <Link type="button" class="btn btn-outline-secondary mt-5" to="/signin">
        Or Sign Up
    </Link>
    </div>
    <div class="col-md-6">

    <Link type="button" class="btn btn-success mt-5 col-12" to="">
            Login
    </Link>
    </div>

</div>
  </form>
   </>
  )
}

export default Login