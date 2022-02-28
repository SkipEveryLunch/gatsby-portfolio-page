import React, { useState } from "react"
import Layout from "../components/Layout"
import Heading from "../components/Heading"
import { Link } from "gatsby"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {
  const [state, setState] = useState({})
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => alert("success"))
      .catch(error => alert(error))
  }
  return (
    <Layout>
      <div className="flex flex-col">
        <Heading
          title="Contact Me"
          describe="お仕事のご依頼などはこちらまで。"
        />
        <div className="flex justify-center text-sm leading-7">
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
              <label>お名前：</label>
              <input
                type="text"
                className="border border-gray-700 rounded-sm focus:outline-none px-1"
                name="name"
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full flex flex-col mt-2">
              <label>メールアドレス：</label>
              <input
                type="email"
                className="border border-gray-700 rounded-sm w-full focus:outline-none px-1"
                label="メールアドレス"
                variant="outlined"
                name="email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full flex flex-col mt-2">
              <label>本文：</label>
              <textarea
                name="message"
                className="border border-gray-700 rounded-sm w-full focus:outline-none px-1"
                label="本文"
                multiline
                rows={4}
                variant="outlined"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-10 flex">
              <button
                className="py-1 rounded-sm border w-24 border-gray-700 hover:bg-gray-200"
                type="submit"
              >
                投稿
              </button>
              <Link
                className="inline-block w-24 py-1 ml-2 rounded-sm bg-gray-700 text-white text-center hover:bg-gray-600"
                to="/"
              >
                戻る
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default Contact
