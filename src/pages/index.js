import React,{useState,useEffect} from 'react'
import Layout from "../components/Layout"
import { Link } from 'gatsby'

const Index = () =>{
  const[isVisible,setIsvisible] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setIsvisible(true);
    },1800)
  })
return (
  <Layout>
    <section className="flex justify-center">
      <div className="flex flex-col w-2/3 banner-section">
        <div className="text-4xl">
          <div className="mb-5">
            <h2>Welcome.</h2>
            <h2>I've got some portfolios</h2>
            <h2 >that <span className={`text-gray-400 duration-1000 ${isVisible?"":"opacity-0"}`}>
                (I hope)
              </span>
            </h2>              
            <h2 >
              <span className="text-red-400 font-medium">
                 awe </span>
              you.</h2>
          </div>
          <div className="text-base mb-5">
            <p>SkipEveryLunchのポートフォリオサイトにようこそ。</p>
            <p>あなたを驚かせる作品が、ここにある
            <span className={`text-gray-400 duration-1000 ${isVisible?"":"opacity-0"}`}
            >（といいなぁ……）</span>。</p>
          </div>
        </div>
        <Link className="inline-block w-max px-2 py-1 rounded-md border-2 border-black hover:bg-gray-100" to="/projects">ポートフォリオを見る</Link>
      </div>
    </section>
  </Layout>

  )
}
export default Index