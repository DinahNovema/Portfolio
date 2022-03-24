import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
//styles
import "./Navbar.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { mode } = useTheme();
  return (
    <div>
      <nav className={`navbar ${mode}`}>
        <div className="menu" id={showMenu ? "hidden" : ""}>
          <NavLink
            to="/"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Projects
          </NavLink>
        </div>
        <button
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className={`hamburger-menu ${mode}`}
        >
          <FaBars size={25} color={"#D9A407"} />
        </button>
      </nav>
    </div>
  );
}
