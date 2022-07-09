import React from "react"
const SectionWrapper = ({ children }) => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 mt-10">
        {children}
      </div>
    </section>
  )
}
export default SectionWrapper
