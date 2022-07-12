import * as React from "react"

const Navbar = () => (
<nav className="navbar">
  <div className="logo">Border Collie Toluca</div>
  <ul className="nav-links">
    <div className="menu">
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Acerca de...</a></li>
    <li><a href="#">Ejemplares</a></li>
    <li><a href="#">Cachorros</a></li>
    <li><a href="#">Contacto</a></li>
    </div>
  </ul>
</nav>
);

export default Navbar;