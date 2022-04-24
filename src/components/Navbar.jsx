/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from "react-router-dom"



function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg   ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="https://www.idigitalpreneur.com/src/img/logo.png" alt="" className="" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span class="navbar-toggler-icon"></span>+- */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-door-open text-white " viewBox="0 0 16 16">
              <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
              <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
            </svg>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">


            <form class="d-flex m-auto">
              <input class="form-control me-1 px-5" type="search " placeholder="find your bast courese " aria-label="Search" />

            </form>



            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink to="/HOME"> <a class="nav-link active" aria-current="page" href="./Home">Home</a></NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/Courses"> <a class="nav-link" href="#">Courses</a></NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/ABOUT">  <a class="nav-link" href="./About">ABOUT-US</a></NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/Become">    <a class="nav-link" href="#">Become An Instructor</a></NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/Dashboard">    <a class="nav-link" href="#">Dashboard</a></NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/Loginpage">     <a class="nav-link btn btn-primary px-3 rounded-pill py-2" href="#">log-in</a></NavLink>
              </li>
              
            
            
            </ul>

          </div>
        </div>
      </nav>


    </div>






  )
}

export default Navbar