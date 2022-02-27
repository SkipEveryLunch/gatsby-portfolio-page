import React from 'react'
import Layout from "../components/Layout"
import { Link,graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
const About = ({data}) =>{
  console.log(data)
return (
  <Layout>
    <div className="my-7 text-center">
      <h2 className="text-4xl">About Me</h2>
      <h3 className="mt-2">このページを作ったのは誰かと言う話です。</h3>
    </div>
    <div className="flex justify-center text-sm leading-7">
      <div className="w-3/4 grid grid-cols-4">
        <div className="flex-1 flex flex-col justify-center">
          <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="me"/>
        </div>
        <div className="col-span-3 flex flex-col justify-center">
          <div>
            <p>
              1986年福岡県出身、福岡県在住。
            </p>
            <p>
              2014年より事務職として大手派遣会社に勤務する。だが壊滅的に事務の適性がない事が発覚し、「そんなミスある？」みたいなミスを連発する中で、VBAマクロに出会う。片っぱしから定型作業を自動化しつづけ、ついには社内ニートになることに成功する。
            </p>
            <p>
              2019年、海外のオンラインスクールのプログラミングコースの価格の安さに度肝を抜かれ、Colt SteeleのPythonのコースを受講する。それ以来Andrei Neagoie、Stephen Grider、Jonas Schmedtmannなどの講座を受けまくる。
            </p>
            <p>
              好きな言語はTypeScript。好きなフレームワークはNext.js。最近の推し講師はAntonio PapaとThe net ninja。
            </p>
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