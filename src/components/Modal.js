import React, { useState, useEffect, useContext } from "react"
import { GlobalContext } from "../context/GlobalContextProvider"
import Button from "./Button"
const Modal = () => {
  const { dispatch, state } = useContext(GlobalContext)
  const [isHoisted, setIsHoisted] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsHoisted(false)
    }, 100)
  })
  const onClose = () => {
    dispatch({ type: "DISCARD_MODAL" })
  }
  return (
    <>
      {state.modal !== "" ? (
        <div className="fixed z-20 flex items-center justify-center w-full h-screen transition-opacity bg-gray-900  bg-opacity-40">
          <div
            className={`bg-white w-1/3 rounded-sm flex flex-col items-center p-3 duration-300 ${
              isHoisted ? "translate-y-[-1.5rem] opacity-0" : ""
            }`}
          >
            <div className="p-5">
              <p>{state.modal}</p>
            </div>
            <div className="flex justify-end mr-3" v-if="modal.cb">
              <Button color="black" onClick={onClose}>
                閉じる
              </Button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  )
}
export default Modal
