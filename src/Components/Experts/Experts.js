import React from 'react'
import '../Experts/Experts.css'

export default function Experts() {
  return (
    <div>
      <div className="container bg-container">
                <div className='text-center'>
                    <h2 style={{ color: '#6134C1' }} className='pb-2 pt-5'>What our customers say</h2>
                    <p className='pb-2'>
                        Need fast Respond ,you can call us now!<br></br>
                        or if you are existing customer ,you can <span className='text-green'>open a ticket</span>
                    </p>
                </div>

                <div className="row text-center">
                    <div className="col-lg-4">

                        <main class="l-card mt-3">
                            <section class="mt-5">
                            <h5>Sales inquries</h5>
                            </section>
                            <section >
                               
                                <div className='mt-4'>
                                    <span style={{color:'#80BC40'}} >Associate Name</span>
                                    
                                </div>
                                <span  style={{color:'black'}}>Link to Zoom calander</span><br></br>
                                    <span>844.576.440</span>
                            </section>
                        </main>

                    </div>

                    <div className="col-lg-4">

                    <main class="l-card mt-3">
                            <section class="mt-5">
                            <h5>Technical Support</h5>
                            </section>
                            <section >
                               
                                <div className='mt-4'>
                                    <span style={{color:'#80BC40'}} >Associate Name</span>
                                    
                                </div>
                                <span  style={{color:'black'}}>Link to Zoom calander</span><br></br>
                                    <span>844.576.440</span>
                            </section>
                        </main>
                        

                    </div>
                    <div className="col-lg-4">

                    <main class="l-card mt-3">
                            <section class="mt-5">
                            <h5>General Questions</h5>
                            </section>
                            <section >
                               
                                <div className='mt-4'>
                                    <span style={{color:'#80BC40'}} >Associate Name</span>
                                    
                                </div>
                                <span  style={{color:'black'}}>Link to Zoom calander</span><br></br>
                                    <span>844.576.440</span>
                            </section>
                        </main>

                    </div>


                </div>
            </div>
    </div>
  )
}
