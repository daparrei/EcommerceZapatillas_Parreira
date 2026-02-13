import { useContext } from "react";
import { CarContext } from "../context/CarContext.jsx";


const Cart = () => {
    
    const { cart, totalPrice, clearCart, removeFromCart } = useContext(CarContext);

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (   
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
                            <p>Precio U: ${item.precio}</p>
                            <p>Precio Total: ${item.precio * item.cantidad}</p>
                            <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: "10px" }}>
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