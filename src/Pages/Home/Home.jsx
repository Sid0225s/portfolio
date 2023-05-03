import React from "react";
import "./home.css";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Lottie from "lottie-react";
import animate from "../../ani.json";

function Home() {
  return (
    <div className="home">
      <div class="navbar navham">
        <div className="nav navh">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
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
          <a href="mailto:sadyalofficial@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <div className="ham">
          <GiHamburgerMenu />
        </div>
      </div>
      <div className="down">
        <div className="bio">
          <h1>Hello!</h1>
          <h1>I'm Sidhant </h1>
          <p class="shining">Fullstack Web Devloper</p>
        </div>
        <div className="card" style={{ width: "50%" }}>
          <Lottie animationData={animate}></Lottie>
        </div>
      </div>
    </div>
  );
}

export default Home;
