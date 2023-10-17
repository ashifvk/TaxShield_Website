import React from 'react'
import './Premium.css'

export default function Premium() {
    return (
        <div>
            <div className="container">
                <div class="card  mt-5">
                    {/* <div class="card-body"> */}
                    <div className="row">
                        <div className="col-lg-4 card-color text-white ">
                            <div className="div ml-3">
                                <div className="join" style={{ display: 'flex' }}>
                                    <div className="ico">
                                        <i class="bi bi-gem"></i>
                                    </div>
                                    <div className="lab ml-3">
                                        <h6>ENTRYLEVEL</h6>
                                        <label>Best for small scale business</label>
                                    </div>
                                </div>
                                <div className="join" style={{ display: 'flex' }}>
                                    <div className="ico">
                                    <i class="bi bi-rocket-takeoff"></i>
                                    </div>
                                    <div className="lab ml-3">
                                        <h6>PREMIUM</h6>
                                        <label>Best for medium scale business</label>
                                    </div>
                                </div>
                                <div className="join" style={{ display: 'flex' }}>
                                    <div className="ico">
                                    <i class="bi bi-trophy"></i>
                                    </div>
                                    <div className="lab ml-3">
                                        <h6>ENTERPRISES</h6>
                                        <label>Best for large scale business</label>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 mt-4 ml-3">
                            <h6 className='head-text'>FEATURES</h6>
                            <ul>
                                <li className='li-1'>Online access to software 24/7</li>
                                <li>Free funded referal platform</li>
                                <li> 10 user accounts</li>
                                <li>Free E-file</li>
                            </ul>
                        </div>
                        <div className="col-lg-3  mt-4 ml-3">
                            <h6 className='head-text'>PRICE</h6>
                            <p>value for money pack</p>
                            <h1 className='head-text'>$ 499</h1>
                            <div className='btn-top'>
                                <button class="btn btn-outline-success my-2 my-sm-0  btn-change" type="submit"><i class="bi bi-cart2"></i>  Buy Now</button>

                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}
