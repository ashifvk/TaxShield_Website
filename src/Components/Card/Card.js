import React from 'react'
import '../Card/Card.css'
export default function Card() {
    return (
        <div className='back-grade p-3'>
            <div className='text-center text-white p-5'>
                <h5 className='p-3'> SOLUTIONS FOR YOUR OFFICE TYPE </h5>
                <h2 className='p-2'>Works with single office, multi-offices,<br></br><br></br> and enterprise sized businesses.</h2>
                <h6 className='pt-4'>Need fast responds? you can call us now!</h6>
                <h6>Lets us show you how we can integrate with any size established organization</h6>
                <h6>to help you see more costumers while processing their returns more efficiently </h6>
                <h6> We have the technology and knowledge to help you grow</h6>
                <h6>your tax office no matter what stage you are at.</h6>
            </div>
            <div className='line mb-5'>
            </div>
            <div className="container bg-container">
                <div className='text-center'>
                    <h5 style={{ color: '#80BC40' }}>TESTIMONIALS </h5>
                    <h2 style={{ color: '#6134C1' }} className='pb-4'>What our customers say</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4">

                        <main class="l-card card1 mt-3">
                            <section class="l-card__text">
                                <p>
                            I was able to get the tools needed to help take my tax office to the next levelFrom                               </p>
                            </section>
                            <section class="l-card__user">
                                <div class="l-card__userImage">
                                    <img className='img-size' src="https://avatars.githubusercontent.com/u/20525486?v=4" alt="Naruto"></img>
                                </div>
                                <div class="l-card__userInfo">
                                    <span style={{color:'#80BC40'}}>Austin, TX</span>
                                    <span  style={{color:'black'}}>Ryan E.</span>
                                </div>
                            </section>
                        </main>

                    </div>

                    <div className="col-lg-4">

                        <main class="l-card card2 mt-3">
                            <section class="l-card__text">
                                <p>
                                The time we have been able to save with Tax Shield Software is pricelessand their support                                </p>
                            </section>
                            <section class="l-card__user">
                                <div class="l-card__userImage">
                                    <img className='img-size' src="https://avatars.githubusercontent.com/u/20525486?v=4" alt="Naruto"></img>
                                </div>
                                <div class="l-card__userInfo">
                                    <span style={{color:'#80BC40'}}>Hooker, CA</span>
                                    <span style={{color:'black'}}>Anthony H.</span>
                                </div>
                            </section>
                        </main>
                        

                    </div>
                    <div className="col-lg-4">

                        <main class="l-card card3 mt-3">
                            <section class="l-card__text">
                                <p>
                                    Client retention was one of my office's biggest threatsSince using TaxShield Software.
                                </p>
                            </section>
                            <section class="l-card__user">
                                <div class="l-card__userImage">
                                    <img className='img-size' src="https://avatars.githubusercontent.com/u/20525486?v=4" alt="Naruto"></img>
                                </div>
                                <div class="l-card__userInfo">
                                    <span style={{color:'#80BC40'}}>Orlando, FL</span>
                                    <span style={{color:'black'}}>Seventh Hokage</span>
                                </div>
                            </section>
                        </main>

                    </div>


                </div>
            </div>

        </div>
    )
}
