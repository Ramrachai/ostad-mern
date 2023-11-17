import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import logoImg from "../../assets/common/DesignAGENCY.png"
import styled from "@emotion/styled";


function NavBar() {
    const [click, setClick] = useState(false);
    const location = useLocation();

    const handleClick = () => setClick(!click);

    return (
        <NavContainer>
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
        </NavContainer>
    );
}

export default NavBar;


const NavContainer = styled.div`
.navbar {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 20;
  }

  .navbar.bg-primary{
    background-color: var(--secondary);
  }

  .navbar.bg-gray{
    background-color: var(--gray);
  }

  .nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 60px;
    margin-top: 30px;
    max-width: 1500px;
    position: relative;
  }
  
  .nav-logo {
    color: var(--primary) ;
    cursor: pointer;
    flex-grow: 1;
  }
  
  .nav-logo .icon {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    margin-left: 16px;
  }
  
  .nav-menu {
    display: flex;
    list-style: none;
    text-align: center;
  }
  
  .nav-links {
    color: var(--dark);
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    border-bottom: 3px solid transparent;
  }
  
  .nav-item {
    line-height: 40px;
    margin-right: 1rem;
  }
  
  .nav-item:not(:has(button)):after {
    content: "";
    display: block;
    height: 3px;
    width: 0;
    background: transparent;
    transition: width 0.7s ease, background-color 0.5s ease;
  }
  
  .nav-item:not(:has(button)):hover:after {
    width: 100%;
    background: var(--primary);
  }

  .nav-item button {
    margin-bottom: 14px;
  }
  
  .nav-item .active {
    color: var(--primary);
  }
  
  .nav-icon {
    display: none;
    color: var(--dark);
  }
  
  .nav-icon .icon {
    display: inline-block;
    width: 2rem;
    height: 2rem;
  }
  
  @media screen and (max-width: 960px) {
    .nav-container{
      width: 100%;
      padding: 0 1rem;
    }
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      border-top: 1px solid #fff;
      background-color: var(--gray);
      position: absolute;
      top: 60px;
      left: -110%;
      opacity: 1;
      transition: all 0.2s ease;
      padding: 1rem 0;
    }
  
    .nav-menu.active {
      left: 0px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
    .nav-item .active {
      color: var(--primary);
      border: none;
    }
    .nav-links {
      padding: .6rem;
      width: 100%;
      display: table;
    }
 
    .nav-icon {
      display: block;
      position: absolute;
      top: 50%;
      right: 2%;
      transform: translate(0%, -50%);
      font-size: 1.4rem;
      cursor: pointer;
      color: var(--dark);
      transition: all 0.3s ease;
      padding: .5rem 1rem;
    }
    .nav-icon:hover{
      scale: 0.9;
    }
  }

`