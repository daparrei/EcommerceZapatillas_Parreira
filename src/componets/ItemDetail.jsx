import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductsById } from "../data/db-productos.js";
import ItemCount from "./ItemCount.jsx";
import SizeSelector from "./SizeSelector.jsx";
import { CarContext } from "../context/CarContext.jsx";
import "./ItemDetail.css";

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(null);
  const [added, setAdded] = useState(false);
  const { addToCart } = useContext(CarContext);

  useEffect(() => {
    setLoading(true);

    getProductsById(id)
      .then((data) => setProduct(data))
      .catch(() => console.log("No se pudo cargar el producto"))
      .finally(() => setLoading(false));
  }, [id]);

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

  if (loading) return <p className="itemdetail-loading">Cargando producto...</p>;
  if (!product) return <p className="itemdetail-error">No existe el producto</p>;

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
            ${product.precio}
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