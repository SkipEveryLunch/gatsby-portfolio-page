import React from "react"
const Button = ({ children, color }) => {
  return (
    <button
      className={
        color === "black"
          ? "inline-block px-5 py-1 ml-2 rounded-sm bg-gray-700 text-white text-center hover:bg-gray-600"
          : "py-1 rounded-sm border px-5 border-gray-700 hover:bg-gray-200"
      }
    >
      {children}
    </button>
  )
}
export default Button
