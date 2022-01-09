import * as React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="footer">
        <p className='footer__copy'>© 2022 Taylor McPherson. Made with 🤍 + ☕ in Portland, OR, USA.</p>

        <ul className='footer__list'>
            <li className='footer__list-item'>
                <a className="footer__link" 
                    href="mailto:taylormcpherson.dev@gmail.com" 
                    rel="nofollow"
                    target="_blank"
                    aria-label="LinkedIn.">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
           </li>
           <li className='footer__list-item'>
                <a className="footer__link" 
                    href="https://www.linkedin.com/in/taylor-mcpherson/" 
                    rel="noreferrer"
                    target="_blank"
                    aria-label="LinkedIn.">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
           </li>
           <li className='footer__list-item'>
                <a className="footer__link" 
                    href="https://github.com/taylormcpherson" 
                    rel="noreferrer"
                    target="_blank"
                    aria-label="Github.">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
           </li>
        </ul>
    </footer>
  )
}

export default Footer