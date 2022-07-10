import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Ribbon from "./Ribbon"
import Tag from "./Tag"
import useWidth from "../hooks/useWidth"
const PortfolioCard = ({ project }) => {
  const stacks = project.frontmatter.stack.split(",")
  const THRESHHOLD = 640
  const width = useWidth()
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
        {width >= THRESHHOLD ? (
          <div className="pf-title-box">
            {project.frontmatter.title.split("/").map(el => {
              return <p className="pf-title">{el}</p>
            })}
          </div>
        ) : null}
      </div>
      <div className="mx-5 sm:mx-0 mt-2 w-1/2 sm:w-full">
        {width < THRESHHOLD ? (
          <div className="flex flex-col mb-2">
            {project.frontmatter.title.split("/").map(el => {
              return <p className="text-2xl font-boldd">{el}</p>
            })}
          </div>
        ) : (
          ""
        )}
        <div class="flex flex-row flex-wrap gap-1">
          {stacks.map(s => (
            <Tag>{s}</Tag>
          ))}
        </div>
      </div>
    </Link>
  )
}
export default PortfolioCard
