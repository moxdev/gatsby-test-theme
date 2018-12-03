import React, { Component } from 'react'
import Layout from '../layouts/index'
// import Image from '../components/Image'
// import Gallery from '../components/Gallery'
import GatsbyGallery from '../components/GatsbyGallery'
import gallery1 from '../images/gallery/gallery-1.jpg'
import gallery2 from '../images/gallery/gallery-2.jpg'
import gallery3 from '../images/gallery/gallery-3.jpg'

export default class PhotoGalleryPage extends Component {
  render() {
    const galleryImages = [gallery1, gallery2, gallery3]
    console.log(galleryImages)

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
        <GatsbyGallery photos={galleryImages} />
      </Layout>
    )
  }
}
