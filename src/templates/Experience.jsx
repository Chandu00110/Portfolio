import React, { useState } from "react";
import "../Styles/Exp.css";

const Experience = ({ wheel }) => {
  const [selectedCompany, setSelectedCompany] = useState("Wexdi");

  return (
    <div className="Experience" id="experience">
      <div className="heading">
        <img src={wheel} alt="wheel" />
        <h3>Work Experience</h3>
      </div>

      <div className="Companies row">
        <div className="col-2 company-list">
          <p
            className={selectedCompany === "Wexdi" ? "active" : ""}
            onClick={() => setSelectedCompany("Wexdi")}
          >
            Wexdi <br /> Services Pvt Ltd
          </p>
          <p
            className={selectedCompany === "Vaaradhi" ? "active" : ""}
            onClick={() => setSelectedCompany("Vaaradhi")}
          >
            Vaaradhi <br /> Web & IT Services
          </p>
        </div>

        <div className="col company-details">
          {selectedCompany === "Wexdi" && (
            <ul>
              <li>
                <h4>Python Developer Intern</h4>
                <p>Feb 2025 - Present</p>
                <ul className="internship-details">
                  <li>
                    Contributing to the development of web-based solutions using
                    Django, focusing on robust backend logic and scalable
                    architecture.
                  </li>
                  <li>
                    Assisted in the design and implementation of an Employee
                    Management System, including features like employee CRUD
                    operations, leave tracking, and department-wise filtering.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to optimize
                    application performance, improve user experience, and ensure
                    mobile responsiveness.
                  </li>
                  <li>
                    Participated in code reviews, debugging sessions, and
                    software testing to ensure functionality, maintainability,
                    and adherence to coding standards.
                  </li>
                  <li>
                    Integrated third-party APIs and libraries to extend
                    application capabilities and enhance system flexibility.
                  </li>
                  <li>
                    Utilized Git for version control and worked in an Agile
                    environment to deliver features in iterative sprints.
                  </li>
                </ul>
              </li>
            </ul>
          )}

          {selectedCompany === "Vaaradhi" && (
            <ul>
              <li>
                <h4>Software Developer Intern</h4>
                <p>June 2024 - Jan 2025</p>
                <ul className="internship-details">
                  <li>Collaborating on .NET projects, contributing to web-based solution development. </li>
                  <li>Assisting in coding, debugging, and testing phases of the software development lifecycle.</li>
                  <li>Implement user interface components and features using Blazor for interactive and responsive 
                  web applications.</li>
                  <li>Collaborate with front-end developers to integrate user-facing elements with server-side logic. </li>
                  <li>Work with PostgreSQL Server and Entity Framework to manage data storage and retrieval. </li>
                  <li>Develop and optimize RESTful APIs using ASP.NET Core to support front-end applications.</li>
                  <li>Optimize database queries for better performance and scalability. 
                  Troubleshoot and resolve issues related to application performance a</li>
                </ul>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
