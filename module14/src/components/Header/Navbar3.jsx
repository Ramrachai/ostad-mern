import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";
import { FaBars, FaXmark } from "react-icons/fa6";
import logoImg from "../../assets/common/DesignAGENCY.png"


function NavBar() {
    const [click, setClick] = useState(false);
    const location = useLocation();

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className={`navbar ${location.pathname === "/" ? "bg-primary" : "bg-gray"}`}>
                <div className="nav-container">
                    <NavLink to="/" className="nav-logo">
                        <img src={logoImg} alt="logo" />
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-links">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/team" className="nav-links">Team</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/services" className="nav-links">Service</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className="nav-links">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/testimonial" className="nav-links">Testimonials</NavLink>
                        </li>
                        <li className="nav-item">
                            <button className="outlined">Login</button>
                        </li>
                        <li className="nav-item">
                            <button>Register</button>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {click ? (
                            <span className="icon">
                                <FaXmark />
                            </span>
                        ) : (
                            <span className="icon">
                                <FaBars />
                            </span>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;