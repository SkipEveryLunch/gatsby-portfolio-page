import React from "react"
import Tag from "./Tag"
const HeadingForDetail = ({ title, stack }) => {
  const stacks = stack.split(",")
  return (
    <div className="text-center mb-2">
      <h2 className="text-4xl mb-3">{title}</h2>
      <div className="flex justify-center">
        <div className="stacks w-1/2">
          {stacks.map(s => (
            <Tag>{s}</Tag>
          ))}
        </div>
      </div>
    </div>
  )
}
export default HeadingForDetail
