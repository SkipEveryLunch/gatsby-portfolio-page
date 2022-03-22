import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
const DarkModeButton = () => {
  const isBrowser = typeof document !== "undefined"
  let isInitiallyDark
  if (isBrowser) {
    isInitiallyDark = document.documentElement.classList.contains("dark")
  } else {
    isInitiallyDark = false
  }
  const [isDarkMode, setIsDarkMode] = useState(isInitiallyDark)
  const toggleIsDarkMode = () => {
    if (isDarkMode) {
      setIsDarkMode(false)
      if (isBrowser) {
        document.documentElement.classList.remove("dark")
      }
    } else {
      setIsDarkMode(true)
      if (isBrowser) {
        document.documentElement.classList.add("dark")
      }
    }
  }
  return (
    <button onClick={toggleIsDarkMode} className="flex items-center ">
      <div className="flex items-center">
        <FontAwesomeIcon
          className={`mr-1 ${isDarkMode ? "text-gray-300" : "text-blue-400"}`}
          icon={faSun}
        />
      </div>
      <div className="flex bg-gray-300 rounded-full w-10 h-4 p-0.5 relative">
        <div
          className={`duration-150 ${isDarkMode ? "flex-auto" : "flex-none"}`}
        />
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div
          className={`duration-150 ${isDarkMode ? "flex-none" : "flex-auto"}`}
        />
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon
          className={`ml-1 ${isDarkMode ? "text-blue-400" : "text-gray-300"}`}
          icon={faMoon}
        />
      </div>
    </button>
  )
}
export default DarkModeButton
