import React from 'react'
import { graphql,Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
        {projects.map(project=>{
          const stacks = project.frontmatter.stack.split(",");
          return (
            <Link to={`/projects/${project.frontmatter.slug}`} 
            key={project.frontmatter.id}>
                <div className="p-3">
                  <GatsbyImage className="rounded-sm"
                  image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt="Banner" />
                  <div className="text-center mx-3">
                    <h3 className="text-lg">
                    {project.frontmatter.title}
                    </h3>
                    <div>
                      {stacks.map(s=>(
                        <div className="inline-block text-xs bg-gray-400 py-0.5 px-1 mx-1 rounded-md text-white">{s}</div>
                      ))}
                    </div>
                  </div>

                </div>
            </Link>
          )
        }
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