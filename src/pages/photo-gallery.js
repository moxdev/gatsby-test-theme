import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../layouts/index'
import GatsbyGallery from '../components/GatsbyGallery'

export default class PhotoGalleryPage extends Component {
  render() {
    const { data } = this.props

    const GALLERY_IMAGES = [
      {
        fluid: data.galleryImageOne.childImageSharp.fluid,
        caption: 'Sea Mountains',
        alt: 'Sea Mountains',
      },
      {
        fluid: data.galleryImageTwo.childImageSharp.fluid,
        caption: 'Snowy Forest',
        alt: 'Snowy Forest',
      },
      {
        fluid: data.galleryImageThree.childImageSharp.fluid,
        caption: 'Foggy Arial Shot',
        alt: 'Foggy Arial Shot',
      },
      {
        fluid: data.galleryImageThree.childImageSharp.fluid,
        caption: 'Foggy Arial Shot',
        alt: 'Foggy Arial Shot',
      },
      {
        fluid: data.galleryImageFour.childImageSharp.fluid,
        caption: 'Foggy Arial Shot',
        alt: 'Foggy Arial Shot',
      },
      {
        fluid: data.galleryImageFive.childImageSharp.fluid,
        caption: 'Foggy Arial Shot',
        alt: 'Foggy Arial Shot',
      },
      {
        fluid: data.galleryImageSix.childImageSharp.fluid,
        caption: 'Foggy Arial Shot',
        alt: 'Foggy Arial Shot',
      },
      {
        fluid: data.galleryImageSeven.childImageSharp.fluid,
        caption: 'Foggy Arial Shot',
        alt: 'Foggy Arial Shot',
      },
      {
        fluid: data.galleryImageEight.childImageSharp.fluid,
        caption: 'Foggy Arial Shot',
        alt: 'Foggy Arial Shot',
      },
      {
        fluid: data.galleryImageNine.childImageSharp.fluid,
        caption: 'Foggy Arial Shot',
        alt: 'Foggy Arial Shot',
      },
      {
        fluid: data.galleryImageTen.childImageSharp.fluid,
        caption: 'Foggy Arial Shot',
        alt: 'Foggy Arial Shot',
      },
      {
        fluid: data.galleryImageEleven.childImageSharp.fluid,
        caption: 'Foggy Arial Shot',
        alt: 'Foggy Arial Shot',
      },
      {
        fluid: data.galleryImageTwelve.childImageSharp.fluid,
        caption: 'Foggy Arial Shot',
        alt: 'Foggy Arial Shot',
      },
      {
        fluid: data.galleryImageThirteen.childImageSharp.fluid,
        caption: 'Foggy Arial Shot',
        alt: 'Foggy Arial Shot',
      },
      {
        fluid: data.galleryImageFourteen.childImageSharp.fluid,
        caption: 'Foggy Arial Shot',
        alt: 'Foggy Arial Shot',
      },
      {
        fluid: data.galleryImageFifteen.childImageSharp.fluid,
        caption: 'Foggy Arial Shot',
        alt: 'Foggy Arial Shot',
      },
      {
        fluid: data.galleryImageSixteen.childImageSharp.fluid,
        caption: 'Foggy Arial Shot',
        alt: 'Foggy Arial Shot',
      },
    ]

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
          <h1>Ready to see more photos of your new home?</h1>
          <p>
            Check out the photos below of our beautiful community. At Queens
            Manor, you will be surrounded by classic architecture and
            beautifully maintained grounds. Your generously sized apartment
            includes a large kitchen, separate dining area, sunny windows and
            comfort features including ceiling fans as well as individually
            controlled heating and air conditioning. There is easy access to a
            full size laundry facility, ample parking and public transportation.
            Contact us today. The perfect apartment living experience is waiting
            for you!
          </p>
        </div>
        <GatsbyGallery photos={GALLERY_IMAGES} />
      </Layout>
    )
  }
}

export const galleryImageQuery = graphql`
  query {
    galleryImageOne: file(relativePath: { eq: "gallery/gallery-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    galleryImageTwo: file(relativePath: { eq: "gallery/gallery-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    galleryImageThree: file(relativePath: { eq: "gallery/gallery-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    galleryImageFour: file(relativePath: { eq: "gallery/gallery-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    galleryImageFive: file(relativePath: { eq: "gallery/gallery-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    galleryImageSix: file(relativePath: { eq: "gallery/gallery-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    galleryImageSeven: file(relativePath: { eq: "gallery/gallery-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    galleryImageEight: file(relativePath: { eq: "gallery/gallery-8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    galleryImageNine: file(relativePath: { eq: "gallery/gallery-9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    galleryImageTen: file(relativePath: { eq: "gallery/gallery-10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    galleryImageEleven: file(relativePath: { eq: "gallery/gallery-11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    galleryImageTwelve: file(relativePath: { eq: "gallery/gallery-12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    galleryImageThirteen: file(relativePath: { eq: "gallery/gallery-13.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    galleryImageFourteen: file(relativePath: { eq: "gallery/gallery-14.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    galleryImageFifteen: file(relativePath: { eq: "gallery/gallery-15.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    galleryImageSixteen: file(relativePath: { eq: "gallery/gallery-16.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
