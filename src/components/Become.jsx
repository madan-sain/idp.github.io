import React from 'react'
import Contactdata from './firebsaesaup/Contactdata'


function Become() {
 
  return (
    <div>
        <div className="coutses-hed-part bg-dark text-center p-5 text-white">
        <h1 className='display-3 mt-5'>People <i class="fa fa-heart" aria-hidden="true"></i>  IDigitalPreneur</h1>
        <p className='fs-5'>Learning Never Exhausts Mind.</p>
    </div>

   <div className="become">
   <div class="container">
        <div className="row">
<div className="col-md-5">
    <img src="https://www.idigitalpreneur.com/assets/frontend//img/instructor.jpg" alt="" className='w-100' />
</div>
<div className="col-md-7 text-white">
    <h1 className='mt-3 display-4'>Welcome to EDU-VERSE</h1>
    <h3>Create an online video course and earn money by teaching people around the world.</h3>
    <button className='btn btn-primary mt-md-5 mb-5 mt-3'>Become An Instructor</button>
</div>
        </div>
    </div>
   </div>

  <Contactdata />
    </div>
  )
}

export default Become