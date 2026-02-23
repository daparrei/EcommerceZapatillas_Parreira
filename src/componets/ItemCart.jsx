import { useContext } from "react";
import { CarContext } from "../context/CarContext.jsx";
import "./ItemCart.css";


const ItemCart = ({ item }) => {

    const { removeFromCart } = useContext(CarContext);
        
return (

     <div key={`${item.id}-${item.talle}`} className="cart-item">
                            
            <img 
                src={`/${item.imagen}`} 
                alt={item.nombre} 
                className="cart-image"
            />

            <p>{item.nombre}</p>
            <p>Cantidad: {item.cantidad}</p>
            <p>Talle: {item.talle}</p>
            <p>Precio U: ${item.precio}</p>
            <p>Precio Total: ${item.precio * item.cantidad}</p>
            <button 
                onClick={() => removeFromCart(item.id, item.talle)}
                className="cart-remove-btn"
            >
                Eliminar
            </button> 
       </div>

);

};

export default ItemCart;