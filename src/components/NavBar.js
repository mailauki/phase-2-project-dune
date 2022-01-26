import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/books">Books</NavLink>
    </nav>
  )
}

export default NavBar