import React from 'react'
import PropTypes from 'prop-types'

export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      <div className="container-fluid" >
        <a className="navbar-brand  " href="/">{props.title}</a>
        <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active  " aria-current="page" href="/">{props.home}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  " href="/link">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle  " href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item  " href="/action">Action</a></li>
                <li><a className="dropdown-item  " href="/another-action">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item  " href="/something-else">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <span className="nav-link disabled  " aria-disabled="true">Disabled</span>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-3`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary  " type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

NavBar.PropType = {
    title: PropTypes.string.isRequired,
    home : PropTypes.string
}

NavBar.defaultProps = {
    title: "Set title",
    home: "Set home"
};