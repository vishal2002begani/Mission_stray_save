import React from 'react'
import Logo from "../components/images/LOGO.webp"
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg nv">
                <div className="container-fluid">
                    <a className="navbar-brand ml-5" href="/">
                        <img src={Logo} style={{ height: 50 }} alt='asdfghj' />
                        <b style={{ "font-size": "x-large" }}>StraySaver</b>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/about">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/what_we_do">What we do</a>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Support Us
                                </div>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/volunteer">Volunteer</a></li>
                                    <li><a className="dropdown-item" href="/adopt">Adopt</a></li>
                                    {/* <li><hr className="dropdown-divider" /></li> */}
                                    <li><a className="dropdown-item" href="/">Seek help</a></li>
                                </ul>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">What We Do</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Rescue & Rehab</a></li>
                                    <li><a className="dropdown-item" href="/">Adoption & Release</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Spay & Neuter</a></li>
                                </ul>
                            </li> */}

                            {/* <li className="nav-item"><a className="nav-link">Contact Us</a></li> */}
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/contact">Contact Us</a>
                            </li>
                            {/* <li><button className="btn don" type="submit">Donate</button></li> */}
                            <li><a className="btn don" href="/donate">Donate</a></li>
                            {/* <li className="nav-item ">
                                <a className="nav-link " aria-current="page" href="/donate">Donate</a>
                            </li> */}
                            </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "20", height: "25" }} fill="currentColor"
                                    className="bi bi-search" viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
