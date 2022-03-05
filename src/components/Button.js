import React from "react"
const Button = ({ children, color, onClick }) => {
  return (
    <button
      className={`inline-block px-5 py-1 rounded-sm ${
        color === "black"
          ? "bg-gray-700 text-white text-center hover:bg-gray-600 dark:bg-gray-100 dark:text-gray-700 dark:hover:bg-gray-300"
          : "border border-gray-700 hover:bg-gray-200 dark:border dark:border-gray-100 dark:hover:bg-gray-500"
      }`}
      onClick={onClick ? onClick : null}
    >
      {children}
    </button>
  )
}
export default Button
