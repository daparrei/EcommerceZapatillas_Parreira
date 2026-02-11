import './ItemCard.css';
import { Link } from "react-router-dom";

const ItemCard = ({ product }) => {

  const handleComprar = () => {
    localStorage.setItem("productoSeleccionado", product.id);
  };

  return (
    <div className="galeria-categoria-zapitilla">
      <Link to={`/product/${product.id}`}>
        <img src={`/${product.imagen}`} alt={product.alt} />
      </Link>

      <p className="galeria-categoria-zapitilla-nombre">
        Zapatilla {product.nombre}
      </p>

      <p className="galeria-categoria-zapitilla-precio">
        $ {product.precio.toLocaleString("es-AR")}
      </p>

      <p className="galeria-categoria-zapitilla-descripcion">
        {product.descripcion}
      </p>

      <Link to={`/product/${product.id}`}>
      <button
        className="galeria-categoria-zapitilla-boton"
        onClick={handleComprar}
      >
       COMPRAR
      </button>
      </Link>
      </div>      
  );
};

export default ItemCard;
