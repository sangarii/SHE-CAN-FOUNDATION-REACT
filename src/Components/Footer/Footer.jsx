import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <article className="footer-left">
        <figure className="footer-image">
          <img src={logo} alt="" />
        </figure>
        <div className="footer-heading">
          <h6>She Can Foundation</h6>
          <p>Empowering Girls</p>
        </div>
      </article>
      <article className="footer-center">
          <p>&copy; 2026 She Can Foundation.</p>
          <p>All rights reserved.</p>
      </article>
      <article className="footer-right">
        <FaFacebookF className="footer-icon"/>
        <BsInstagram className="footer-icon"/>
        <FaTwitter className="footer-icon" />
      </article>
    </section>
  );
};

export default Footer;
