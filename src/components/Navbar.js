import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { media } from '../utils/style.utils'

const Nav = styled.nav``

const Navbar = () => (
  <Nav>
    <Link to="/">Floor Plans &amp; Rates</Link>
    <Link to="/">Community</Link>
    <Link to="/">Photo Gallery</Link>
    <Link to="/">Contact Us</Link>
  </Nav>
)

export default Navbar
