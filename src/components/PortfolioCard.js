import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Ribbon from "./Ribbon"
import Tag from "../components/Tag"
const PortfolioCard = ({ project }) => {
  const stacks = project.frontmatter.stack.split(",")
  const THRESHHOLD = 640
  const [width, setWidth] = useState(window.innerWidth)
  const updateWidth = event => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener(`resize`, updateWidth, {
      capture: false,
      passive: true,
    })
  })
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
        ) : (
          ""
        )}
      </div>
      <div className="mx-5 mt-2 w-1/2 sm:w-full">
        {width < THRESHHOLD ? (
          <div className="flex flex-col">
            {project.frontmatter.title.split("/").map(el => {
              return <p className="text-xl font-boldd">{el}</p>
            })}
          </div>
        ) : (
          ""
        )}
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
