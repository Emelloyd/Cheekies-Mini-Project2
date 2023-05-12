import { Link } from "react-router-dom";
import React from 'react'
import { Row } from "react-bootstrap";


const Footer = () => {
  return (
    <div className='footer'>
      <div className="row g-5">
      <div class="col-lg-3 p-6">
          <div className="app-header-logo">
          <Link to='/'>
          <img 
          className="navbar-brand p-0"
          src = "cheekies.png"
          alt="pizza"
          />
          </Link>
      </div>
      </div>
      <Row class="text-dark mb-5 ">Cheekies is a Pizza Store aimed to provide the the best Quality Ingredients and Where Pizza Happen! for
          couples,friends, family, or even single people without having to family time and Deliver free within the city.
        </Row>
      </div>
  <div className="col-lg-3 p-6">
    <h5 className="mb-3 text-dark ">Quick Links</h5>
        <Link to="./" className="d-inline-block  mb-2  text-decoration-none" id="footer-link">Home</Link><br/>
        <Link to="menu" className="d-inline-block mb-2   text-decoration-none" id="footer-link">Menu</Link><br/>
        <Link to="about" className="d-inline-block mb-2   text-decoration-none" id="footer-link">About</Link><br />
        <Link to="contact-us" className  ="d-inline-block mb-2   text-decoration-none" id="footer-link">Contact
          Us</Link><br />
          <Link to="bookaparty" className="d-inline-block mb-2   text-decoration-none" id="footer-link">Book A Party</Link><br />
  </div>
    <div className="col-lg-3 col-md-6 mb-4">
    <h5 className="mb-1 text-dark">Opening hours</h5>
    <table className="table">
      <tbody>
        <tr>
          <td>Mon - Fri:</td>
          <td>8am - 9pm</td>
        </tr>
        <tr>
          <td>Sat - Sun:</td>
          <td>8am - 1am</td>
        </tr>
      </tbody>
    </table>

        <div className='container footer'>
            <h5>
              &copy; {new Date().getFullYear()}
              <span> Cheekies </span>
            </h5>
            <h5>All rights reserved</h5>
        </div>
      </div>
    </div>
  )
}

export default Footer;