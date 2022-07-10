import React from "react"
const Tag = ({ children }) => {
  return (
    <span className="text-very-small whitespace-nowrap bg-gray-400 p-1 rounded-sm text-white dark:bg-gray-500">
      {children}
    </span>
  )
}
export default Tag
