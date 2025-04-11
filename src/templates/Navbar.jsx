import React,{useEffect} from 'react';
import CSLogo from '../images/profile-logos/CS_LOGO.svg';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../Styles/Nav.css'

const Navbarr = () => {

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const offset = 70; // height of your sticky navbar
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        el.style.scrollMarginTop = `${offset}px`;
      }
    });
  }, []);

  return (
<Navbar className="nav-container sticky-top" expand="lg">
  <Container fluid>
    <Navbar.Brand className="brand-container">
      <img src={CSLogo} alt="logo" className="brand-image" />
      <span className="brand-text">Chandra Shekhar</span>
    </Navbar.Brand>

    {/* Toggle Button */}
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler"/>

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
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            {section.label}
          </span>
        ))}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

export default Navbarr;