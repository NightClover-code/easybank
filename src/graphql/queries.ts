//importing gql
import { graphql } from "gatsby";

//queries
export const featuresQuery = graphql`
  query FeaturesQuery {
    allContentfulFeature {
      edges {
        node {
          title
          description {
            description
          }
          icon {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
