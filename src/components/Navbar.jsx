import React from "react";
import { Link } from "react-router-dom"; 

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about" >About</Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==="light"?"grey":"light"} me-auto mb-1 mb-lg-0`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className = "form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
            {/* <div className={`form-check form-switch text-${props.mode==="blue"?"green":"blue"} mx-4`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className = "form-check-label" htmlFor="flexSwitchCheckDefault">Color Mode</label>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}
