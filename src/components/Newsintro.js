import React from 'react'
import Newsimage from '../components/images/newsintro.png'
import Plane from '../components/images/plane.png'
const Newsintro = () => {
    return (
    <>
            <div className="newsintro" >
                <img src={Newsimage} alt="dogwithpaws"/>;
                    <div className="newsus">
                        <h1 className="mb-3 text-center">OUR NEWSLETTER</h1>
                        <section className="newsletter">
                            <img src={Plane} alt="planeimage"/>
                                <div className="col-md-6 col-lg-7 ml-200">
                                    <form className="needs-validation" novalidate="">
                                        <div className="row g-3">
                                            <div className="col-sm-5 col-10">
                                                <label for="firstName" className="form-label">First name</label>
                                                <input type="text" className="form-control" id="firstName" placeholder="" value=""
                                                    required="" />
                                                <div className="invalid-feedback">
                                                    Valid first name is required.
                                                </div>
                                            </div>

                                            <div className="col-sm-5 col-10">
                                                <label for="lastName" className="form-label">Last name</label>
                                                <input type="text" className="form-control" id="lastName" placeholder="" value=""
                                                    required="" />
                                                <div className="invalid-feedback">
                                                    Valid last name is required.
                                                </div>
                                            </div>

                                            <div className="col-10">
                                                <label for="username" className="form-label">Username</label>
                                                <div className="input-group has-validation">
                                                    <span className="input-group-text">@</span>
                                                    <input type="text" className="form-control" id="username" placeholder="Username"
                                                        required="" />
                                                    <div className="invalid-feedback">
                                                        Your username is required.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-10">
                                                <label for="email" className="form-label">Email <span
                                                    className="text-body-secondary">(Optional)</span></label>
                                                <input type="email" className="form-control" id="email" placeholder="you@gmail.com" />
                                                <div className="invalid-feedback">
                                                    Please enter a valid email address for shipping updates.
                                                </div>
                                            </div>

                                            <div className="col-10">
                                                <label for="address" className="form-label">Address</label>
                                                <input type="text" className="form-control" id="address" placeholder="1234 Main St"
                                                    required="" />
                                                <div className="invalid-feedback">
                                                    Please enter your shipping address.
                                                </div>
                                            </div>


                                            <div className="col-md-4 col-sm-10 col-10">
                                                <label for="country" className="form-label">Country</label>
                                                <select className="form-select" id="country" required="">
                                                    <option value="">Choose...</option>
                                                    <option>India</option>
                                                    <option>United States</option>
                                                    <option>Nigeria</option>
                                                    <option>Thailand</option>
                                                    <option>Vietnam</option>
                                                    <option>Saudi Arabia</option>
                                                    <option>Pakistan</option>
                                                    <option>China</option>
                                                    <option>Brazil</option>
                                                </select>
                                                <div className="invalid-feedback">
                                                    Please select a valid country.
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-sm-10 col-10">
                                                <label for="state" className="form-label">State</label>
                                                <select className="form-select" id="state" required="">
                                                    <option value="">Choose...</option>
                                                    <option>California</option>
                                                    <option>Uttar Pradesh</option>
                                                    <option>Punjab</option>
                                                    <option>Delhi</option>
                                                    <option>Washington</option>
                                                    <option>Haryana</option>
                                                    <option>Bihar</option>
                                                    <option>Goa</option>
                                                    <option>Kerala</option>
                                                    <option>Karnataka</option>
                                                    <option>Texas</option>
                                                    <option>Ohio</option>
                                                </select>
                                                <div className="invalid-feedback">
                                                    Please provide a valid state.
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-sm-10 col-10">
                                                <label for="zip" className="form-label">Zip</label>
                                                <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                                <div className="invalid-feedback">
                                                    Zip code required.
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="my-4"/>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="save-info" />
                                                <label className="form-check-label" for="save-info">Save this information for next time</label>
                                            </div>
                                            <hr className="my-4"/>
                                                <button className="w-100 btn btn-primary btn-lg btnsub" type="submit">Subscribe</button>
                                            </form>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </>
                        )
}

                        export default Newsintro
