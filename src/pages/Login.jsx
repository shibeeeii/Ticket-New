import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <div class="row w-100 mt-5">
    <div class="col-md-3"></div>
    <div class="col-md-6 pt-5">
    <form class="shadow p-3 rounded">
                <h4 class="text-center text-primary">Login</h4>
                <div class="my-3">
                    <input type="text" placeholder="username" class="form-control" />
                </div>
                <div class="mb-3">
                    <input type="password" placeholder="password" class="form-control" />
                    
                </div>
                <div class="mb-3 mt-5">
                    <button type="button" class="btn btn-primary w-100" >Login</button>
                    <p class="text-primary">Are you a new user? <Link to={'/register'}><a href="">Register</a></Link></p>
                </div>
            </form>
    </div>
        <div class="col-md-3 ">
        </div>
        
</div>
    </div>
  )
}

export default Login