import React from 'react'
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const PortfolioCard = ({project}) =>{
  const stacks = project.frontmatter.stack.split(",");
  return (
    <Link className="p-3" 
    to={`/projects/${project.frontmatter.slug}`} 
    key={project.frontmatter.id}>
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
    </Link>
  )
}
export default PortfolioCard