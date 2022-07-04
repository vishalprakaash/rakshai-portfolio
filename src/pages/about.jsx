import React from "react"
import Layout from "../layouts/Layout"
import "../asserts/styles/about.scss";

const About = () => {
  return (
    <Layout wrapperClassName={"about_wrapper"} title={"About"}>
      <div className="container">
        <div className="title_wrapper">
          <h3>Rakshai Kumar</h3>
          <p>
            I am a graphic designer. My strength is my concentration,
            confidence, dedication, full commitment towards my profession and
            also to other fields.
          </p>
          <p>My strength is my concentration, confidence, dedication, full commitment towards my profession and also to other fields.</p>
        </div>
      </div>
    </Layout>
  )
}

export default About
