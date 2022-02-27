import React from 'react'
import { graphql } from 'gatsby';
import PortfolioCard from '../../components/PortfolioCard';
import Layout from "../../components/Layout"
const Projects = ({data}) =>{
  const projects = data.allMarkdownRemark.nodes;
  return (
    <Layout>
    <div className="flex flex-col">
      <div className="my-7 text-center">
        <h2 className="text-4xl">Portfolios</h2>
        <h3 className="mt-2">今までに作ったWebアプリとWebサイトです。</h3>
      </div>
      <div className="grid grid-cols-3 gap-5 mx-5 mb-10">
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