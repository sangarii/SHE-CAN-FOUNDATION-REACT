import React from "react";
import "./Work.css";
import "../Styles/common.css";
import work_1 from "../../assets/work_1.jpg";
import work_2 from '../../assets/work_2.jpeg'
import work_3 from '../../assets/work_3.jpeg'
import work_4 from '../../assets/work_4.jpeg'
import work_5 from '../../assets/w.jpeg'
import work_6 from '../../assets/work_6.jpeg'
import { MdVolunteerActivism } from "react-icons/md";
import { IoMdArrowRoundForward } from "react-icons/io";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { LiaUsersSolid } from "react-icons/lia";
import { FaLeaf } from "react-icons/fa";

const Work = () => {
  return (
    <section className="work">
      <header>
        <h2 className="work-head">
          Our <span>Work</span>
        </h2>
        <div className="divider"></div>
        <p>
          We are committed to creating real change in the lives of girls and
          women through impactful programs.
        </p>
      </header>
      <section className="work-card">
        <article className="card-1">
          <div className="card-image">
            <figure className="work-image">
              <img src={work_1} alt="" />
            </figure>
            <div className="icon-outline">
              <figure className="circle-icons">
                <GiOpenBook className="circle-icon" />
              </figure>
            </div>

            <div className="work-data">
              <p className="work-title">Education for All</p>
              <p className="work-subtitle">
                Providing quality education and learning resources to
                underprivileged girls.
              </p>
              <button className="card-btn">
                Learn More <IoMdArrowRoundForward className="primary-icon" />
              </button>
            </div>
          </div>

          <div className="card-image">
            <figure className="work-image">
              <img src={work_2} alt="" />
            </figure>
              <div className="icon-outline">
              <figure className="circle-icons">
                <LiaUsersSolid className="circle-icon" />
              </figure>
            </div>

            <div className="work-data">
              <p className="work-title">Skill Development</p>
              <p className="work-subtitle">
                 Equipping girls with essential skills to achieve financial independence.
              </p>
              <button className="card-btn">
                Learn More <IoMdArrowRoundForward className="primary-icon" />
              </button>
            </div>
          </div>

          <div className="card-image">
            <figure className="work-image">
              <img src={work_3} alt="" />
            </figure>
              <div className="icon-outline">
              <figure className="circle-icons">
                <FaHeartbeat className="circle-icon" />
              </figure>
            </div>

            <div className="work-data">
              <p className="work-title">Health & Wellbeing</p>
              <p className="work-subtitle">
                Promoting physical and mental wellbeing through health awareness programs.
              </p>
              <button className="card-btn">
                Learn More <IoMdArrowRoundForward className="primary-icon" />
              </button>
            </div>
          </div>

           <div className="card-image">
            <figure className="work-image">
              <img src={work_4} alt="" />
            </figure>
            <div className="icon-outline">
              <figure className="circle-icons">
                <FaUsers className="circle-icon" />
              </figure>
            </div>

            <div className="work-data">
              <p className="work-title">Community Empowerment</p>
              <p className="work-subtitle">
                Building strong communities by empowering women to lead and inspire.
              </p>
              <button className="card-btn">
                Learn More <IoMdArrowRoundForward className="primary-icon" />
              </button>
            </div>
          </div>

           <div className="card-image">
            <figure className="work-image">
              <img src={work_5} alt="" />
            </figure>
            <div className="icon-outline">
              <figure className="circle-icons">
                <FaLeaf className="circle-icon" />
              </figure>
            </div>

            <div className="work-data">
              <p className="work-title">Sustainability Initiatives</p>
              <p className="work-subtitle">
                Working towards a greener future with environmental and sustainability programs.
              </p>
              <button className="card-btn">
                Learn More <IoMdArrowRoundForward className="primary-icon" />
              </button>
            </div>
          </div>

           <div className="card-image">
            <figure className="work-image">
              <img src={work_6} alt="" />
            </figure>
            <div className="icon-outline">
              <figure className="circle-icons">
                <AiFillSound className="circle-icon" />
              </figure>
            </div>

            <div className="work-data">
              <p className="work-title">Leadership Programs</p>
              <p className="work-subtitle">
                Nurturing leadership qualities in girls to become future changemakers.
              </p>
              <button className="card-btn">
                Learn More <IoMdArrowRoundForward className="primary-icon" />
              </button>
            </div>
          </div>

        </article>

        <article className="card-2">
          
          <div className="work-card1">
            <figure className="circle-icons">
              <FaUsers className="circle-icon" />
            </figure>
            <div className="primary-card">
              <p>500+</p>
              <h5>Girls Educated</h5>
              <h6>Through our programs</h6>
            </div>
          </div>


          {/* <div className="vertical-divider"></div> */}

          <div className="work-card2">
            <figure className="circle-icons">
              <RiGraduationCapFill className="circle-icon" />
            </figure>
            <div className="primary-card">
              <p>100+</p>
              <h5>Workshops Conducted</h5>
              <h6>Across Communities</h6>
            </div>
          </div>

          {/* <div className="vertical-divider"></div> */}

          <div className="work-card3">
            <figure className="circle-icons">
              <MdVolunteerActivism className="circle-icon" />
            </figure>
            <div className="primary-card">
              <p>50+</p>
              <h5>Communities Impacted</h5>
              <h6>Making a real difference</h6>
            </div>
          </div>

          {/* <div className="vertical-divider"></div> */}

          <div className="work-card4">
            <figure className="circle-icons">
              <FaUserAlt className="circle-icon" />
            </figure>
            <div className="primary-card">
              <p>100+</p>
              <h5>Volunteers Engaged</h5>
              <h6>Driven by passion</h6>
            </div>
          </div>
        </article>

        <article className="card-3">
          <div className="card-3-left">
            <figure className="circle-icons">
              <MdVolunteerActivism className="circle-icon" />
            </figure>
            <div className="card-3-datas">
              <p className="card-3-title">Be a Part of the Change</p>
              <p className="card-3-subtitle">
                Together, We can empower more girls and build a stronger future.
              </p>
            </div>
          </div>
          <button className="primary-btn">
            Get Involved <IoMdArrowRoundForward className="primary-icon" />
          </button>
        </article>
      </section>
    </section>
  );
};

export default Work;
