import React from 'react'

export const NavBarComponent=()=>{
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#111827', color:'white', justifyContent:'center'}}>
        <div className="" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="#">New Campaign <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Data Campaign</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">IA prompt Campaign</a>
            </li>
            </ul>
        </div>
    </nav>
  )
}