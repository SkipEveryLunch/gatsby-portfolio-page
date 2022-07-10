import React from "react"
import Tag from "./Tag"
const HeadingForDetail = ({ title, stack }) => {
  const stacks = stack.split(",")
  return (
    <div className="text-center mb-2">
      <h2 className="text-4xl mb-3">{title}</h2>
      <div className="flex justify-center">
        <div className="flex flex-row flex-wrap gap-1">
          {stacks.map(s => (
            <Tag>{s}</Tag>
          ))}
        </div>
      </div>
    </div>
  )
}
export default HeadingForDetail
