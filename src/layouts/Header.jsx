import {
  faFacebookF,
  faInstagram,
  faBehance
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const Header = () => {
  return (
    <header className="nav_header">
      <StaticImage placeholder='blurred' src="../../static/images/sampleLogo.jpg" alt='logo' />
      <ul className="header_menu">
        <li><Link to="/" activeClassName="active_menu">WORK</Link></li>
        <li><Link to="/about" activeClassName="active_menu">ABOUT</Link></li>
        <li><Link to="/contact" activeClassName="active_menu">CONTACT</Link></li>
        <li>
          <a href="https://www.behance.net/rakshai" target={"_blank"} rel="noreferrer">
            <FontAwesomeIcon icon={faBehance} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/rakshaikumaar/" target={"_blank"} rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>

        </li>
        <li>
          <a href="https://www.facebook.com/rakshai" target={"_blank"} rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>

        </li>
      </ul>
    </header>
  )
}

export default Header