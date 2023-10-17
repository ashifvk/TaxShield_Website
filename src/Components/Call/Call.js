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
import '../Call/Call.css'
export default function Call() {
    return (
        <div className='gradient-2'>
            <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

                <MDBRow>
                    <MDBCol md='6' className='position-relative'>

                        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                    </MDBCol>
                    <MDBCol md='6' className='mt-5 text-center text-md-start d-flex flex-column justify-content-center'>

                        <h4 className=" display-3 fw-bold ls-tight px-6 call-h1"><span >Call Tracking
                        </span></h4>

                        <p className='px-3' >

                            TaxShield offers you the first fully integrated referral system with fundingOur advanced CRM not only empowers you with a referral program but also grants you control over its management and funding aspectsThis seasonTaxShield commits to contributing every single dollar towards your referral initiativesYou'll be able set your own referral amount and custom criteria
                        </p>
                        <div>
                            <MDBRow>
                                <MDBCol className='mx-auto mb-2'>
                                    <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span>Toll Free/Local Numbers
                                    </p>

                                </MDBCol><MDBCol className='mx-auto mb-2'>
                                    <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span>Track Each Call</p>

                                </MDBCol>

                            </MDBRow>
                            <MDBRow>
                                <MDBCol className='mx-auto mb-1'>
                                    <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span> Instance Phone Routing
                                    </p>

                                </MDBCol><MDBCol className='mx-auto mb-1'>
                                    <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span>Listen-in to all calls</p>

                                </MDBCol>

                            </MDBRow>

                        </div>

                    </MDBCol>



                </MDBRow>

            </MDBContainer>
        </div>
    )
}
