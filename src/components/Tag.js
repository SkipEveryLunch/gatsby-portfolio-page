import React from "react"
const Tag = ({ children }) => {
  return (
    <span className="inline-block text-very-small bg-gray-400 p-1 mx-1 my-1 rounded-sm text-white dark:bg-gray-500">
      {children}
    </span>
  )
}
export default Tag
