import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount.jsx";
import SizeSelector from "./SizeSelector.jsx";
import { CarContext } from "../context/CarContext.jsx";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [added, setAdded] = useState(false);
  const { addToCart } = useContext(CarContext);

  useEffect(() => {
    setAdded(false);
  }, [selectedSize]);

  const handleAddToCart = (cantidad) => {
    if (!selectedSize) {
      alert("Seleccioná un talle primero");
      return;
    }

    const itemToAdd = {
      ...product,
      talle: selectedSize,
      cantidad,
    };

    addToCart(itemToAdd);
    setAdded(true);
  };

  return (
    <div className="itemdetail-container">
      <div className="itemdetail-grid">

        {/* Columna izquierda - Imagen */}
        <div className="itemdetail-image-wrapper">
          {product.imagen && (
            <img
              src={`/${product.imagen}`}
              alt={product.nombre}
              className="itemdetail-image"
            />
          )}
        </div>

        {/* Columna derecha - Info */}
        <div className="itemdetail-info">

          <h2 className="itemdetail-title">{product.nombre}</h2>

          <p className="itemdetail-price">
            $ {product.precio.toLocaleString("es-AR")}
          </p>

          <p className="itemdetail-description">
            {product.descripcion}
          </p>

          <SizeSelector
            stockPorTalle={product.stockPorTalle}
            selectedSize={selectedSize}
            onSelect={setSelectedSize}
          />

          {selectedSize && !added && (
            <ItemCount
              key={selectedSize}
              stock={product.stockPorTalle[selectedSize]}
              initial={1}
              onAdd={handleAddToCart}
            />
          )}

          {selectedSize && added && (
            <Link to="/cart" className="primary-button">
              Ir al carrito
            </Link>
          )}

        </div>
      </div>
    </div>
  );
};

export default ItemDetail;