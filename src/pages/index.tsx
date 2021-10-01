//importing components & styles
import "../styles/default.scss"
import Hero from "../components/Hero"
import MainLayout from "../layouts/MainLayout"
import { graphql } from "gatsby"

const HomePage = ({ data }) => {
  console.log(data.allContentfulFeature.edges[0].node)
  return (
    <MainLayout>
      <div className="wrapper">
        <Hero />
      </div>
    </MainLayout>
  )
}

export const query = graphql`
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
`

export default HomePage
