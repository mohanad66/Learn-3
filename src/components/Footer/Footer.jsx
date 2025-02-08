import React from 'react'
import "./Footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
      <footer>
        <a href="#" className='footer_logo'>RedaTech</a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer_socials">
          <a href="#" target='__blank'><FaFacebookF/></a>
          <a href="#" target='__blank'><FaInstagram/></a>
          <a href="#" target='__blank'><FaXTwitter/></a>
        </div>
        <div className="footer_copyright">
          <small>&copy; <a href="#">RedaTech</a> ALl rights reserved</small>
        </div>
      </footer>
  )
}
