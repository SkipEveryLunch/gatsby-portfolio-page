import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Ribbon from "./Ribbon"
import Tag from "../components/Tag"
const PortfolioCard = ({ project }) => {
  const stacks = project.frontmatter.stack.split(",")
  return (
    <Link
      className="my-5 sm:my-0 portfolioDetail flex sm:flex-col"
      to={`/projects/${project.frontmatter.slug}`}
      key={project.frontmatter.id}
    >
      <div className="w-1/2 sm:w-full relative">
        {project.frontmatter.importance === 1 ? <Ribbon /> : ""}
        <GatsbyImage
          className="rounded-sm mt-2"
          image={getImage(
            project.frontmatter.thumb.childImageSharp.gatsbyImageData
          )}
          alt="Banner"
        />
      </div>
      <div className="mx-5 mt-2 w-1/2 sm:w-full">
        <h3>{project.frontmatter.title}</h3>
        <div>
          {stacks.map(s => (
            <Tag>{s}</Tag>
          ))}
        </div>
      </div>
    </Link>
  )
}
export default PortfolioCard
