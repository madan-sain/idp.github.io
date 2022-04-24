/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import"../components/video/React.mp4"

import ReactPlayer from "react-player"
function Dashboard() {

  return (
    <div>
      <div className="coutses-hed-part bg-dark text-center p-5 text-white">
        <h1 className='display-3 mt-5'> <i class="fa fa-video"></i>  free courses</h1>
        <p className='fs-5'>Learning Never Exhausts Mind.</p>
      </div>


      {/* first slot  */}

      <div class="container-fluit m-md-5">

        <div className="row video">
          <div className="col-md-4 ">
          <ReactPlayer url="https://youtu.be/piPwsPXY_a8" controls
          width="100%"
          height="40vh"          
          />
          </div>

          <div className="col-md-4">
          <ReactPlayer url="https://youtu.be/0mEIVE6UWUY" controls
          width="100%"
          height="40vh"          
          />
          </div>

          <div className="col-md-4">
           
          <ReactPlayer url="https://youtu.be/-gCQVq7x0ZQ" controls
          width="100%"
          height="40vh"       
          />
          </div>

        </div>





{/* secound part  */}
<div className="row video mt-5">
          <div className="col-md-4 ">
          <ReactPlayer url="https://youtu.be/815HHXQl62A" controls
          width="100%"
          height="40vh"          
          />
          </div>

          <div className="col-md-4">
          <ReactPlayer url="https://youtu.be/hVUbcz8_ADI" controls
          width="100%"
          height="40vh"         
          />
          </div>

          <div className="col-md-4">
           
          <ReactPlayer url="https://youtu.be/7SRnnAV48xs" controls
          width="100%"
          height="40vh"     
          />
          </div>

        </div>




      </div>






    </div>
  )
}

export default Dashboard