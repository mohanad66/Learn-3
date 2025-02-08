import React from 'react'
import css from "../../assets/css3.svg"
import { BsPatchCheckFill } from "react-icons/bs"
import Xpressjs from '../../assets/expressjs.svg';
import Figma from '../../assets/figma.svg';
import Javascript from '../../assets/javascript.svg';
import Mongodb from '../../assets/mongodb.svg';
import Nodejs from '../../assets/nodejs.svg';
import ReactJS from '../../assets/react.svg';
import Tailwind from '../../assets/tailwindcss.svg';
import "./Skills.css"
export default function Skills() {
  const skills_list = [
    { id: crypto.randomUUID(), Src: css, h4: "CSS", paragraph: "User Interface" },
    { id: crypto.randomUUID(), Src: Xpressjs, h4: "Express.js", paragraph: "Node Framework" },
    { id: crypto.randomUUID(), Src: Figma, h4: "Figma", paragraph: "Design tool" },
    { id: crypto.randomUUID(), Src: Javascript, h4: "Javascript", paragraph: "User Interface" },
    { id: crypto.randomUUID(), Src: Mongodb, h4: "MongoDB", paragraph: "Database" },
    { id: crypto.randomUUID(), Src: Nodejs, h4: "Nodejs", paragraph: "Web Server" },
    { id: crypto.randomUUID(), Src: ReactJS, h4: "React js", paragraph: "Framework" },
    { id: crypto.randomUUID(), Src: Tailwind, h4: "Tailwind", paragraph: "User Interface" },
  ]
  return (
    <section className='skills' id='skills'>
      <div className="top_section">
        <h5>What Skills I Have</h5>
        <h2> My Experience</h2>
      </div>
      <div className="container container_skills">
        {skills_list.map((skill => (
          <article className="card_skill" key={skill.id} >
            <div className="icon">
              <img src={skill.Src} alt="" />
            </div>
            <div className="content">
              <h4>{skill.h4}</h4>
              <p className='text-light'>{skill.paragraph}</p>
            </div>
          </article>
        )))}
      </div>
    </section>
  )
}
