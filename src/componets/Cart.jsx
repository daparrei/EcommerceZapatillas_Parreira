import { useContext } from "react";
import { CarContext } from "../context/CarContext.jsx";
import { Link } from "react-router-dom";
import "./Cart.css";



const Cart = () => {
    
    const { cart, totalPrice, clearCart, removeFromCart } = useContext(CarContext);

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <div>
                    <p>El carrito está vacío.</p>
                    <Link to="/" className="link-button">Volver al inicio</Link> 
                </div>
            )
               : (   
                <div style={{ maxWidth: 800, margin: "0 auto" }}>
                    {cart.map((item) => (      
                        <div key={item.id} style={
                            { marginBottom: "20px",
                             display: "flex",
                             alignItems: "center" ,
                             justifyContent: "space-between",
                             border: "1px solid #ccc",
                              padding: "10px", 
                              borderRadius: "5px" }}>
                            <img src={`/${item.imagen}`} alt={item.nombre} style={{ width: "50px" }} />
                            <p>{item.nombre} </p>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Talle: {item.talle}</p>
                            <p>Precio U: ${item.precio}</p>
                            <p>Precio Total: ${item.precio * item.cantidad}</p>
                            <button onClick={() => removeFromCart(item.id,item.talle)} style={{ marginLeft: "10px" }}>
                                Eliminar
                            </button>
                        </div>
                    ))}
                        <p style={{ textAlign: "right", fontWeight: "bold" }}>
                            Total Compra: ${totalPrice()}
                        </p>
                        <button onClick={clearCart} style={{ marginTop: "10px" }}>
                            Vaciar Carrito
                        </button>
                </div>
            )}  
        </div>
    );
}

export default Cart;