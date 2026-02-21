import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) setCount(count + 1);
  };

  const restar = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="itemcount-container">
      
      <div className="itemcount-controls">
        <button 
          onClick={restar} 
          className="itemcount-btn"
          disabled={count === 1}
        >
          -
        </button>

        <span className="itemcount-number">{count}</span>

        <button 
          onClick={sumar} 
          className="itemcount-btn"
          disabled={count === stock}
        >
          +
        </button>
      </div>

      <button
        className="itemcount-add-btn"
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </button>

    </div>
  );
};

export default ItemCount;