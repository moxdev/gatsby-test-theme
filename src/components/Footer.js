import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background-color: #f4ead5;
  padding-left: 1.75rem;
  padding-right: 1.75rem;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
`
const FooterContainer = styled.footer``

const Footer = ({ data }) => (
  <FooterWrapper>
    <FooterContainer>
      <p>Footer</p>
    </FooterContainer>
  </FooterWrapper>
)

export default Footer
