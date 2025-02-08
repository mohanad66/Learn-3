import React from 'react'
import "./About.css"
import ImageMe from "../../assets/me-about.jpg"
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
export default function About() {
  return (
    <section className="about" id='about'>
      <div className="top_section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ImageMe} alt="" srcset="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className="about_icon" />
              <h5>Experiences</h5>
              <small>3+ years working</small>
            </div>
            <div className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </div>
            <div className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </div>
          </div>
          <p>Et ad deserunt eiusmod adipisicing aliqua ad consequat laborum eu fugiat anim pariatur ut et. Officia anim occaecat Lorem Lorem aliquip dolor eu minim sunt duis non minim. Tempor laboris excepteur aliquip aliquip elit velit deserunt consequat ut veniam minim tempor cupidatat. Adipisicing voluptate officia esse culpa dolor in irure incididunt sint. Sint cillum esse proident minim nulla consectetur sit id quis minim veniam id Lorem. Ipsum enim do exercitation enim ad cupidatat est voluptate.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
