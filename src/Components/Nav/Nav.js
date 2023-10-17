import React from 'react'
import logo from '../../images/logo.png'
import '../Nav/Nav.css'

export default function Nav() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logo} className='pl-2'></img>
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto mx-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Pricing <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Features <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Contact <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Pricing
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Contact us <span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
    <button class="btn btn-outline-success my-2 my-sm-0 mr-4 btn-change" type="submit" >Get A Demo</button>
      <button class="btn btn-outline-success my-2 my-sm-0 btn2-change" type="submit" >Sign In</button>
    </form>
  </div>
</nav>
    </div>
  )
}



