import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
     I've worked for multiple years and highly
              qualified in Augmented Reality, Web & Mobile
              application Development to create impressive and
              interactive solutions while transforming ideas into
              realities, primarily focused on outcomes based learning
              experiences, I'm engaging in industrial projects to
              stimulate the process of learning and growing in
              professional field at the same time with full satisfaction.
              Eager to learn more software tools and methodologies
              for the continuity of utilizing knowledge in best ways.
              My Abilities are:
              - AR, Laravel and MERN Developer
              - Laravel Framework Trainer
              - Teaching Assistant
              - Leadership
              - MentoringJava Language
              Languages
              English
              Urdu
              Punjabi
              - Collaboration and Team Management
              - Negotiation and Conflict Management
              - Public Speaker
              - Analytical Expert
              - Volunteer
              - Traveler
              - Writer
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
