import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/index'
// import Image from '../components/Image'
// import Gallery from '../components/Gallery'
import GatsbyGallery from '../components/GatsbyGallery'

export default class PhotoGalleryPage extends Component {
  render() {
    const { data } = this.props

    const GALLERY_IMAGES = [
      {
        fluid: data.galleryImageOne.childImageSharp.fluid,
        caption: 'Sea Mountains',
        alt: 'Sea Mountains',
      },
      {
        fluid: data.galleryImageTwo.childImageSharp.fluid,
        caption: 'Snowy Forest',
        alt: 'Snowy Forest',
      },
      {
        fluid: data.galleryImageThree.childImageSharp.fluid,
        caption: 'Foggy Arial Shot',
        alt: 'Foggy Arial Shot',
      },
    ]

    return (
      <Layout>
        <div
          style={{
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '10%',
            textAlign: 'center',
          }}
        >
          <h1>Photo Gallery Page</h1>
        </div>
        <GatsbyGallery photos={GALLERY_IMAGES} />
      </Layout>
    )
  }
}

export const galleryImageQuery = graphql`
  query {
    galleryImageOne: file(relativePath: { eq: "carousel-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    galleryImageTwo: file(relativePath: { eq: "carousel-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    galleryImageThree: file(relativePath: { eq: "carousel-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
