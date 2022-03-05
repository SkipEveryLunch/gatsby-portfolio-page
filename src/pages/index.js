import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Button from "../components/Button"
import SectionWrapper from "../components/SectionWrapper"

const Index = () => {
  const [isVisible, setIsvisible] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsvisible(true)
    }, 1800)
  })
  return (
    <Layout>
      <SectionWrapper>
        <div>
          <div className="mb-5 text-very-large">
            <h2>Welcome.</h2>
            <h2>I've got some portfolios</h2>
            <h2>
              that{" "}
              <span
                className={`text-gray-400 duration-1000 ${
                  isVisible ? "" : "opacity-0"
                }`}
              >
                (I hope)
              </span>
            </h2>
            <h2>
              <span className="text-red-400">awe </span>
              you.
            </h2>
          </div>
          <div className="mb-5">
            <p>SkipEveryLunchのポートフォリオサイトにようこそ。</p>
            <p>
              あなたを驚かせる作品が、ここにある
              <span
                className={`text-gray-400 duration-1000 ${
                  isVisible ? "" : "opacity-0"
                }`}
              >
                （といいなぁ……）
              </span>
              。
            </p>
          </div>
        </div>
        <Link to="/projects">
          <Button>見てみる</Button>
        </Link>
      </SectionWrapper>
    </Layout>
  )
}
export default Index
