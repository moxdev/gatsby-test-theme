import React, { Component } from 'react'
import Lightbox from 'react-images'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

class GatsbyGallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lightbox: false,
      photo: null,
      photos: props.photos.map(photo =>
        Object.assign({ srcSet: photo.node.childImageSharp.fluid.srcSet })
      ),
    }
  }

  gotoPrevLightboxImage() {
    const { photo } = this.state
    this.setState({ photo: photo - 1 })
  }

  gotoNextLightboxImage() {
    const { photo } = this.state
    this.setState({ photo: photo + 1 })
  }

  openLightbox(photo, event) {
    event.preventDefault()
    this.setState({ lightbox: true, photo })
  }

  closeLightbox() {
    this.setState({ lightbox: false })
  }

  render() {
    const { photos } = this.props

    return (
      <div>
        <div>
          {photos.map((photo, i) => (
            <a
              key={`gallery-image-${i + 1}`}
              href={photo.node.childImageSharp.fluid.srcSet}
              onClick={e => this.openLightbox(i, e)}
            >
              <Img
                fluid={photo.node.childImageSharp.fluid}
                alt={photo.node.name}
              />
            </a>
          ))}
        </div>
        <Lightbox
          backdropClosesModal
          enableKeyboardInput
          showImageCount
          imageCountSeparator=" of "
          images={this.state.photos}
          preloadNextImage
          currentImage={this.state.photo}
          isOpen={this.state.lightbox}
          onClickPrev={() => this.gotoPrevLightboxImage()}
          onClickNext={() => this.gotoNextLightboxImage()}
          onClose={() => this.closeLightbox()}
        />
      </div>
    )
  }
}

export default GatsbyGallery
