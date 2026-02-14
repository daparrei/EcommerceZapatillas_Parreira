import { useEffect, useState } from "react";
import CartWidget from "./CartWidget.jsx";
import { Link, NavLink } from "react-router-dom";
import { getUniqueCategories } from "../data/db-productos.js";
import "./NavBar.css";

const NavBar = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getUniqueCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          ZAPATILLAS QUILMES
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">Inicio</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">Nosotros</NavLink>
            </li>

            {/* Categorías dinámicas */}
            {categories.map((categoria) => (
              <li className="nav-item" key={categoria}>
                <NavLink className="nav-link" to={`/categoria/${categoria}`}>
                  {categoria}
                </NavLink>
              </li>
            ))}

          </ul>

          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
