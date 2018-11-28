import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../utils/style.utils'

import Navbar from './Navbar'
import Logo from './Logo'

const HeaderWrapper = styled.header`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.875rem;
  padding-right: 1.875rem;
`
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <Logo />
      <Navbar />
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
