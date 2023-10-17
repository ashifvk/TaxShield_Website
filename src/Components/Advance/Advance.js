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
import advance from '../../images/advance.png'
import '../Advance/Advance.css'

export default function Advance() {
  return (
    <div>
      <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

<MDBRow>
   
    <MDBCol md='6' className='mt-4 text-center text-md-start d-flex flex-column justify-content-center'>

        <h1 className=" display-3 fw-bold ls-tight px-6 advance-h1"><span >  Advance's</span></h1>

        <p className='px-3' >
        TaxShield provides a truly distinctive range of advanced loan products within the industry. Collaborating closely with all the prominent bankswe extend pre-acknowledgment and post- acknowledgment loans to cater to your needs. Going beyond the conventionalwe proudly present Holiday Advances for your valued customers, available from mid-December and offering up to $1.000Moreover, we empower our partners with seasonal capital infusion, strategically aiding them in scaling their operations during peak periods.</p>
                <div>
            <MDBRow>
            <MDBCol  className='mx-auto mb-2'>
            <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span> Holiday Advances
</p>

        </MDBCol><MDBCol   className='mx-auto mb-2'>
        <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span>In Season Loans
</p>

        </MDBCol>

            </MDBRow>
            <MDBRow>
            <MDBCol  className='mx-auto mb-1'>
            <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span>Pre Season Loans
</p>

        </MDBCol><MDBCol  className='mx-auto mb-1'>
        <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span>Advance in April</p>

        </MDBCol>

            </MDBRow>

        </div>

    </MDBCol>

    <MDBCol md='6' className='position-relative'>

<div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
<div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

<img src={advance} className='mt-5 ' />




</MDBCol>

</MDBRow>

</MDBContainer>
    </div>
  )
}
