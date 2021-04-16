import React from 'react'
import "../styles/Menu.scss"
import logo from "../assets/f.svg"

function Menu(){
    return(
        <div className="navbar">
            <img src={logo} alt="LOGO"/>
            <li>PT-BR</li>
            <li>CONTACT</li>
            <li>PROJECTS</li>
            <li>STACKS</li>
            <li>HOME</li>
        </div>
    )
}

export default Menu;