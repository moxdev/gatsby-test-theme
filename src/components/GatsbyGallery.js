import React, { Component } from 'react'
import Lightbox from 'react-images'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

class GatsbyGallery extends Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.gotoImage = this.gotoImage.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }

  gotoImage(index) {
    this.setState({
      currentImage: index,
    })
  }

  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  renderGallery() {
    const { images } = this.props

    if (!images) return

    const gallery = images.map((obj, i) => (
      <article className="6u 12u$(xsmall) work-item" key={i}>
        <a
          className="image fit thumb"
          href={obj.src}
          onClick={e => this.openLightbox(i, e)}
        >
          <img src={obj.src} alt={obj.alt} />
        </a>

        <h3>{obj.caption}</h3>
      </article>
    ))

    return <div className="row">{gallery}</div>
  }

  render() {
    return (
      <div>
        {this.renderGallery()}
        <Lightbox
          backdropClosesModal
          enableKeyboardInput
          showImageCount
          imageCountSeparator=" of "
          preloadNextImage
          images={this.props.images}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
        />
      </div>
    )
  }
}

export default GatsbyGallery
