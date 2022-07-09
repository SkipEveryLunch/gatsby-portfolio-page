import React from "react"
import { graphql } from "gatsby"
import PortfolioCard from "../../components/PortfolioCard"
import Layout from "../../components/Layout"
import Heading from "../../components/Heading"
const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div className="flex flex-col mt-10">
        <Heading
          title="Portfolios"
          describe="今までに作ったWebアプリとWebサイトです。"
        />
        <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-5 md:gap-9 md:px-10 lg:grid-cols-3">
          {projects.map(p => (
            <PortfolioCard project={p} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
export default Projects

export const query = graphql`
  query Projects {
    file {
      id
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  }
`
