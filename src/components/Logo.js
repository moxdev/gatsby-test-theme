import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../utils/style.utils'

import logo from '../assets/gatsby-icon.png'

const LogoWrapper = styled.nav`
  img {
    max-width: 100px;
  }
`

const Logo = () => (
  <LogoWrapper>
    <img src={logo} alt="logo" />
  </LogoWrapper>
)

export default Logo
