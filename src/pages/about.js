import React from 'react'
import Layout from "../components/Layout"
import Heading from "../components/Heading"
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
const About = ({data}) =>{
return (
  <Layout>
    <div className="flex flex-col">
    <Heading title="About Me" describe="このページを作ったのは誰かと言う話です。"/>
    <div className="flex justify-center text-sm leading-7">
        <div className="w-1/2 text-center flex flex-col items-center">
          <div style={{width:"20%"}}>
            <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="me"/>
          </div>
          <div>
            <h3 className="text-xl mt-8 mb-3">SkipEveryLunch</h3>
            <div className="text-sm leading-7">
              <p>1986年生。福岡県福岡市在住。</p>
              <p>一般職のはずが、気付けば一日の半分はVBAを書いている。</p>
              <p>好きな言語はTypeScript。</p>
              <p>趣味は英会話、洋書、プログラミング学習。</p>
              <p>ごく最近筋トレをはじめました。ラットプルダウン難しい。</p>
            </div>
            <h3 className="text-xl mt-8 mb-3">業務経験</h3>
            <div className="text-sm leading-7">
              <p>VBAによるExcel、Outlook作業の自動化、</p>
              <p>ファイルの操作、およびInternet Explorerの操作。</p>
              <p>これらを組み合わせて連携させる業務に、2020年より従事。他拠点からの要望も含めて、現在までに20個程度の業務自動化アプリケーションを作成。</p>
            </div>
            <h3 className="text-xl mt-8 mb-3">学習中の技術</h3>
            <div className="text-sm leading-7">
              <p>2019年よりWeb開発を学習中。</p>
              <p>html、css、JavaScript、TypeScript、Node.js(express)、React.js、Vue.js、Ruby、Ruby on Rails、PHP、Laravel、Dockerなどのスキルを学習。</p>
              <p>主な教材はUdemy。勉強もかねて可能な限り英語の講座を取っているが、よくインド英語のリスニングに苦しんでいる。好きな講師はThe net ninja。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
  }
export default About
export const query = graphql`
query Me {
  file(relativePath: {eq: "me.png"}) {
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