import React from "react"
const Tag = ({ children }) => {
  return (
    <span className="inline-block text-xs bg-gray-400 py-0.5 px-1 mx-1 rounded-sm text-white">
      {children}
    </span>
  )
}
export default Tag
