import React, { useEffect,useState,useRef } from "react";
import "../Styles/Skills.css";
import HTML from "../images/skill-images/HTML.png";
import css from "../images/skill-images/css-3.png";
import js from "../images/skill-images/js.png";
import bootstrap from "../images/skill-images/bootstrap.png";
import java from "../images/skill-images/java.png";
import python from "../images/skill-images/python.png";
import aspNet from "../images/skill-images/aspNet.png";
import django from "../images/skill-images/django.png";
import spring from "../images/skill-images/spring.png";
import springboot from "../images/skill-images/spring_boot.png";
import blazor from "../images/skill-images/blazor.png";
import mysql from "../images/skill-images/mysql.png";
import postgresql from "../images/skill-images/postgresql.png";
import git from "../images/skill-images/git.png";
import github from "../images/skill-images/github.png";
import vscode from "../images/skill-images/vscode.png";
import eclipse from "../images/skill-images/eclipse.png";
import react from "../assets/react.svg"

const Skills = ({wheel}) => {
    const skills = [
      { name: "HTML", image: HTML },
      { name: "CSS", image: css },
      { name: "Bootstrap", image: bootstrap },
      { name: "JavaScript", image: js },
      { name: "React JS", image: react},
      { name: "Java", image: java },
      { name: "Python", image: python },
      { name: "Spring", image: spring },
      { name: "Spring Boot", image: springboot },
      { name: "Django", image: django },
      { name: "ASP.NET (Core)", image: aspNet },
      { name: "Blazor", image: blazor },
      { name: "MySQL", image: mysql },
      { name: "PostgreSQL", image: postgresql },
      { name: "Git", image: git },
      { name: "GitHub", image: github },
      { name: "VS Code", image: vscode },
      { name: "Eclipse", image: eclipse },
    ];
  
    const [visibleItems, setVisibleItems] = useState([]);
    const skillRefs = useRef([]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = entry.target.getAttribute("data-index");
            if (entry.isIntersecting) {
              setVisibleItems((prev) => [...new Set([...prev, index])]);
            } else {
              setVisibleItems((prev) => prev.filter((i) => i !== index));
            }
          });
        },
        {
          threshold: 0.1
        }
      );
  
      skillRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
  
      return () => {
        skillRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      };
    }, []);
  
    return (
      <div className="Skills" id="skills">
        <div className="heading">
          <img src={wheel} alt="wheel" />
          <h3>My Skills</h3>
        </div>
  
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div
              className={`skill ${visibleItems.includes(index.toString()) ? "visible" : ""}`}
              key={index}
              data-index={index}
              ref={(el) => (skillRefs.current[index] = el)}
            >
              <img src={skill.image} alt={skill.name} width={50} height={50} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Skills;