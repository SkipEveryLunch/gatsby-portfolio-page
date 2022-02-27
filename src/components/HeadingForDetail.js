import React from 'react'
const HeadingForDetail = ({title,stack}) =>{
  const stacks = stack.split(",");
  return (
    <div className="text-center mb-7">
      <h2 className="text-4xl">{title}</h2>
      <div className="stacks">
        {stacks.map(s=>(
          <span className="inline-block text-xs bg-gray-400 py-0.5 px-1 mx-1 rounded-md text-white">{s}</span>
        ))}
      </div>
    </div>
  )
  }
export default HeadingForDetail