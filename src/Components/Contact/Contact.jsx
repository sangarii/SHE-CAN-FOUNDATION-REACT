import React from "react";
import "./Contact.css";
import '../Styles/common.css'
import { TbMail } from "react-icons/tb";
import { IoIosSend } from "react-icons/io";
import { BiSolidPhone } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { LiaClock } from "react-icons/lia";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { HiOutlineClock } from "react-icons/hi";


const Contact = () => {
  return (
    <section className="contact">
      <header>
        <h2 className="contact-head">
          Get In <span>Touch</span>
        </h2>
        <div className="divider"></div>
        <p>
          We'd love to hear from you. Reach out to support our mission of
          empowering girls.
        </p>
      </header>
      <section className="contact-card">
        <form className="left-contact">
          <header className="contact-title">
            <div className="title-left">
              <TbMail className="mail-icon" />
            </div>
            <div className="title-right">
              <h4>Send Us a Message</h4>
              <p>Fill out the form below and We'll get back to you.</p>
            </div>
          </header>

          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>
          <div className="group-input-items">
            <div className="input-group">
              <label>Email Address</label>
              <input type="text" placeholder="Enter your email" />
            </div>

            <div className="input-group">
              <label>Subject</label>
              <input type="text" placeholder="Enter subject" />
            </div>
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea type="text" placeholder="Type your message here..." />
          </div>
          <button className="primary-btn">
            Send Message <IoIosSend className="primary-icon" />
          </button>
        </form>

        <article className="right-contact">
          <header className="contact-title">
            <div className="title-left">
              <BiSolidPhone className="contact-icon" />
            </div>
            <div className="title-right">
              <h4>Contact Information</h4>
              <p>Here are the best ways to reach us.</p>
            </div>
          </header>

          <div className="right-contact-card">

            <div className="contact-data">
              <div className="title-data-left">
                <MdOutlineLocationOn className="contact-data-icon" />
              </div>
              <div className="title-data-right">
                <h5>Address</h5>
                <p>Hosur, Tamil Nadu, India</p>
                <p>635109</p>
              </div>
            </div>

            <div className="contact-data">
              <div className="title-data-left">
                <MdMailOutline className="contact-data-icon" />
              </div>
              <div className="title-data-right">
                <h5>Email</h5>
                <p>contact@shecanfoundation.org</p>
              </div>
            </div>

              <div className="contact-data">
              <div className="title-data-left">
                <MdOutlineLocalPhone className="contact-data-icon" />
              </div>
              <div className="title-data-right">
                <h5>Phone</h5>
                <p>+91 98765 43210</p>
              </div>
            </div>

              <div className="contact-data">
              <div className="title-data-left">
                <HiOutlineClock className="contact-data-icon" />
              </div>
              <div className="title-data-right">
                <h5>Working Hours</h5>
                <p>Mon - Fri : 9:00AM - 6:00PM</p>
                <p>Sat  - Sun : Closed</p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Contact;
