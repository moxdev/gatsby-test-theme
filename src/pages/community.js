import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Layout from '../layouts/index'
import SimpleMap from '../components/GoogleMap'

class CommunityMap extends Component {
  render() {
    return (
      <Layout>
        <SimpleMap />
      </Layout>
    )
  }
}

export default CommunityMap
