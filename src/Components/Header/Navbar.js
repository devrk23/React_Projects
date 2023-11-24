import React, { useState } from "react";
import logo1 from '../../Assets/images/company_logo-removebg-preview.png';
import "../../Assets/css files/Navbar.css";


function Navbar() {
  return (
    <div className="navbar">
        <img width={230} src={logo1}></img>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#Home">
              HOME
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ABOUT
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Our Company
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Quality Policy
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  ISO Certified
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  JSRS Certified
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              INDUSTRIES
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Real Estate
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Banking / Finance
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Hospitality
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Club Management
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Manufacturing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Maintenance
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              OUR PRODUCTS
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  HRMS Software
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  HRMS Software for Hospitality
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Accounting Software
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Property Management System
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Computer Aided Facility Management System
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Cleaning Management System
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Club Management System
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Building Maintenance Application
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="https://equal.ae/"
            >
              EQUAL
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              SERVICES
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Search Engine Optimization
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Application Development
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Geofencing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Website Development
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Branding and Creative Designing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Digital Marketing
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#blog">
              BLOG
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#careers">
              CAREERS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
