/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { NavLink } from "react-router-dom"

export default function 
() {
   
  return (
    <div>
          <div>
            <div className="coutses-hed-part bg-dark text-center p-5 text-white">
                <h1 className='display-3 mt-5'>login</h1>

            </div>
            <div class="container">
                <form action="" >
                <div className="row">
                    <div className="col-md-6 mt-md-5 login-from-control">
                        <input type="email" name=""  id="" class="form-control m-4 mt-md-5" placeholder=" enter email-id" aria-describedby="helpId " />
                        <input type="password" name="" id="" class="form-control m-4" placeholder="password" aria-describedby="helpId" />
                        <input type="password" name="" id="" class="form-control m-4" placeholder="confrom password" aria-describedby="helpId" />
                        <div class="form-check">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input m-1 " name="" id="" value="checkedValue"  />

                            </label>
                        </div>
                        <button type="submit" className='btn btn-primary py-1 mt-2  m-4 ' >Log-in</button>
                        <NavLink to="/Singin">       <button type="submit" className='btn btn-primary py-1 mt-2  m-4' >snig up</button></NavLink>
                    </div>
                    <div className="col-md-6 mt-md-5 login-image">
                        <img src="https://th.bing.com/th/id/OIP.Wy5N-SJgJ99OtB77IwMAEgHaY9?w=103&h=350&c=7&r=0&o=5&pid=1.7" alt="" className='ms-5' />
                    </div>
                </div></form>
            </div>
        </div>
        
    </div>
  )
}
