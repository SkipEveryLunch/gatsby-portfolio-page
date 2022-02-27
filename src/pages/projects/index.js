import React from 'react'
import { graphql,Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"
const Projects = ({data}) =>{
  const projects = data.allMarkdownRemark.nodes;
  return (
    <Layout>
    <div>
      <h2>ポートフォリオ</h2>
      <h3>今までに作ったWebアプリとWebサイトです。</h3>
      <div>
        {projects.map(project=>(
            <Link to={`/projects/${project.frontmatter.slug}`} 
            key={project.frontmatter.id}>
                <div>
                  <GatsbyImage image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt="Banner" />
                  <h3>
                  {project.frontmatter.title}
                  </h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
            </Link>
          )
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