import { useContext } from "react";
import { CarContext } from "../context/CarContext.jsx";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
    
    const { cart, totalPrice, clearCart, removeFromCart } = useContext(CarContext);

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>

            {cart.length === 0 ? (
                <div className="cart-empty">
                    <p>El carrito está vacío.</p>
                    <Link to="/" className="link-button">
                        Volver al inicio
                    </Link> 
                </div>
            ) : (
                <div className="cart-content">
                    
                    {cart.map((item) => (
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
                    ))}

                    <p className="cart-total">
                        Total Compra: ${totalPrice()}
                    </p>

                    <div className="cart-actions">
                        <button onClick={clearCart} className="cart-clear-btn">
                            Vaciar Carrito
                        </button>

                        <Link to="/checkout" className="link-button">
                            Finalizar Compra
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;