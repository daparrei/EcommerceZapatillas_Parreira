import "./SizeSelector.css";

const SizeSelector = ({ stockPorTalle, selectedSize, onSelect }) => {
  if (!stockPorTalle) return null;

  return (
    <div className="size-selector">
      <h4 className="size-title">Seleccionar talle</h4>

      <div className="size-buttons">
        {Object.entries(stockPorTalle).map(([talle, stock]) => (
          <button
            key={talle}
            disabled={stock === 0}
            onClick={() => onSelect(talle)}
            className={`size-button 
              ${selectedSize === talle ? "selected" : ""} 
              ${stock === 0 ? "disabled" : ""}`}
          >
            {talle}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
