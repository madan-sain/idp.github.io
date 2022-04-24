import React from 'react'
import Caurasle from './home/Caurasle'
import Price from './home/Price'
import Tradex from './home/Tradex'
import Mediacover from './home/Mediacover'
// import { Route , Switch } from "react-router-dom"

function Home() {
    return (
        <div>
            <div class="container first-slide">
                <div class="row">
                    <div class="col-md-6"><h1 className="display-4">Study & Learn<span> New Skills</span> Everyday,

                    </h1>
                        <p className="fs-4 mt-3">Learning Never Exhausts Mind.</p>
                    </div>
                    <div class="col-md-6 mt-md-5 first-slide-image d-m-none"  >
                        <img src="https://th.bing.com/th/id/R.395735bcb22a362c3d38f8c0d9243af0?rik=LzEFLCuNuQl%2flQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fstudent%2fstudent_PNG143.png&ehk=CZevSCEfH4T%2f9SV17%2fQ%2fvoc6lmNwuPwkDP3kpL%2bfh9g%3d&risl=&pid=ImgRaw&r=0" alt="" className="" />
                    </div>
                </div>
            </div>
            {/* <!-- first side is done --> */}
            {/* secound slide is run  */}
          
<Caurasle />


            {/* carousel par is done  */}

<Price />
            {/* price partis  */}
 
            {/* Trade X - All Market Trading Expert part is  starting            */}

<Tradex />

 {/* media cover card part is starting  */}

 <Mediacover />


           
        </div>
    )
}

export default Home