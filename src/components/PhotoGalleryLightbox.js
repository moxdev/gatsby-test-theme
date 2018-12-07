import React, { Component } from 'react'
import Lightbox from 'react-images'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

class PhotoGalleryLightbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lightbox: false,
      photo: null,
      photos: props.photos.map(photo =>
        Object.assign({
          src: photo.fluid.src,
          srcSet: photo.fluid.srcSet,
          caption: photo.caption,
        })
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
              href={photo.srcSet}
              onClick={e => this.openLightbox(i, e)}
              alt={photo.alt}
            >
              <Img fluid={photo.fluid} alt={photo.alt} />
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

export default PhotoGalleryLightbox

PhotoGalleryLightbox.displayName = 'PhotoGalleryLightbox'
PhotoGalleryLightbox.propTypes = {
  photos: PropTypes.array.isRequired,
}
