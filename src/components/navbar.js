import * as React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
//import { TransitionLink } from 'gatsby-plugin-transition-link/components/TransitionLink'

const NavBar = () => {
  return (
    <header className="navbar">
        <Link className="link__primary navbar__link" activeClassName="active" to="/">React</Link>

        <nav aria-label="Primary">
            <ul className="navbar__list">
                
                <li className="navbar__list-item">
                    <Link className="link__primary navbar__link" activeClassName="active" to="/work/">Work</Link>
                </li>
            
    
                <li className="navbar__list-item"> 
                    <Link className="link__primary navbar__link" activeClassName="active" to="/about/">About</Link>
                </li>
                <li className="navbar__list-item"> 
                    <a className="link__primary navbar__link navbar__link--resume" 
                    href="https://drive.google.com/file/d/17A0IURC4ZTa1VN622ogya_Hi_DOtBt4X/view?usp=sharing" 
                    rel="noreferrer"
                    target="_blank">
                        Resume
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar