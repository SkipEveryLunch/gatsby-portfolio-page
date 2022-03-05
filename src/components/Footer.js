import React from "react"
import DarkModeButton from "./DarkModeButton"
const Footer = () => {
  return (
    <footer className="flex justify-end items-center mt-auto py-3 px-3">
      <div className="mr-3">
        <DarkModeButton />
      </div>
      <div>
        <p className="text-sm">Copyright © 2022 SkipEveryLunch</p>
      </div>
    </footer>
  )
}
export default Footer
