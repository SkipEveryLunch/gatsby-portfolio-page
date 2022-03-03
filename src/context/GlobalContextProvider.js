import React, { useReducer, createContext } from "react"
export const GlobalContext = createContext()
const initialState = {
  modal: "",
}
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MODAL":
      console.log(action.payload)
      return {
        ...state,
        modal: action.payload,
      }
    case "DISCARD_MODAL":
      return {
        ...state,
        modal: "",
      }
    default:
      throw new Error("bad action")
  }
}
const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <GlobalContext.Provider value={{ state, dispatch }}>
        {children}
      </GlobalContext.Provider>
    </div>
  )
}
export default GlobalContextProvider
