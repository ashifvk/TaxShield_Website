import React from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import './Welcome.css'
import book from '../../images/book.png'


export default function Welcome() {
  return (
    <div>
        <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

<MDBRow>

  <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

    <h6 className="welcome-text" >
      Welcome to

    </h6>
     <h1 className=" display-3 fw-bold ls-tight px-6"><span >TaxShield Software</span></h1> 

    <p className='px-3' >
    As a prominent provider of professional tax software. our primary goal is to foster growth alongside our partners
    </p>
    <div>
    <button class="btn btn-outline-success my-2 my-sm-0 mr-4 btnwel1" type="submit" >Get A Demo</button>
      <button class="btn btn-outline-success my-2 my-sm-0 btnwel2" type="submit" >Sign In</button>

    </div>
    
  </MDBCol>

  <MDBCol md='6' className='position-relative'>

    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>


        
     <img src={book} className='mt-5'/>
  

  </MDBCol>

</MDBRow>

</MDBContainer>
    </div>
  )
}


  

