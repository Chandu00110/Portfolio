import React from "react";
import "../Styles/Home.css";
import Pic from "../images/profile-logos/Pic.png";
const Home = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-5 col-right">
            <img src={Pic} alt="MySelf" />
          </div>
          <div className="col-6 col-left">
            <h2>
              G'day, I'm <br /> Chandra Shekhar,
            </h2>
            <h4>Full Stack Developer</h4>
            <p>
              A tech enthusiast with a passion for creating and building things
              that make a difference. I love exploring new ideas, solving
              challenges, and continuously learning to improve my craft.
            </p>
            <p>
              From designing intuitive user experiences to working on innovative
              solutions, I enjoy every step of the creative and development
              process. I believe in writing clean, efficient code and bringing
              ideas to life through technology.
            </p>
            <p>
              Beyond coding, I enjoy diving into new concepts, staying curious,
              and embracing challenges that push me to grow. My goal is to
              contribute to meaningful projects and make an impact through my
              work.
            </p>
            <p>Let’s connect and create something amazing together!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
