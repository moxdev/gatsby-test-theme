import React from 'react'
import Layout from '../layouts/index'
import Image from '../components/Image'
import Gallery from '../components/Gallery'

function makeUnsplashSrc(id) {
  return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=1024&h=1024`
}
function makeUnsplashSrcSet(id, size) {
  return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=${size} ${size}w`
}
function makeUnsplashThumbnail(id, orientation = 'landscape') {
  const dimensions = orientation === 'square' ? 'w=300&h=300' : 'w=240&h=159'

  return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&crop=faces&fit=crop&${dimensions}`
}

// Unsplash images from the "Spirit Animals" collection
// https://unsplash.com/collections/158825/spirit-animals

const DEFAULT_IMAGES = [
  {
    id: '1470619549108-b85c56fe5be8',
    caption: 'Photo by Alan Emery',
    orientation: 'square',
    useForDemo: true,
  }, // https://unsplash.com/photos/SYzUF6XcWBY (Flamingo)
  {
    id: '1471079502516-250c19af6928',
    caption: 'Photo by Jeremy Bishop',
    orientation: 'landscape',
    useForDemo: true,
  }, // https://unsplash.com/photos/GIpGxe2_cT4 (Turtle)
  {
    id: '1454023492550-5696f8ff10e1',
    caption: 'Photo by Jessica Weiller',
    orientation: 'landscape',
    useForDemo: true,
  }, // https://unsplash.com/photos/LmVSKeDy6EA (Tiger)
  {
    id: '1470854989922-5be2f7456d78',
    caption: 'Photo by Piotr Łaskawski',
    orientation: 'landscape',
    useForDemo: true,
  }, // https://unsplash.com/photos/GXMr7BadXQo (Hedgehog)
  {
    id: '1470317596697-cbdeda56f999',
    caption: 'Photo by Michel Bosma',
    orientation: 'landscape',
    useForDemo: true,
  }, // https://unsplash.com/photos/XgF9e93Tkt0 (Ladybug)
]

const PhotoGalleryPage = () => (
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
    <Gallery
      images={DEFAULT_IMAGES.map(
        ({ caption, id, orientation, useForDemo }) => ({
          src: makeUnsplashSrc(id),
          thumbnail: makeUnsplashThumbnail(id, orientation),
          srcSet: [
            makeUnsplashSrcSet(id, 1024),
            makeUnsplashSrcSet(id, 800),
            makeUnsplashSrcSet(id, 500),
            makeUnsplashSrcSet(id, 320),
          ],
          caption,
          orientation,
          useForDemo,
        })
      )}
    />
  </Layout>
)

export default PhotoGalleryPage
