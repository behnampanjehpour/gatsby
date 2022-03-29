import React from "react"
import "../assets/css/style.css"
import logo from "../assets/images/logo.png"
import { Link } from "gatsby"
const Cta = () => {
  function getUrl() {
    fetch("/.netlify/functions/url")
      .then(res => res.text())
      .then(data => (url = data))
    return url
  }
  let url = getUrl()
  return (
    <>
      <div className="title">
        <h1>Gastby & Lambda Project</h1>
      </div>
      <div className="container">
        <div className="image-container">
          <img src={logo} alt="logo" />
        </div>

        <div className="inner-text">
          <p className="top">Quick Trade</p>
          <p className="bottom">Get it on the App Store</p>
        </div>
        <div className="button-container">
          <button
            className="button"
            onClick={e => {
              e.preventDefault()
              window.location.href = url
            }}
          >
            GET
          </button>
        </div>
      </div>
    </>
  )
}

export default Cta
