import React from 'react'
import '../Refferal/Refferal.css'
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
export default function Credit() {
    return (
        <div>

            <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

                <MDBRow>
                    <MDBCol md='6' className='position-relative mt-5'>


                        <h4 className=" display-3 fw-bold ls-tight px-6 call-h1"><span >Credit Card Payment

                        </span></h4>

                        <p className='px-3' >

                            You now have the option to receive payments from your clients via credit cards. We can seamlessly integrate your portal with Stripe, ensuring that your well-earned funds are delivered to you without delay. The process is remarkably straightforward and user-friendly        </p>
                        <div>
                            <MDBRow>
                                <MDBCol className='mx-auto mb-2'>
                                    <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span>User Friendly Platform

                                    </p>

                                </MDBCol><MDBCol className='mx-auto mb-2'>
                                    <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span>Invoicing system</p>

                                </MDBCol>

                            </MDBRow>
                            <MDBRow>
                                <MDBCol className='mx-auto mb-1'>
                                    <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span>No extra Equipment

                                    </p>

                                </MDBCol><MDBCol className='mx-auto mb-1'>
                                    <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span>
                                        Accept all major credit cards</p>

                                </MDBCol>

                            </MDBRow>

                        </div>
                    </MDBCol>
                    <MDBCol md='6' className=' text-center text-md-start d-flex flex-column justify-content-center'>


                    </MDBCol>



                </MDBRow>

            </MDBContainer>
        </div>
    )
}
