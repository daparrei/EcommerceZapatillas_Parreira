import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-code">404</h1>
      <h2 className="notfound-title">Página no encontrada</h2>
      <p className="notfound-text">
        La ruta a la que intentaste acceder no existe.
      </p>

      <Link to="/" className="notfound-link">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;