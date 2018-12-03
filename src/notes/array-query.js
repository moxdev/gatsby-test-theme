// export const pageQuery = graphql`
//   query IndexArrayQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     collectionOneImages: imageSharp(id: { regex: "^\/collection1\/?(?:[^\/]+\/?)*$" }) {
//       sizes(maxWidth: 1250, quality: 90) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//     collectionTwoImages: imageSharp(id: { regex: "^\/collection2\/?(?:[^\/]+\/?)*$" }) {
//       sizes(maxWidth: 1250, quality: 90) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//     collectionThreeImages: imageSharp(id: { regex: "^\/collection3\/?(?:[^\/]+\/?)*$" }) {
//       sizes(maxWidth: 1250, quality: 90) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//   }
// `;
