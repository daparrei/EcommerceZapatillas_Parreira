import ItemCard from "./ItemCard";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="galeria">
      {products.map(product => (
        <ItemCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
