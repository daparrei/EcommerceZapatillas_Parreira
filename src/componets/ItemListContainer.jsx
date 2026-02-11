import { getProducts,getProductsById } from "../data/api-productos.js";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";  
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {category} = useParams();

  
  useEffect(() => {

    getProducts()
       .then((response) => {
        if (!category) {
        setProducts(response);
      } else {
                const filteredProducts = response.filter(product => product.categoria === category);
                setProducts(filteredProducts);
              
              } 
      })
      .catch((error)=> {
        console.log(error);
      })
      .finally(()=> {
        setLoading(false)
       
      });
       
  }, [category]);

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
      { loading == true ? <p>Cargando productos...</p> : <ItemList products={products} />}
      </div>
  );
};

export default ItemListContainer;
