import React, { Component } from 'react'
import Slider from 'react-slick'
import Img from 'gatsby-image'
import styled from 'styled-components'

const CarouselWrapper = styled.div`
  .carousel-img {
    max-height: 500px;
    overflow: hidden;
    display: block;
    margin-bottom: -5px;
  }

  .slick-arrow {
    background-color: transparent;
    color: #fff;
  }

  .slick-arrow:hover {
    background-color: grey;
  }

  .slick-prev {
    z-index: 100;
    left: 20px !important;
  }

  .slick-next {
    z-index: 100;
    right: 20px !important;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 40px;
  }

  .slick-prev:before {
    content: '\\0276E';
  }

  .slick-next:before {
    content: '\\0276F';
  }
`

class Carousel extends Component {
  render() {
    const {
      carouselImageOne,
      carouselImageTwo,
      carouselImageThree,
    } = this.props

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000,
      fade: true,
    }

    return (
      <CarouselWrapper>
        <Slider {...settings}>
          <Img
            className="carousel-img"
            fluid={carouselImageOne}
            alt="Watery Mountains"
          />
          <Img
            className="carousel-img"
            fluid={carouselImageTwo}
            alt="Snowy Forest"
          />
          <Img
            className="carousel-img"
            fluid={carouselImageThree}
            alt="Foggy City"
          />
        </Slider>
      </CarouselWrapper>
    )
  }
}

export default Carousel
