//importing gql
import gql from "graphql-tag";

//queries
export const featuresQuery = gql`
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
