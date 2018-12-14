import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import theme from './theme'

import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'

import '../styles/styles.scss'

import logo from '../images/gatsby-icon.png'

const Main = styled.div`
  background-color: #fff;
`

const ContentWrapper = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  /* text-align: center; */
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 1.87rem;
  padding-right: 1.87rem;
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        carouselImageOne: file(
          relativePath: { eq: "carousel/carousel-1.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        carouselImageTwo: file(
          relativePath: { eq: "carousel/carousel-2.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        carouselImageThree: file(
          relativePath: { eq: "carousel/carousel-3.jpg" }
        ) {
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
          <Main>
            {location.pathname === '/' && (
              <Carousel
                carouselImageOne={data.carouselImageOne.childImageSharp.fluid}
                carouselImageTwo={data.carouselImageTwo.childImageSharp.fluid}
                carouselImageThree={
                  data.carouselImageThree.childImageSharp.fluid
                }
              />
            )}
            <ContentWrapper>{children}</ContentWrapper>
          </Main>
          <Footer />
        </>
      </ThemeProvider>
    )}
  />
)

// Layout.propTypes = {
//   children: PropTypes.object.isRequired,
// }

export default Layout
