import { Button } from 'bootstrap';
import {useState} from 'react';
function MainSign(){
    return(

        <div>
        <form>
        <div class="form-group">
    <label for="exampleInputEmail1">Name </label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <button type="submit" class="btn btn-primary">Register</button>
        </form>

        </div>
    )

}

export default MainSign;