import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/index'
// import Image from '../components/Image'
// import Gallery from '../components/Gallery'
import GatsbyGallery from '../components/GatsbyGallery'

const galleryArray = {

}

const PhotoGalleryPage = ({ data }) => (
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
    <GatsbyGallery photos={data.galleryArray.edges} />
  </Layout>
)

export default PhotoGalleryPage

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
  }
`
