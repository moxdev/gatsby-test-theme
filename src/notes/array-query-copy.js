// export const pageQuery = graphql`
//   query {
//     testImage: file(relativePath: { eq: "carousel-1.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 1800) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     allFile(
//       filter: {
//         extension: { regex: "/(jpeg|jpg|gif|png)/" }
//         relativeDirectory: { regex: "/gallery/" }
//       }
//     ) {
//       edges {
//         node {
//           childImageSharp {
//             sizes(maxWidth: 2000) {
//               ...GatsbyImageSharpSizes
//             }
//           }
//         }
//       }
//     }
//   }
// `
