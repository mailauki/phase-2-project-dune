import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/books">Books</NavLink>
      <NavLink to="/reviews">Reviews</NavLink>
    </nav>
  )
}

export default NavBar