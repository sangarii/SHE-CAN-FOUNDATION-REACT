import React from "react";
import "./About.css";
import about_img from "../../assets/about-icon.png";
import profile_1 from "../../assets/profile_1.png";
import profile_2 from "../../assets/profile_2.png";
import profile_3 from "../../assets/profile_3.png";
import profile_4 from "../../assets/profile_4.png";
import profile_5 from "../../assets/profile_5.png";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaUsers } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { ImUsers } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import { GiOpenBook } from "react-icons/gi";
import { FaBalanceScale } from "react-icons/fa";
import { RiHandHeartFill } from "react-icons/ri";
import { FaChild } from "react-icons/fa";

const About = ({ title, subtitle, title2, subtitle2, title3, subtitle3 }) => {
  return (
    <section className="about">
      <header>
        <h2 className="about-head">
          {title} <span>{subtitle} </span>
        </h2>
        <div className="divider"></div>
        <p>
          We'd love to hear from you. Reach out to support our mission of
          empowering girls.
        </p>
      </header>
      <section id="about" className="about-card">
        <article className="left-about">
          <figure className="about-image">
            <img src={about_img} alt="" />
          </figure>
        </article>
        <article className="right-about">
          <p className="about-head">
            She Can Foundation is a non-profit organization dedicated to
            empowering women and children through education, skill development,
            healthcare awareness, and community support. Our mission is to
            create equal opportunities, nurture leadership, and inspire
            confidence, enabling individuals to build independent and fulfilling
            lives. Together, we are creating a future where every woman and
            child has the power to learn, lead, and succeed.
          </p>
          <p className="about-sub">
            <p className="about-sub-head">.Educate</p>
            <p className="about-sub-head">.Empower</p>
            <p className="about-sub-head">.Elevate</p>
          </p>
        </article>
      </section>
      <header>
        <h2 className="about-sub-head">
          {title2} <span className="span-reverse">{subtitle2} </span>
        </h2>
        <div className="divider"></div>
        <p>
          A passionate team committed to empowering women and building stronger
          communities.
        </p>
      </header>

      <section className="about-profile">
        <figure className="about-profile-image">
          <img src={profile_1} alt="" />
          <h5>Sarah Johnson</h5>
          <h6 className="about-profile-sub-text">Founder & Director</h6>
          <div className="social-icon-card">
            <TiSocialFacebook className="social-icon" />
            <TiSocialLinkedin className="social-icon" />
            <TiSocialTwitter className="social-icon" />
          </div>
        </figure>
        <figure className="about-profile-image">
          <img src={profile_2} alt="" />
          <h5>Michael Lee</h5>
          <h6 className="about-profile-sub-text">Program Manager</h6>
          <div className="social-icon-card">
            <TiSocialFacebook className="social-icon" />
            <TiSocialLinkedin className="social-icon" />
            <TiSocialTwitter className="social-icon" />
          </div>
        </figure>
        <figure className="about-profile-image">
          <img src={profile_3} alt="" />
          <h5>Emily Davis</h5>
          <h6 className="about-profile-sub-text">Volunteer Coordinator</h6>
          <div className="social-icon-card">
            <TiSocialFacebook className="social-icon" />
            <TiSocialLinkedin className="social-icon" />
            <TiSocialTwitter className="social-icon" />
          </div>
        </figure>
        <figure className="about-profile-image">
          <img src={profile_4} alt="" />
          <h5>David Kim</h5>
          <h6 className="about-profile-sub-text">Outreach Lead</h6>
          <div className="social-icon-card">
            <TiSocialFacebook className="social-icon" />
            <TiSocialLinkedin className="social-icon" />
            <TiSocialTwitter className="social-icon" />
          </div>
        </figure>
        <figure className="about-profile-image">
          <img src={profile_5} alt="" />
          <h5>James Wilson</h5>
          <h6 className="about-profile-sub-text">Communications Lead</h6>
          <div className="social-icon-card">
            <TiSocialFacebook className="social-icon" />
            <TiSocialLinkedin className="social-icon" />
            <TiSocialTwitter className="social-icon" />
          </div>
        </figure>
      </section>
      <section className="value">
        <article className="value-card card1">
          <figure className="circle-icons">
            <FaUsers className="circle-icon" />
          </figure>
          <div className="primary-card">
            <p>500+</p>
            <h5>Women Empowered</h5>
            <h6>Through our programs</h6>
          </div>
        </article>
        <article className="value-card card2">
          <figure className="circle-icons">
            <RiGraduationCapFill className="circle-icon" />
          </figure>
          <div className="primary-card">
            <p>100+</p>
            <h5>Workshops Conducted</h5>
            <h6>Across communities</h6>
          </div>
        </article>

        <article className="value-card card3">
          <figure className="circle-icons">
            <ImUsers className="circle-icon" />
          </figure>
          <div className="primary-card">
            <p>50+</p>
            <h5>Dedicated Volunteers</h5>
            <h6>Working for change</h6>
          </div>
        </article>

        <article className="value-card card4">
          <figure className="circle-icons">
            <MdLocationOn className="circle-icon" />
          </figure>
          <div className="primary-card">
            <p>10+</p>
            <h5>Cityshops Conducted</h5>
            <h6>and growing mare</h6>
          </div>
        </article>
      </section>
      <header>
        <h2 className="about-head">
          {title3} <span>{subtitle3} </span>
        </h2>
        <div className="divider"></div>
        <p>
          Driven by equality, education, empowerment, and meaningful community
          impact.
        </p>
      </header>
      <section className="team-value">
        <article className="value-card team-card1 team-value-card">
          <figure className="circle-icons">
            <GiOpenBook className="circle-icon" />
          </figure>
          <div className="primary-card">
            <h5>Education</h5>
            <h6 className="team-h6">
              We promote quality education and lifelong learning for every girl
              and women.
            </h6>
          </div>
        </article>
        <article className="value-card team-card2 team-value-card">
          <figure className="circle-icons">
            <FaBalanceScale className="circle-icon" />
          </figure>
          <div className="primary-card">
            <h5>Equality</h5>
            <h6 className="team-h6">
              We believe in equal rights, respect, and opportunities for all.
            </h6>
          </div>
        </article>

        <article className="value-card team-card3 team-value-card">
          <figure className="circle-icons">
            <FaChild className="circle-icon" />
          </figure>
          <div className="primary-card">
            <h5>Empowerment</h5>
            <h6 className="team-h6">
              We build confidence, skills, and leadership to help individuals
              thrive.
            </h6>
          </div>
        </article>

        <article className="value-card team-card4 team-value-card">
          <figure className="circle-icons">
            <RiHandHeartFill className="circle-icon" />
          </figure>
          <div className="primary-card">
            <h5>Community</h5>
            <h6 className="team-h6">
              We work together with communities to create lasting positive
              change.
            </h6>
          </div>
        </article>
      </section>
    </section>
  );
};

export default About;
