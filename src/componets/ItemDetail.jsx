import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../data/db-productos.js";
import ItemCount from "./ItemCount.jsx";
import { useContext } from "react";
import SizeSelector from "./SizeSelector.jsx";
import { CarContext } from "../context/CarContext.jsx";
import { Link } from "react-router-dom";




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
      .then((data) => {
        setProduct(data);
      })
      .catch(() => {
        console.log ("No se pudo cargar el producto");
      })
      .finally(() => {
        setLoading(false);
      });
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
      cantidad
    };

    addToCart(itemToAdd);
    setAdded(true);
  };

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>No existe el producto</p>;

  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }}>
      <h2>{product.nombre}</h2>
      <p><strong>Precio:</strong> ${product.precio}</p>
      <p>{product.descripcion}</p>

      {product.imagen && (
        <img
          src={`/${product.imagen}`}
          alt={product.nombre}
          style={{ width: "50%" }}
        />
      )}


     {/* Selector de talle */}
      <SizeSelector
        stockPorTalle={product.stockPorTalle}
        selectedSize={selectedSize}
        onSelect={setSelectedSize}
      />

      {/* Contador solo si hay talle seleccionado */}
      {selectedSize && !added && (
        <ItemCount
          key={selectedSize}
          stock={product.stockPorTalle[selectedSize]}
          initial={1}
          onAdd={handleAddToCart}
        />
      )}

      {selectedSize && added && (
        <Link
          to="/cart"
          style={{
            display: "inline-block",
            marginTop: "15px",
            padding: "10px 20px",
            backgroundColor: "black",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px"
          }}
        >
          Ir al carrito
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;
