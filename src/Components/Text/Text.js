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
export default function Text() {
    return (
        <div className='text-grade'>
            <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

                <MDBRow>
                    <MDBCol md='6' className='position-relative'>

                        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                    </MDBCol>
                    <MDBCol md='6' className='mt-5 text-center text-md-start d-flex flex-column justify-content-center'>

                        <h4 className=" display-3 fw-bold ls-tight px-6 call-h1"><span >Text Message
                        </span></h4>

                        <p className='px-3' >

                            Elevate your client communication with TaxShield's innovative text messaging platform. Seamlessly interact with clients en masse or individually, whether for updates or personalized greetings like birthdays and holidays, all effortlessly included in your package. Strengthen engagement, save time. and show genuine care, ushering in a new era of efficient and personalized interaction to deepen client relationships        </p>
                        <div>
                            <MDBRow>
                                <MDBCol className='mx-auto mb-2'>
                                    <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span>Mass Text
                                    </p>

                                </MDBCol><MDBCol className='mx-auto mb-2'>
                                    <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span>Text Templates
                                    </p>

                                </MDBCol>

                            </MDBRow>
                            <MDBRow>
                                <MDBCol className='mx-auto mb-1'>
                                    <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span>
                                        One on One text

                                    </p>

                                </MDBCol><MDBCol className='mx-auto mb-1'>
                                    <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span>Text Automation</p>

                                </MDBCol>

                            </MDBRow>

                        </div>

                    </MDBCol>



                </MDBRow>

            </MDBContainer>
        </div>
    )
}
