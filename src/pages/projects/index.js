import React from 'react'
import { graphql } from 'gatsby';
import PortfolioCard from '../../components/PortfolioCard';
import Layout from "../../components/Layout"
import Heading from "../../components/Heading"
const Projects = ({data}) =>{
  const projects = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <div className="flex flex-col">
        <Heading 
        title="Portfolios" 
        describe="今までに作ったWebアプリとWebサイトです。"/>
        <div className="grid grid-cols-3 gap-5">
          {projects.map(p=><PortfolioCard
          project={p} />
          )}
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
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
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