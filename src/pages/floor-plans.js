import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../layouts/index'
import FloorPlanLightbox from '../components/FloorPlanLightbox'

class FloorPlansPage extends Component {
  render() {
    const { data, location } = this.props

    const GALLERY_IMAGES = [
      {
        fluid: data.floorPlanOneBedroom.childImageSharp.fluid,
        caption: 'One Bedroom, One Bath',
        alt: 'One Bedroom, One Bath',
        price: '$1,160*',
        bed: '1',
        bath: '1',
        name: 'One Bedroom',
      },
      {
        fluid: data.floorPlanTwoBedroom.childImageSharp.fluid,
        caption: 'Two Bedroom, Two Bath',
        alt: 'Two Bedroom, Two Bath',
        price: '$1,374*',
        bed: '2',
        bath: '1',
        name: 'Two Bedroom',
      },
      {
        fluid: data.floorPlanThreeBedroom.childImageSharp.fluid,
        caption: 'Three Bedroom, Three Bath',
        alt: 'Three Bedroom, Three Bath',
        price: '$1,630*',
        bed: '3',
        bath: '2',
        name: 'Three Bedroom',
      },
    ]

    return (
      <Layout location={location}>
        <div>
          <h1>Hyattsville, MD Apartment Floor Plans</h1>
          <p>
            At Queens Manor, each one, two and three bedroom apartment home
            provides a perfect combination of classic style with modern
            convenience.
          </p>
          <p>
            The apartments are generously sized and have ample closet and
            storage space. Low maintenance gleaming wood floors are sure to
            enhance any décor scheme. Large, sunny windows provide wonderful
            views of the extensive landscaping and parklike atmosphere.
          </p>
          <p>
            Each beautifully updated kitchen has white appliances, including a
            dishwasher and disposal. The designer floors are beautiful and
            complement the oak cabinetry. Unique touches like built in shelving,
            ceiling fans and 6 panel doors help to create a true feeling of
            home.
          </p>
        </div>
        <FloorPlanLightbox floorplans={GALLERY_IMAGES} />
      </Layout>
    )
  }
}

export default FloorPlansPage

export const FloorPlanImgs = graphql`
  query {
    floorPlanOneBedroom: file(relativePath: { eq: "floorplans/fp-1-br.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorPlanTwoBedroom: file(
      relativePath: { eq: "floorplans/fp-2br-1ba.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorPlanThreeBedroom: file(
      relativePath: { eq: "floorplans/fp-3br-3ba.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
