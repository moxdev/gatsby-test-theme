import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { withPrefix } from 'gatsby'
import Layout from '../layouts/index'
// import Image from '../components/Image'
// import Gallery from '../components/Gallery'
import GatsbyGallery from '../components/GatsbyGallery'
import { DEFAULT_IMAGES } from '../utils/gallery.utils.js'

class PhotoGalleryPage extends Component {
  render() {
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
        <GatsbyGallery
          images={DEFAULT_IMAGES.map(({ src, caption, alt }) => ({
            src,
            caption,
            alt,
          }))}
        />
      </Layout>
    )
  }
}

export default PhotoGalleryPage
