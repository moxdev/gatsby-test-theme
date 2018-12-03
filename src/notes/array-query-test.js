// export const pageQuery = graphql`
//   query IndexArrayTestQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     galleryImages: imageSharp(id: { regex: "^/gallery/?(?:[^/]+/?)*$" }) {
//       sizes(maxWidth: 1250, quality: 90) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//   }
// `
