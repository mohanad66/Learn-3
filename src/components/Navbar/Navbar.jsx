import React, { useState } from 'react'
import "./Navbar.css"
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
export default function Navbar() {
  const [Active, setActive] = useState("#")
  return (
    <nav id="navbar">
      <a href="#home"  onClick={()=>setActive("#")}><IoHomeOutline /></a>
      <a href="#about"  onClick={()=>setActive("#about")}><LuUserRound /></a>
      <a href="#skills" onClick={()=>setActive("#skills")}><BiBook /></a>
      <a href="#projects"  onClick={()=>setActive("#projects")}><RiServiceLine /></a>
      <a href="#contact" onClick={()=>setActive("#contact")}><BiMessageSquareDetail /></a>
    </nav>
  )
}
