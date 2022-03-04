import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalContextProvider"
const Modal = () => {
  const { dispatch, state } = useContext(GlobalContext)
  const onClose = () => {
    dispatch({ type: "DISCARD_MODAL" })
  }
  return (
    <div className="z-10">
      {state.modal !== "" ? (
        <div>
          <button onClick={onClose}>閉じる</button>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}
export default Modal
