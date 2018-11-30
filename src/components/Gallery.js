import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Lightbox from 'react-images'

class Gallery extends Component {
  state = {
    lightboxIsOpen: false,
    currentImage: 0,
  }

  openLightbox = (index, event) => {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }

  gotoImage = (index) => {
    this.setState({
      currentImage: index,
    })
  }

  handleClickImage= () => {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  renderGallery = () => {
    const { images } = this.props

    if (!images) return

    const gallery = images
      .filter(i => i.useForDemo)
      .map((obj, i) => (
        <a href={obj.src} key={i} onClick={e => this.openLightbox(i, e)}>
          <img src={obj.thumbnail} />
        </a>
      ))

    return <div>{gallery}</div>
  }

  render() {
    return (
      <div className="section">
        {this.renderGallery()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          preventScroll={this.props.preventScroll}
          showThumbnails={this.props.showThumbnails}
          spinner={this.props.spinner}
          spinnerColor={this.props.spinnerColor}
          spinnerSize={this.props.spinnerSize}
          theme={this.props.theme}
        />
      </div>
    )
  }
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  heading: PropTypes.string,
  images: PropTypes.array,
  showThumbnails: PropTypes.bool,
  subheading: PropTypes.string,
}

export default Gallery
