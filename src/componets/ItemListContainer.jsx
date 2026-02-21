import { getProducts,getProductsByCategory } from "../data/db-productos.js";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";  
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {category} = useParams();

  
  useEffect(() => {

  //Treamos los producto por categorias que el parametro de la url o todos los productos si no hay categoria

   if (category) {
    getProductsByCategory(category)
      .then((response) => {
        setProducts(response);
      })
      .catch((error)=> {
        console.log(error);
      })
      .finally(()=> {
        setLoading(false)
        
        }
      );
      return;
   }
   else {
    getProducts()
      .then((response) => {
        setProducts(response);
      }

      )
      .catch((error)=> {
        console.log(error);
      })
      .finally(()=> {
        setLoading(false)
        
        }
      );
      return;
   }       
  }, [category]);

  return (
    <div className="container-itemlist">
      <h2>{greeting}</h2>
      { loading == true ? <p>Cargando productos...</p> : <ItemList products={products} />}
      </div>
  );
};

export default ItemListContainer;
