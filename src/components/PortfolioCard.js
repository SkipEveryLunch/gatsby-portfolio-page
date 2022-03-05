import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Tag from "../components/Tag"
const PortfolioCard = ({ project }) => {
  const stacks = project.frontmatter.stack.split(",")
  return (
    <Link
      className="my-5 sm:my-0 portfolioDetail flex items-center sm:flex-col"
      to={`/projects/${project.frontmatter.slug}`}
      key={project.frontmatter.id}
    >
      <div className="w-1/2 sm:w-full">
        <GatsbyImage
          className="rounded-sm"
          image={getImage(
            project.frontmatter.thumb.childImageSharp.gatsbyImageData
          )}
          alt="Banner"
        />
      </div>

      <div className="sm:text-center mx-5 w-1/2 sm:w-full">
        <h3 className="text-xl sm:text-2xl">{project.frontmatter.title}</h3>
        <div className="mt-2">
          {stacks.map(s => (
            <Tag>{s}</Tag>
          ))}
        </div>
      </div>
    </Link>
  )
}
export default PortfolioCard
