import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { media } from '../utils/style.utils'

const Nav = styled.nav``

const Navbar = () => (
  <Nav>
    <Link to="/floor-plans">Floor Plans &amp; Rates</Link>
    <Link to="/community">Community</Link>
    <Link to="/photo-gallery">Photo Gallery</Link>
    <Link to="/contact-us">Contact Us</Link>
  </Nav>
)

export default Navbar
