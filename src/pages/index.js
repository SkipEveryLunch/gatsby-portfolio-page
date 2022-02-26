import React from 'react'
import Layout from "../components/Layout"
import { Link,graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from '../styles/index.module.css'

const Index = ({data}) =>{
return (
  <Layout>
    <section className="flex h-full px-7">
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-4xl">
          <div className="mb-5">
            <h2>このあたりに。</h2>
            <h2>なんとなく。</h2>
            <h2 >良い感じのポエムを。</h2>
          </div>
          <div className="text-base mb-5">
            <p>この辺りに格好いいポエムが書いてあったら、ポートフォリオサイトとしてぐっと締まると思うのですが、残念ながら何を書けばいいのか見当もつきません。とりあえず下のポートフォリオ一覧でもご覧になってください。</p>
          </div>
        </div>
        <Link className="inline-block w-max px-2 py-1 rounded-md bg-gray-700 text-white hover:bg-gray-500" to="/projects">ポートフォリオを見る</Link>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="banner"/>
      </div>
    </section>
  </Layout>

  )
}
export default Index
export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
        placeholder: BLURRED
        formats: [AUTO, WEBP]
        )
    }
  }
}
`