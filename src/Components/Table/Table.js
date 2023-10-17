import React from 'react'
import '../Table/Table.css'
export default function Table() {
    return (
        <div>
            <div className="container">
                <div className="dv-height" style={{overflowX: 'scroll', height:'100%'}}>
                    <table class="table table-striped table-width"  >
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">ENTRY LEVEL</th>
                                <th scope="col">PREMIUM</th>
                                <th scope="col">ENTERPRICES</th>
                            </tr>
                            <tr>
                                <th scope="col"></th>
                                <th style={{ color: '#80BC40' }} scope="col">$499</th>
                                <th style={{ color: '#80BC40' }} scope="col">$1499</th>
                                <th style={{ color: '#80BC40' }} scope="col">$1999</th>
                            </tr>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">30+ bank products</th>
                                <th scope="col">No restrictions</th>
                                <th scope="col">No restrictions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1040 </th>
                                <td >✔️</td>
                                <td>✔️</td>
                                <td>✔️</td>
                            </tr>
                            <tr>
                                <th scope="row">24/7 service</th>
                                <td>✔️</td>
                                <td>✔️</td>
                                <td>✔️</td>
                            </tr>
                            <tr>
                                <th scope="row">integrated CRM</th>
                                <td>✔️</td>
                                <td>✔️</td>
                                <td>✔️</td>
                            </tr>
                            <tr>
                                <th scope="row">Number of user</th>
                                <td>10</td>
                                <td>unlimited</td>
                                <td>unlimited</td>
                            </tr>
                            <tr>
                                <th scope="row">E-signature</th>
                                <td>✔️</td>
                                <td>✔️</td>
                                <td>✔️</td>
                            </tr>
                            <tr>
                                <th scope="row">Training</th>
                                <td>✔️</td>
                                <td>✔️</td>
                                <td>✔️</td>
                            </tr>
                            <tr>
                                <th scope="row">Mobile App</th>
                                <td>✔️</td>
                                <td>✔️</td>
                                <td>✔️</td>
                            </tr>
                            <tr>
                                <th scope="row">Call tracking</th>
                                <td>✔️</td>
                                <td>✔️</td>
                                <td>✔️</td>
                            </tr>
                            <tr>
                                <th scope="row">Full support</th>
                                <td>✔️</td>
                                <td>✔️</td>
                                <td>✔️</td>
                            </tr>
                            <tr>
                                <th scope="row">Funded Holiday</th>
                                <td>Min 30 banks</td>
                                <td>Min 50</td>
                                <td>unlimited</td>
                            </tr>
                            <tr>
                                <th scope="row">Referal platform</th>
                                <td>✔️</td>
                                <td>✔️</td>
                                <td>✔️</td>
                            </tr>
                            <tr>
                                <th scope="row">Tax Software</th>
                                <td></td>
                                <td>✔️</td>
                                <td>✔️</td>
                            </tr>
                            <tr>
                                <th scope="row">Co-Branding</th>
                                <td></td>
                                <td></td>
                                <td>✔️</td>
                            </tr>
                            <tr>
                                <th ></th>
                                <td>
                                    <button class="btn btn-outline-success my-2 my-sm-0 btn-table" type="submit" >Buy Now</button>
                                </td>
                                <td>
                                    <button class="btn btn-outline-success my-2 my-sm-0 btn-table" type="submit" >Buy Now</button>
                                </td>
                                <td>
                                    <button class="btn btn-outline-success my-2 my-sm-0 btn-table" type="submit" >Buy Now</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}
