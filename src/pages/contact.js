import React from "react"
import Layout from "../components/Layout"
import Heading from "../components/Heading"
import ContactForm from "../components/ContactForm"
import SectionWrapper from "../components/SectionWrapper"

const Contact = () => {
  return (
    <Layout>
      <SectionWrapper>
        <Heading
          title="Contact Me"
          describe="お仕事のご依頼などはこちらまで。"
        />
        <div className="flex justify-center text-sm leading-7">
          <ContactForm />
        </div>
      </SectionWrapper>
    </Layout>
  )
}
export default Contact
