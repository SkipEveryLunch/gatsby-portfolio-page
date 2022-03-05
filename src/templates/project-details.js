import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import HeadingForDetail from "../components/HeadingForDetail"
import Button from "../components/Button"
import Layout from "../components/Layout"
import SectionWrapper from "../components/SectionWrapper"
const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, stack, url, featuredImg } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SectionWrapper>
        <HeadingForDetail title={title} stack={stack} />
        <div className="flex justify-center text-left">
          <div>
            <GatsbyImage
              className="my-10"
              image={featuredImg.childImageSharp.gatsbyImageData}
              alt="featured image"
            />
            <div
              className="markdown"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <div className="mt-5 flex justify-start">
              {url !== "this" ? (
                <a target="_blank" rel="noreferrer" href={url}>
                  <Button>見る</Button>
                </a>
              ) : (
                ""
              )}
              <Link className="ml-2" to="/projects">
                <Button color="black">戻る</Button>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  )
}
export default ProjectDetails
export const query = graphql`
  query ProjectPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        stack
        title
        url
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
