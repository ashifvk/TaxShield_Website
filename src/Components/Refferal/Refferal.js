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

export default function Refferal() {
  return (

      <div className=''>
            <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

                <MDBRow>
                    <MDBCol md='6' className='position-relative mt-5'>

                       
                    <h4 className=" display-3 fw-bold ls-tight px-6 ref-h1"><span >Referral

                        </span></h4>

                        <p className='px-3' >

                        TaxShield offers you the first fully integrated referral system with funding. Our advanced CRM not only empowers you with a referral program'but also grants you control over its management and funding aspects. This season. TaxShield commits to contributing every single dollar towards your referral initiatives. You'll be able set your own referral amount and custome criteria.                        </p>
                        <div>
                            <MDBRow>
                                <MDBCol className='mx-auto mb-2'>
                                    <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span>ACH Referral payouts

                                    </p>

                                </MDBCol><MDBCol className='mx-auto mb-2'>
                                    <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span>Referral Reporting
</p>

                                </MDBCol>

                            </MDBRow>
                            <MDBRow>
                                <MDBCol className='mx-auto mb-1'>
                                    <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span> Referrer Text Notification
                                    </p>

                                </MDBCol><MDBCol className='mx-auto mb-1'>
                                    <p class="font-weight-bold"><span><i class="bi bi-check icon-color"></i></span>Set Referral amount</p>

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
