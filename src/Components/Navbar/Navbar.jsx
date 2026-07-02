import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {showMenu && <div className="overlay" onClick={()=>setShowMenu(false)}></div>}
      <section className="navbar">
        <article className="left-navbar">
          <figure className="navbar-image">
            <img src={logo} alt="" />
          </figure>
          <div className="navbar-heading">
            <h6>She Can Foundation</h6>
            <p>Empowering Girls</p>
          </div>
        </article>

        <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
          <HiMenu />
        </div>

        <article className={showMenu ? "right-navbar active" : "right-navbar"}>
          <ul>
            <div className="close-icon" onClick={() => setShowMenu(false)}>
              <IoClose />
            </div>

            <li><NavLink to="/" className={({isActive})=>(isActive?"active":"" )} onClick={()=>setShowMenu(false)}> Home</NavLink></li>
            <li><NavLink to="/about" onClick={()=>setShowMenu(false)}> About Us</NavLink> </li>
            <li><NavLink to="/work" onClick={()=>setShowMenu(false)}>Our Work</NavLink> </li>
            <li><NavLink to="/contact" onClick={()=>setShowMenu(false)}>Contact</NavLink></li>
          </ul>
        </article>
      </section>
    </>
  );
};

export default Navbar;
