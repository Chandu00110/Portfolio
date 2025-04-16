import React, { useEffect, useRef } from "react";
import CSLogo from "../images/profile-logos/CS_LOGO.svg";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../Styles/Nav.css";

const Navbarr = () => {
  const navRef = useRef(null);
  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const offset = 0; // height of your sticky navbar
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        el.style.scrollMarginTop = `${offset}px`;
      }
    });
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const navbar = navRef.current;
      if (!navbar) return;

      if (window.scrollY > lastScrollY) {
        navbar.classList.add("nav-hidden");
      } else {
        navbar.classList.remove("nav-hidden");
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    const handleClickOutSide = (event) => {
      const expanded = document.querySelector(".navbar-collapse.show");
      if (
        expanded &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        document.querySelector(".navbar-toggler").click();
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  return (
    <Navbar ref={navRef} className="nav-container sticky-top" expand="lg">
      <Container fluid>
        <Navbar.Brand className="brand-container">
          <img src={CSLogo} alt="logo" className="brand-image" />
          <span className="brand-text">Chandra Shekhar</span>
        </Navbar.Brand>
        <div className="toggle">
          {/* Collapsible Nav */}
        <Navbar.Collapse id="responsive-navbar-nav" className="custom-collapse">
          <Nav className="ms-auto sections">
            {sections.map((section) => (
              <span
                key={section.id}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(section.id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
              >
                {section.label}
              </span>
            ))}
          </Nav>
        </Navbar.Collapse>

        {/* Toggle Button */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="custom-toggler"
        />
        </div>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
