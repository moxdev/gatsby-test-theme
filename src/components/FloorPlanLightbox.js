import React, { Component } from 'react'
import Lightbox from 'react-images'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { media } from '../utils/style.utils'

const FloorPlanSection = styled.section`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  text-align: center;
`

const FloorPlan = styled.article`
  border-top: 1px solid gray;
  padding-top: 2em;
  padding-bottom: 2em;

  img {
    margin-top: 1em;
  }

  @media screen and (min-width: 750px) {
    display: flex;
    justify-content: space-between;
    div {
      flex: 1;
    }
    a {
      flex: 1;
    }

    img {
      margin-top: 0;
    }
  }
`

const FloorPlanInfo = styled.div`
  span {
    display: block;
    color: #00467e;
  }

  .title {
    font-size: 2em;
    color: #d0a449;
  }
`

class FloorPlanLightbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lightbox: false,
      floorplan: null,
      floorplans: props.floorplans.map(floorplan =>
        Object.assign({
          src: floorplan.fluid.src,
          srcSet: floorplan.fluid.srcSet,
          caption: floorplan.caption,
        })
      ),
    }
  }

  gotoPrevLightboxImage() {
    const { floorplan } = this.state
    this.setState({ floorplan: floorplan - 1 })
  }

  gotoNextLightboxImage() {
    const { floorplan } = this.state
    this.setState({ floorplan: floorplan + 1 })
  }

  openLightbox(floorplan, event) {
    event.preventDefault()
    this.setState({ lightbox: true, floorplan })
  }

  closeLightbox() {
    this.setState({ lightbox: false })
  }

  render() {
    const { floorplans } = this.props

    return (
      <div>
        <FloorPlanSection>
          {floorplans.map((floorplan, i) => (
            <FloorPlan>
              <FloorPlanInfo>
                <span className="title">{floorplan.name}</span>
                <span className="bed">Bedrooms: {floorplan.bed}</span>
                <span className="bath">Bathrooms: {floorplan.bath}</span>
                <span className="price">Rent: ${floorplan.price}</span>
              </FloorPlanInfo>
              <a
                key={`gallery-image-${i + 1}`}
                href={floorplan.srcSet}
                onClick={e => this.openLightbox(i, e)}
                alt={floorplan.alt}
              >
                <Img fluid={floorplan.fluid} alt={floorplan.alt} />
              </a>
            </FloorPlan>
          ))}
          <p>All room sizes are approximate. Furniture not to scale.</p>
        </FloorPlanSection>
        <Lightbox
          backdropClosesModal
          enableKeyboardInput
          showImageCount
          imageCountSeparator=" of "
          images={this.state.floorplans}
          preloadNextImage
          currentImage={this.state.floorplan}
          isOpen={this.state.lightbox}
          onClickPrev={() => this.gotoPrevLightboxImage()}
          onClickNext={() => this.gotoNextLightboxImage()}
          onClose={() => this.closeLightbox()}
        />
      </div>
    )
  }
}

export default FloorPlanLightbox

FloorPlanLightbox.displayName = 'FloorPlanLightbox'
FloorPlanLightbox.propTypes = {
  floorplans: PropTypes.array.isRequired,
}
