import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import yearsLogo from "../../assets/logo/40-years-logo-fina-white.png";
import gemslogo from "../../assets/logo/gems-logo.png";
import "./nav.scss";
import foutryyear from "../../assets/logo/black-logo-40.png";

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLinkClick = () => {
    handleClose();
  };
  return (
    <>
      <div className="navigation">
        <div className="topgradient-small"></div>
        <header className=" gradient-bg">
          <Container>
            <div className="top-header">
              <div>
                <Link className="logos" to="/">
                  <img
                    src={yearsLogo}
                    alt=".40 years"
                    className="foryear-logo"
                  />
                  <div className="gems-logo">
                    <img src={gemslogo} alt=".40 years" />
                    <span>GEMS SCHOOL</span>
                  </div>
                </Link>
              </div>
              <div className="contacts-header">
                <ul>
                  <div className="consta-header-nav">
                    <li>
                      <div className="mail-phone">
                        <div className="info-icon">
                          <i className="text-gradiant fas fa-envelope"></i>
                        </div>
                        <div className="info-content">
                          <span className="info-id">info@gems.edu.np</span>
                          {/* <span className="info-text">
                            Email Us For Free Registration
                          </span> */}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="mail-phone">
                        <div className="info-icon">
                          <i className="fa-solid fa-phone-volume"></i>
                        </div>
                        <div className="info-content">
                          <span className="info-id">977 1 5275111</span>
                          {/* <span className="info-text">
                            Call Us For Free Registration
                          </span> */}
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="social-header-nav">
                    <li>
                      <a
                        href="https://www.facebook.com/gemsschoolnepal"
                        target="_blank"
                      >
                        <div className="info-social">
                          <i className="fab fa-facebook-f"></i>
                        </div>
                        <span className="info-text">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/gems.school/"
                        target="_blank"
                      >
                        <div className="info-social">
                          <i className="fab fa-instagram"></i>
                        </div>
                        <span className="info-text">Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/gems-school/"
                        target="_blank"
                      >
                        <div className="info-social">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        <span className="info-text">LinkedIn</span>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </Container>
        </header>

        <Navbar expand="md" className="  navbar-nav ">
          <Container className="nav-container">
            <div>
              <Link className="logos">
                <img src={foutryyear} alt=".40 years" />
                <div className="gems-logo">
                  <img src={gemslogo} alt=".40 years" />
                  <span>GEMS SCHOOL</span>
                </div>
              </Link>
            </div>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-md`}
              onClick={handleShow}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
              className="offcanvas-navv"
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton className="offcanvas-hearder-nav">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  <div className="logos">
                    <img src={yearsLogo} alt=".40 years" />
                    <div className="gems-logo">
                      <img src={gemslogo} alt=".40 years" />
                      <span>GEMS SCHOOL</span>
                    </div>
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="offcanvas-navv-body">
                <Nav className="justify-content-end flex-grow-1  nav-offcanvas-nav">
                  <div className="all-the-nav-links">
                    <NavLink
                      onClick={handleLinkClick}
                      to="/"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      Home
                    </NavLink>
                    <NavLink
                      onClick={handleLinkClick}
                      to="/about-us"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      About us
                    </NavLink>
                    <NavLink
                      onClick={handleLinkClick}
                      to="/academics/primary-school"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      ACADEMICS
                    </NavLink>
                    <NavLink
                      onClick={handleLinkClick}
                      to="/gems-admission"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      admissions
                    </NavLink>{" "}
                    <NavLink
                      onClick={handleLinkClick}
                      to="/mega-events"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      mega events
                    </NavLink>
                    <NavLink
                      onClick={handleLinkClick}
                      to="/sports-activities"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      Sports & ACTIVITIES
                    </NavLink>{" "}
                    <NavLink
                      onClick={handleLinkClick}
                      to="/alumni"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      Alumni
                    </NavLink>
                    <NavLink
                      onClick={handleLinkClick}
                      to="/gallery"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      Gallery
                    </NavLink>{" "}
                    <NavLink
                      onClick={handleLinkClick}
                      to="/career"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      career
                    </NavLink>{" "}
                    <NavLink
                      onClick={handleLinkClick}
                      to="/contact-us"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      Contact Us
                    </NavLink>
                  </div>
                  {/* <div className="middle-line"></div>
                  <NavLink to="/login" className="seach-logo">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </NavLink> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Navigation;
