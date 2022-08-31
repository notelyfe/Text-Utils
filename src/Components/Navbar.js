import React from 'react'

const Navbar = (props) => {

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-light bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className={`navbar-brand text-${props.mode==="dark"?"light":"dark"}`} href="/">TextUtils</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link active text-${props.mode==="dark"?"light":"dark"}`} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-${props.mode==="dark"?"light":"dark"}`} href="/about" >About</a>
                            </li>
                        </ul>
                        <div className="form-check form-switch mx-2">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.theme}/>
                            <label className={`form-check-label text-${props.mode==="dark"?"light":"dark"}`} htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==="dark"?"light":"dark"} mode`}</label>
                        </div>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar