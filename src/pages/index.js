import React from 'react'
import Layout from "../components/Layout"
import { Link } from 'gatsby'

const Index = () =>{
return (
  <Layout>
    <section className="flex justify-center">
      <div className="flex flex-col w-2/3 banner-section">
        <div className="text-4xl">
          <div className="mb-5">
            <h2>Welcome.</h2>
            <h2>I've got some portfolios</h2>
            <h2 >that (I hope)
              <span className="text-red-400 font-medium"> awe </span>
             you.</h2>
          </div>
          <div className="text-base mb-5">
            <p>SkipEveryLunchのポートフォリオサイトにようこそ。</p>
          </div>
        </div>
        <Link className="inline-block w-max px-2 py-1 rounded-md border-2 border-black hover:bg-gray-100" to="/projects">ポートフォリオを見る</Link>
      </div>
    </section>
  </Layout>

  )
}
export default Index