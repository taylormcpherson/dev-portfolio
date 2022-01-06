import * as React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
//import { StaticImage } from 'gatsby-plugin-image'
//import { TransitionLink } from 'gatsby-plugin-transition-link/components/TransitionLink'

const NavBar = () => {
  return (
    <header className="navbar">

        <h2 className='navbar__title'>Taylor McPherson</h2>

        <nav aria-label="Primary">
            <ul className="navbar__list">
                <li className="navbar__list-item">
                    <Link className="link__primary navbar__link" activeClassName="active" to="/">Work</Link>
                </li>
                <li className="navbar__list-item"> 
                    <Link className="link__primary navbar__link" activeClassName="active" to="/about/">About</Link>
                </li>
                <li className="navbar__list-item"> 
                    <a className="link__primary navbar__link navbar__link--resume" 
                    href="https://drive.google.com/file/d/1Idwn4_wE20YicfdAsq3q0MNUk70EHJTk/view?usp=sharing" 
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