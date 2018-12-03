import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/index'
// import Image from '../components/Image'
// import Gallery from '../components/Gallery'
import GatsbyGallery from '../components/GatsbyGallery'
import gallery1 from '../images/gallery/gallery-1.jpg'
import gallery2 from '../images/gallery/gallery-2.jpg'
import gallery3 from '../images/gallery/gallery-3.jpg'

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
    {/* <GatsbyGallery photos={galleryImages} /> */}
  </Layout>
)

export default PhotoGalleryPage

export const pageQuery = graphql`
  query {
    testImage: file(relativePath: { eq: "carousel-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        sourceInstanceName: { eq: "images" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 2000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
