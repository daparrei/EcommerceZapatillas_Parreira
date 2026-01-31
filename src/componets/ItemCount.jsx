import { useState } from "react";

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) setCount(count + 1);
  };

  const restar = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div style={{ marginTop: 20 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <button onClick={restar}>-</button>
        <span>{count}</span>
        <button onClick={sumar}>+</button>
      </div>

      <button
        style={{ marginTop: 10 }}
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
