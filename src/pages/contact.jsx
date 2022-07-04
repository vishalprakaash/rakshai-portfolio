import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../layouts/Layout"
import "../asserts/styles/contact.scss";

const Contact = () => {
  return (
    <Layout wrapperClassName={"contact_wrapper"} title={"Contact"}>
      <div className="container">
        <div className="title_wrapper">
          <h3>Contact Me</h3>
          <p>
            You can contact me by mail, by phone, at my place, or by leaving your valuable comment.
          </p>
        </div>
        <div className="contact_box">
          <div className="upper_section">
            <div className="email">
              {/* <FontAwesomeIcon icon={famail} /> */}
            </div>
          </div>
          <div className="lower_section">
            <form>

              <label htmlFor="name">
                Name * <br />
                <input type="text" name="name" id="name" required />
              </label>
              <label htmlFor="email">
                Email *<br />
                <input type="email" name="email" id="email" required />
              </label>
              <label htmlFor="message">
                Message *<br />
                <textarea name="message" id="message" cols="30" rows="3" required />
              </label>
              {/* <p className="alert alert-danger">gtfdgfd</p> */}
              <button type="submit" className="form_submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
