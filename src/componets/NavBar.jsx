import CartWidget from "./CartWidget";
import { Link,NavLink } from "react-router-dom";
import './NavBar.css';



const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        {/* Marca */}
       <Link className="navbar-brand" to="/">
          ZAPATILLAS QUILMES
        </Link>
        
        {/* Botón mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
               <NavLink className="nav-link" to="/">Inicio</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">Nosotros</NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/categoria/Hombre">Hombre</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/categoria/Mujer">Mujer</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/categoria/Niños">Niños</NavLink>
            </li>
          </ul>

          {/* Carrito de compras */}
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
