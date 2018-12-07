import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/index'
import Carousel from '../components/Carousel'
import Image from '../components/Image'

const IndexPage = ({ data }) => (
  <Layout>
    <Carousel
      carouselImageOne={data.carouselImageOne.childImageSharp.fluid}
      carouselImageTwo={data.carouselImageTwo.childImageSharp.fluid}
      carouselImageThree={data.carouselImageThree.childImageSharp.fluid}
    />
    <div
      style={{
        maxWidth: '900px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '10%',
        textAlign: 'center',
      }}
    >
      <h1>Index Page</h1>
      <p>Start coding!</p>
      <div
        style={{
          maxWidth: '300px',
          marginBottom: '1.45rem',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Image />
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const IndexPageCarousel = graphql`
  query {
    carouselImageOne: file(relativePath: { eq: "carousel-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImageTwo: file(relativePath: { eq: "carousel-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImageThree: file(relativePath: { eq: "carousel-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
