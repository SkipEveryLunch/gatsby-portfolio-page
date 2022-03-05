import React, { useState, useContext } from "react"
import { Link, navigate } from "gatsby"
import Button from "./Button"
import { GlobalContext } from "../context/GlobalContextProvider"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  const { dispatch } = useContext(GlobalContext)
  const [formState, setFormState] = useState({})
  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formState,
      }),
    })
      .then(() => onSubmitSuccess())
      .catch(error => alert(error))
  }
  const onSubmitSuccess = () => {
    dispatch({ type: "SET_MODAL", payload: "投稿しました。" })
    navigate("/")
  }
  return (
    <form
      className="w-1/2 text-left flex flex-col items-center"
      name="contact"
      method="post"
      action="/thanks"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <label hidden>
        {" "}
        <input name="bot-field" onChange={handleChange} />
      </label>
      <div className="w-full flex flex-col mt-2">
        <label htmlFor="name">お名前：</label>
        <input
          type="text"
          id="name"
          className="border border-gray-700 rounded-sm focus:outline-none px-1"
          name="name"
          onChange={handleChange}
          required
        />
      </div>

      <div className="w-full flex flex-col mt-2">
        <label htmlFor="email">メールアドレス：</label>
        <input
          type="email"
          id="email"
          className="border border-gray-700 rounded-sm w-full focus:outline-none px-1 dark:border-none"
          label="メールアドレス"
          variant="outlined"
          name="email"
          onChange={handleChange}
          required
        />
      </div>

      <div className="w-full flex flex-col mt-2 dark:border-none">
        <label htmlFor="message">本文：</label>
        <textarea
          name="message"
          id="message"
          className="border border-gray-700 rounded-sm w-full focus:outline-none px-1 dark:border-none"
          label="本文"
          multiline
          rows={4}
          variant="outlined"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mt-10 flex">
        <Button>投稿</Button>
        <Link className="ml-2" to="/">
          <Button color="black">戻る</Button>
        </Link>
      </div>
    </form>
  )
}
export default ContactForm
