import {
  faFacebookF,
  faInstagram,
  faBehance
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const Header = () => {
  return (
    <div>
      <StaticImage placeholder='blurred' src="../../static/images/sampleLogo.jpg" alt='logo' />
      <ul className="flex">
        <li>WORK</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
        <li>
          <FontAwesomeIcon icon={faBehance} />
        </li>
        <li>
          <FontAwesomeIcon icon={faInstagram} />

        </li>
        <li>
          <FontAwesomeIcon icon={faFacebookF} />

        </li>
      </ul>
    </div>
  )
}

export default Header