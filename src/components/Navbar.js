import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

//styles
import "./Navbar.css";

export default function Navbar() {
  const { mode } = useTheme();
  return (
    <div>
      <nav className={`navbar ${mode}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>
    </div>
  );
}
