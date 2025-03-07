import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.jpg'

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-white navbar-expand-lg fixed-top py-3" id="mainNav">
            <div className="container px-4 px-lg-5" style={{ maxWidth: "1200px",height:"50px"}}>
                <Link to='/sign-kit/home' className="navbar-brand mb-0 h1">
                    <img src={logo} width="240" height="75" alt="Logo" style={{ marginLeft: "-100px" }}/>
                </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item"><Link to='/sign-kit/home' className="nav-link active" style={{ color: "#000000", fontWeight: "bold" }}>Home</Link></li>
                        <li className="nav-item"><Link to='/sign-kit/convert' className="nav-link" style={{ color: "#000000", fontWeight: "bold" }}>Conversion to ISL</Link></li>
                        <li className="nav-item"><Link to='/sign-kit/learn-sign' className="nav-link" style={{ color: "#000000", fontWeight: "bold" }}>Learn ISL</Link></li>
                        <li className="nav-item"><Link to ='/sign-kit/uploadvideo'className="nav-link active" style={{ color: "#000000", fontWeight: "bold" }}>Upload Video</Link></li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar