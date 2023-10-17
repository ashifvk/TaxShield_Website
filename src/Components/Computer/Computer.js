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
import comp from '../../images/comp.png'
import '../Computer/Computer.css'


export default function Computer() {
    return (


        <div>
            <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

                <MDBRow>
                    <MDBCol md='6' className='position-relative'>

                        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                        <img src={comp} className=' com ml-5' />




                    </MDBCol>
                    <MDBCol md='6' className='mt-4 text-center text-md-start d-flex flex-column justify-content-center'>

                        <h6 className="welcome-text" >
                            POWERFUL FEATURES

                        </h6>
                        <h1 className=" display-3 fw-bold ls-tight px-6 copter-h1"><span >TaxShield Pro 1040</span></h1>

                        <p className='px-3' >
                            TaxShield Pro 1040 is the all-inclusive solution for your professional tax preparation. With seamless bank product integrationexpert technical support. Training and an integrated CRM, TaxShield empowers your tax preparation business. Whether it's form 1040 or 1120our software equips you for success this season. Effortlessly collect fees from client refunds and even offer taxpayer cash advances with TaxShield's preferred bank product                        </p>
                        <div>
                            <MDBRow>
                            <MDBCol  className='mx-auto mb-2'>
                            <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span>Online 24/7 access</p>

                        </MDBCol><MDBCol   className='mx-auto mb-2'>
                        <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span>Custom mobile App</p>

                        </MDBCol>

                            </MDBRow>
                            <MDBRow>
                            <MDBCol  className='mx-auto mb-1'>
                            <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span>Corporate return</p>

                        </MDBCol><MDBCol  className='mx-auto mb-1'>
                        <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span>E-Signature</p>

                        </MDBCol>

                            </MDBRow>

                        </div>

                    </MDBCol>



                </MDBRow>

            </MDBContainer>

            <div className='text-center head1 p-5 geading'>
                <h3>
                    What Makes Us Different?
                </h3>
                <label>_</label>
                <h3 className='p-3 head2'>
                    Answers is TSS! It's included<br></br>
                    With Every Tax Licence !
                </h3>
            </div>
        </div>



    )
}
