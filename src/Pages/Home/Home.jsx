import React from "react";
import "./home.css";
import logo from "../../media/sid.svg";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <div class="navbar">
        <div className="nav">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="logo">
          <img src={logo} alt="log" />
        </div>
        <div className="social">
          <a href="https://www.linkedin.com/in/sidhant-sadyal-233933237/">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/sidhant0225s/">
            <FaInstagram />
          </a>
          <a href="https://github.com/Sid0225s/">
            <FaGithub />
          </a>
          <a href="mailto : sadyalofficial@gmail.com ">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="bio">
        <h1>Hello!</h1>
        <h1>I'm Sidhant </h1>
        <p class="shining">I am a Website Devloper</p>
      </div>
    </div>
  );
}

export default Home;
