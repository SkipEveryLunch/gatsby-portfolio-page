import React from "react"
import Layout from "../components/Layout"
import Heading from "../components/Heading"
import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        <Heading
          title="Contact Me"
          describe="お仕事のご依頼などはこちらまで。"
        />
        <div className="flex justify-center text-sm leading-7">
          <ContactForm />
        </div>
      </div>
    </Layout>
  )
}
export default Contact
