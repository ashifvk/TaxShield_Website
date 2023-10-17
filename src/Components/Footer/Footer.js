import React from 'react'
import '../Footer/Footer.css'
export default function Footer() {
    return (
        <div className='mt-5'>
            <div class="row">
                <div class="col-sm-6 m-auto pb-5">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title h3-color">Sales and Support</h5>
                            <h2 class="card-title">Do you need help?</h2>
                            <p class="card-text">Our customer representative helps you to understand what<br></br>
                            we offerfor your business goals</p>
                            <button class="btn btn-outline-success my-2 my-sm-0 mr-4 btn-change" type="submit" >Book Us</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="foot pt-5">
                    <div className="row" style={{ justifyContent: "space-around" }}>
                        <div className="col-lg-6 foot-left">
                            <h3 className='h3-color'><i class="bi bi-telephone-inbound-fill ico-clr"></i>  Phone</h3>
                            <label>1234567890</label>
                        </div>
                        <div className="col-lg-6 foot-left mt-4">
                            <h3 className='h3-color'><i class="bi bi-envelope-fill ico-clr"></i> Email</h3>
                            <label>support@gmail.com</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
