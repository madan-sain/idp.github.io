import React from 'react'

function Singin() {
  return (
    <div>
<div>
            <div className="coutses-hed-part bg-dark text-center p-5 text-white">
                <h1 className='display-3 mt-5'>login</h1>

            </div>
            </div>
       <div class="container">
       <form action="">
        <div className="row ">
                    <div className="col-md-6 mt-md-5 login-from-control mt-5">
                        <input type="email" name=""  id="" class="form-control m-4 mt-md-5" placeholder=" enter email-id" aria-describedby="helpId " />
                        <input type="number" name=""  id="" class="form-control m-4 mt-md-5" placeholder=" enter mobile number" aria-describedby="helpId " />
                        <input type="password" name="" id="" class="form-control m-4" placeholder="password" aria-describedby="helpId" />
                        <input type="password" name="" id="" class="form-control m-4" placeholder="confrom password" aria-describedby="helpId" />
                        <div class="form-check">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input m-1 " name="" id="" value="checkedValue"  />

                            </label>
                        </div>
                        <button type="submit" className='btn btn-primary py-1 mt-2  m-4 ' >Singin</button>
                      
                    </div>
                    <div className="col-md-6 mt-md-5 login-image">
                        <img src="https://www.gifs-paradise.com/animations/animated-gifs-police-34.gif" alt="" className='ms-5 w-50' />
                    </div>
                </div>
        </form>
       </div>
    </div>
  )
}

export default Singin