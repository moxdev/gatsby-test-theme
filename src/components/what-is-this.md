import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../layouts/index'
import Carousel from '../components/Carousel'
import Image from '../components/Image'

const ImgWrapper = styled.div`
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
`

const IndexPage = ({ data }) => (
  <Layout>
    <div>
      <h1>Hyattsville, MD Apartment Floor Plans</h1>
      <p>
        At Queens Manor, each one, two and three bedroom apartment home provides
        a perfect combination of classic style with modern convenience.
      </p>
      <p>
        The apartments are generously sized and have ample closet and storage
        space. Low maintenance gleaming wood floors are sure to enhance any
        décor scheme. Large, sunny windows provide wonderful views of the
        extensive landscaping and parklike atmosphere.
      </p>
      <p>
        Each beautifully updated kitchen has white appliances, including a
        dishwasher and disposal. The designer floors are beautiful and
        complement the oak cabinetry. Unique touches like built in shelving,
        ceiling fans and 6 panel doors help to create a true feeling of home.
      </p>
    </div>
  </Layout>
)

export default IndexPage

export const IndexPageCarousel = graphql`
  query {
    floorPlanOneBedroom: file(relativePath: { eq: "floorplans/1br_lg.gif" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorPlanTwoBedroom: file(relativePath: { eq: "floorplans/12br_lg.gif" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorPlanThreeBedroom: file(relativePath: { eq: "floorplans/3br_lg.gif" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
