import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../layouts/index'
import Image from '../components/Image'

const ImgWrapper = styled.div`
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
`

const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <div>
      <h1>Index Page</h1>
      <p>Start coding!</p>
      <ImgWrapper>
        <Image />
      </ImgWrapper>
    </div>
  </Layout>
)

export default IndexPage
