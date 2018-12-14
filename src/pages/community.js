import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Layout from '../layouts/index'
import MyMap from '../components/MyMap'

class CommunityMap extends Component {
  render() {
    const { location } = this.props
    return (
      <Layout location={location}>
        <div>
          <h1>
            At Queens Manor Gardens Apartments, we offer more than a great
            apartment living value.
          </h1>

          <p>
            Located in Hyattsville, MD, in the city of Mount Rainier, Queens
            Manor Gardens Apartments are comfortably situated near the West
            Hyattsville Metro, Prince George’s Plaza, and Washington, DC. This
            beautifully landscaped community is just minutes away from an array
            of shopping and dining options, grocery stores, schools, theaters,
            and DC’s many museums and attractions. With easy access to the Metro
            rail, the Capital Beltway and the Baltimore-Washington Parkway, as
            well as public bus service available at your doorstep, every
            convenience is within your reach.
          </p>
        </div>

        <MyMap />
      </Layout>
    )
  }
}

export default CommunityMap
