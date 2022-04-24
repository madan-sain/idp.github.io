/* eslint-disable jsx-a11y/alt-text */

import React from 'react'
import Aboutcard from './about_part/Aboutcard'

function About() {
  return (
    <div>

<div className="about-hed-part bg-dark text-center p-5 text-white ">
        <h1 className='display-3 mt-5'>About Us</h1>
        <p className='fs-5'>A Family turning ideas into beautiful things.</p>
    </div>



<div class="container mt-3 mt-md-5">
  <div className="row">
    <div className="col-md-6 ">
      <h5 className='text-fs-1 mt-md-5'>Here we uncover new and improved skills hidden in people by giving it a shape and structure.</h5>
      <p className='mt-md-5'>IDIGITALPRENEUR is a digitally organized E-learning platform that focuses on the SKILL DEVELOPMENT of it's students by giving courses in a variety of disciplines that may assist anyone solidify their talents.</p>
    </div>
    <div className="col-md-6 ">
     
      <img src="https://www.idigitalpreneur.com/src/img/photos/newabout2.jpg" class=" w-100" />
    </div>
  </div>
</div>

{/* main heading section part is done  */}

{/* about card part  */}
<Aboutcard />





   </div>



  )
}

export default About