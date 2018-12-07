import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import logo from '../images/gatsby-icon.png'

const LogoWrapper = styled.nav`
  img {
    max-width: 80px;
  }
`

const Logo = () => (
  <LogoWrapper>
    <a href="/">
      <img src={logo} alt="logo" />
    </a>
  </LogoWrapper>
)

export default Logo
