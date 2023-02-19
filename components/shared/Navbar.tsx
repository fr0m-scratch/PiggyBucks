import { NavLink } from "react-router-dom";


export function NavBar() {
  return (
    <nav className="navbar-container">
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/">About</NavLink>
      <NavLink to="/">Contact</NavLink>
    </nav>
  );
}