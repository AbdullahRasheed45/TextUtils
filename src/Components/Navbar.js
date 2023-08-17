import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">{props.homeText}</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/about">{props.aboutText}</a>
          </li> */}
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
        <div>
          <button type="button" onClick={()=> props.toogleMode("primary")} className="btn btn-primary mx-1" >Dark Blue</button>
          <button type="button" onClick={()=> props.toogleMode("secondary")} className="btn btn-secondary mx-1">Grey</button>
          <button type="button" onClick={()=> props.toogleMode("success")} className="btn btn-success mx-1">Green</button>
          <button type="button" onClick={()=> props.toogleMode("danger")} className="btn btn-danger mx-1">Red</button>
          <button type="button" onClick={()=> props.toogleMode("warning")} className="btn btn-warning mx-1">Yellow</button>
          <button type="button" onClick={()=> props.toogleMode("info")} className="btn btn-info mx-1">Cync</button>
        </div>
        <div className={`form-check form-switch text-${props.mode==="light"?"dark" :"light"}`}>
          <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          <input className="form-check-input mx-2" onClick={()=> props.toogleMode(null)} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        </div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}