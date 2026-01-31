import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>La ruta a la que intentaste acceder no existe.</p>

      <Link to="/" style={{ marginTop: "20px", display: "inline-block" }}>
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
