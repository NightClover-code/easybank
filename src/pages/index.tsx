//importing styles & utils
import "../styles/default.scss"
import { graphql } from "gatsby"
//importing components
import Hero from "../components/Hero"
import Features from "../components/Features"
import MainLayout from "../layouts/MainLayout"

const HomePage = ({ data }) => {
  const features = data.allContentfulFeature.edges.map(
    ({ node: { title, description, icon } }: any) => ({
      title,
      iconURL: icon.file.url,
      description: description.description,
    })
  )

  return (
    <MainLayout>
      <div className="wrapper">
        <Hero />
        <Features features={features} />
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
