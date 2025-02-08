import React from 'react'
import "./Services.css"
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";
export default function Services() {
  return (
    <section id='services' className='services'>
      <div className="top_section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container container_services">
        <article className="card">
          <MdDesignServices className="icon" />
          <h3>Web Design</h3>
          <p className='text-light'>Nostrud cupidatat laboris exercitation officia sit commodo eu veniam quis cupidatat.</p>
        </article>
        <article className="card">
          <IoIosRocket className="icon" />
          <h3>Fast Performance</h3>
          <p className='text-light'>Nostrud cupidatat laboris exercitation officia sit commodo eu veniam quis cupidatat.</p>
        </article>
        <article className="card">
          <FaCode className="icon" />
          <h3>Clean Code</h3>
          <p className='text-light'>Esse culpa consectetur est deserunt aliquip in et do proident quis eiusmod labore in.</p>
        </article>
      </div>
    </section>
  )
}
