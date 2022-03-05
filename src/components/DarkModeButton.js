import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggleIsDarkMode = () => {
    isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true)
  }
  return (
    <div className="flex items-center" onClick={toggleIsDarkMode}>
      <div className="flex items-center">
        <FontAwesomeIcon
          className={`mr-1 ${isDarkMode ? "text-gray-300" : "text-blue-400"}`}
          icon={faSun}
        />
      </div>
      <div className="flex items-center">
        <input
          className="darkModeButton"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked={isDarkMode}
        />
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon
          className={`ml-1 ${isDarkMode ? "text-blue-400" : "text-gray-300"}`}
          icon={faMoon}
        />
      </div>
    </div>
  )
}
export default DarkModeButton
