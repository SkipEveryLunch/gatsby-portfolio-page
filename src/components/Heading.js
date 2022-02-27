import React from 'react'
const Heading = ({title,describe}) =>{
return (
  <div className="text-center mb-7">
    <h2 className="text-4xl">{title}</h2>
    <h3 className="mt-2">{describe}</h3>
  </div>
)
  }
export default Heading