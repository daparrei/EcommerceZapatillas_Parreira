import './ItemCard.css';
import { Link } from "react-router-dom";

const ItemCard = ({ product }) => {


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

      <Link
        to={`/product/${product.id}`}
        className="galeria-categoria-zapitilla-boton"
        >
        Ver detalles
      </Link>
    </div>      
  );
};

export default ItemCard;
