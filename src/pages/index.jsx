import React from 'react'
import Layout from '../layouts/Layout'
import "../asserts/styles/home.scss";
import proj1 from "../../static/images/proj1.png";

const IndexPage = () => {
  return (
    <Layout wrapperClassName="home_page" title="Home" >
      <div className="home_wrapper">
        <div className="img_wrapper">
          <img src={proj1} alt="project" />
          <div className="overflow_wrapper">
            <h4>Spartons</h4>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default IndexPage