import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

import Header from '../components/Header'
import Carousel from '../components/Carousel'

import '../styles/styles.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
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
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: `${data.site.siteMetadata.description}`,
              },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header />
          <Carousel
            carouselImageOne={data.carouselImageOne.childImageSharp.fluid}
            carouselImageTwo={data.carouselImageTwo.childImageSharp.fluid}
            carouselImageThree={data.carouselImageThree.childImageSharp.fluid}
          />

          <>{children}</>
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.array.isRequired,
}

export default Layout
