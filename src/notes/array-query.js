// export const pageQuery = graphql`
//   query {
//     galleryArray: allFile(
//       filter: {
//         extension: { regex: "/(jpeg|jpg|gif|png)/" }
//         relativeDirectory: { regex: "/gallery/" }
//       }
//     ) {
//       edges {
//         node {
//           childImageSharp {
//             fluid(maxWidth: 900) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `
