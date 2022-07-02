import React from "react"
import Layout from "../layouts/Layout"
import "../asserts/styles/home.scss"
import proj1 from "../../static/images/proj1.png"
import proj2 from "../../static/images/proj2.png"
import proj3 from "../../static/images/proj3.png"
import proj4 from "../../static/images/proj4.png"
import proj5 from "../../static/images/proj5.png"
import proj6 from "../../static/images/proj6.png"
import proj7 from "../../static/images/proj7.png"
import proj8 from "../../static/images/proj8.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

const IndexPage = () => {
  const projects = [
    {
      image: proj1,
      key: 1,
      title: "Spartan",
      link: "https://www.behance.net/gallery/144176287/Spartan"
    },
    {
      image: proj2,
      key: 2,
      title: "Tawakou3ati Arabcup 2021",
      link: "https://www.behance.net/gallery/143653781/Tawakou3ati_Arabcup_2021_Opener"
    },
    {
      image: proj3,
      key: 3,
      title: "West Asia VolleyBall Studio",
      link: "https://www.behance.net/gallery/142729979/West-Asia-Volleyball_studio_Opener"
    },
    {
      image: proj4,
      key: 4,
      title: "Tatic Amircup 2022",
      link: "https://www.behance.net/gallery/142729465/Tactic_Amircup_2022_Opener"
    },
    {
      image: proj5,
      key: 5,
      title: "Fad Fad Amircup",
      link: "https://www.behance.net/gallery/142729163/Fad-Fad_Amircup_Opener"
    },
    {
      image: proj6,
      key: 6,
      title: "Dubai Cup U23 2022",
      link: "https://www.behance.net/gallery/142728767/Dubai-Cup_U23_2022_Opener"
    },
    {
      image: proj7,
      key: 7,
      title: "Asian Men Handball Championship",
      link: "https://www.behance.net/gallery/142728479/Asian-Men-Handball-Championship_2022_Opener"
    },
    {
      image: proj8,
      key: 8,
      title: "WTT Youth Star Contender",
      link: "https://www.behance.net/gallery/142727407/WTT_Youth-Star-Contender_2022_Opener"
    },
  ];

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Layout wrapperClassName="home_page" title="Home">
      <div className="home_wrapper">
        {projects.map(item => (
          <a className="img_wrapper" key={item.key} href={item.link} target="_blank" rel="noreferrer">
            <img src={item.image} alt="project" />
            <div className="overflow_wrapper">
              <h4>{item.title}</h4>
            </div>
          </a>
        ))}
      </div>
      <div className="scroll_area">
        <button onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} /> Back to Top
        </button>
      </div>
    </Layout>
  )
}

export default IndexPage
