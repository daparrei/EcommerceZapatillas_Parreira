import { useContext } from "react";
import { CarContext } from "../context/CarContext.jsx";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart.jsx";
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
                        <ItemCart key={`${item.id}-${item.talle}`} item={item} />
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