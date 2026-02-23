import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../data/db-productos.js";
import ItemDetail from "./ItemDetail.jsx";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getProductsById(id)
      .then((data) => setProduct(data))
      .catch(() => console.log("No se pudo cargar el producto"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="itemdetail-loading">Cargando producto...</p>;
  }

  if (!product) {
    return <p className="itemdetail-error">No existe el producto</p>;
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;

