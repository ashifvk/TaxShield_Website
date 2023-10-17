import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';
import '../BrandFooter/BrandFooter.css'


export default function BrandFooter() {
    return (
        <div>
            <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
                <MDBContainer className='pt-4'>
                    <section className='mb-4 text-dark'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="3" xl="3" className='mx-auto mb-4'>
                            <p class="font-weight-light">refundo.</p>

                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3" className='mx-auto mb-4'>
                            <p class="font-weight-bolder">REPUBLIC BANK</p>

                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3" className='mx-auto mb-4'>
                            <p class="font-weight-bold color-light">TPG <span className='font-weight-bolder'>Santa Barbara</span></p>


                            </MDBCol>
                        
                        <MDBCol md="3" lg="3" xl="3" className='mx-auto mb-4'>
                        <p class="font-weight-bold">Refund <span className='color-light font-italic'>Advantage</span></p>

                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer>
        </MDBFooter>

    </div >
  )
}
