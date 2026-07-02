import React from "react";
import "./Hero.css";
import hero_image from "../../assets/hero-image.png";
import hero_card_image from "../../assets/hero-card-image.png";
import { FaHeart } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <article className="hero-card">
        <div className="left-hero-card">
          <div className="heart-box">
            <figure className="heart-icons">
              <FaHeart className="heart-icon" />
            </figure>
            <p>Empowering Girls. Building Futures. </p>
          </div>

          <h1 className="head">Empowering Girls</h1>
          <h1 className="sub-head">Building Better Futures</h1>
          <p className="hero-para">
            She Can Foundation is committed to empowering girls through
            education, digital skills, and community development programs.
          </p>
          <div className="hero-button-card">
            <button className="hero-button">Join Us Today</button>
            <button className="hero-button outline">Learn More</button>
          </div>
        </div>
        <article className="right-hero-card">
          <figure className="hero-image-card">
            <img src={hero_image} alt="" />
          </figure>
        </article>
      </article>
      <article className="hero-bottom-card">
        <figure className="hero-bottom-image">
          <img src={hero_card_image} alt="" />
        </figure>
        <div className="bottom-card-content">
          <div className="bottom-content">
            <h1 className="bottom-head">Together We Can</h1>
            <h1 className="bottom-sub-head">Create a Better Tomorrow</h1>
            <p className="bottom-hero-para">
              Join our mission to create a world where every girl has the
              opportunity to learn, grow and succeed.
            </p>
          </div>
          <button className="primary-btn bottom-button">
            Get Involved <IoMdArrowRoundForward className="primary-icon" />
          </button>
        </div>
      </article>
    </section>
  );
};

export default Hero;
