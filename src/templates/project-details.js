import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql,Link } from 'gatsby';
import Layout from '../components/Layout'
const ProjectDetails = ({data}) =>{
  console.log(data);
  const {html} = data.markdownRemark;
  const {title,stack,url,featuredImg} = data.markdownRemark.frontmatter;
  const stacks = stack? stack.split(","):[];
  return (
    <Layout>
      <div className="mx-5 my-7">
        <div className="flex justify-center">
          <div className="flex flex-col w-max">
            <h2 className="text-center text-4xl">{title}</h2>
            <div className="flex mt-3">
            {stacks.map(s=>(
                <div className="inline-block text-xs bg-gray-400 py-0.5 px-1 mx-1 rounded-md text-white">{s}</div>
              ))}
            </div>
          </div>
        </div>
        <div>
        </div>
        <div className="flex justify-center text-left">
          <div className="w-2/3">
            <GatsbyImage className="my-10" image={featuredImg.childImageSharp.gatsbyImageData} alt="featured image" />
            <div className="markdown" dangerouslySetInnerHTML={{__html:html}} />
            <div className="mt-5 flex justify-start">
              <Link className="inline-block w-max px-2 py-1 rounded-full bg-gray-400 text-white hover:bg-gray-500" to="/projects">一覧に戻る</Link>
              {url!=="this"?<a className="ml-2 inline-block w-max px-2 py-1 rounded-full border border-gray-400 hover:bg-gray-200" href={url}>アプリを見る</a>:""}

          </div>
          </div>
        </div>
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