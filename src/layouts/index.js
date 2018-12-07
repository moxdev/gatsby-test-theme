import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

import Header from '../components/Header'
import Footer from '../components/Footer'

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
          <>{children}</>
          <Footer  />
        </>
      </ThemeProvider>
    )}
  />
)

// Layout.propTypes = {
//   children: PropTypes.object.isRequired,
// }

export default Layout
