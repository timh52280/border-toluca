import * as React from "react"

const Navbar = () => (
<>
<label>
<input type="checkbox" />
<span class="menu-mobile"><span class="hamburger"></span></span>
<ul>
  <li><a href="#">Inicio</a></li>
  <li><a href="#">Nosotros</a></li>
  <li><a href="#">Contacto</a></li>
</ul>
</label>
<nav className="navbar">
  <ul className="nav-links">
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Nosotros</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</nav>
</>
);

export default Navbar;