import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby';
import Layout from '../components/Layout'
const ProjectDetails = ({data}) =>{
  const {html} = data.markdownRemark;
  const {title,stack,featuredImg} = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div>
          <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} alt="featured image" />
        </div>
        <div dangerouslySetInnerHTML={{__html:html}} />
      </div>
    </Layout>
  )
}
export default ProjectDetails
export const query = graphql`
query ProjectPage($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}})  {
    html
    frontmatter {
      slug
      title
      featuredImg {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}

`