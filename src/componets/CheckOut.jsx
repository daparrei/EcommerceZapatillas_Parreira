import { useState } from 'react'
import { useContext } from 'react';
import { CarContext } from '../context/CarContext';
import { addOrder } from '../data/db-orders';
import "./CheckOut.css";


const CheckOut = () => {
    const [dataForm, setDataForm] = useState({  
        fullname: "",
        phonenumber: "",
        email: "",  
        address: ""
    });

    const { cart, totalPrice ,clearCart} = useContext(CarContext);    


    const handleChange = (event) => {   
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value
        })
    } ;  


    const [orderId, setOrderId] = useState(null);

    

    const handleSubmit = (event) => {
        event.preventDefault();
        const order = {
            ...dataForm,
            productos: [... cart], 
            total: totalPrice(), 
            timestamp: new Date(),
            status: "pending"
        };
        addOrder(order)
            .then((response) => {
                console.log("Order added successfully:", response);
                setOrderId(response.id); // Guardamos el ID de la orden en el estado
                clearCart(); // Limpiamos el carrito después de finalizar la compra
            })
            .catch((error) => {
                console.error("Error adding order:", error);
            });
    }



return (
    <div className="checkout-container">
        <h1 className="checkout-title">CheckOut</h1>

        {orderId ? (
            <div className="checkout-success">
                <h2>¡Compra realizada con éxito! 🎉</h2>
                <p>Tu orden ha sido creada con el ID:</p>
                <strong className="order-id">{orderId}</strong>

                <div className="checkout-summary">
                    <p><strong>Cliente:</strong> {dataForm.fullname}</p>
                    <p><strong>Email:</strong> {dataForm.email}</p>
                    <p><strong>Dirección:</strong> {dataForm.address}</p>
                </div>
            </div>
        ) : (
            <div className="checkout-content">
                <p className="checkout-subtitle">
                    Formulario de datos del cliente:
                </p>

                <form onSubmit={handleSubmit} className="checkout-form">

                    <div className="form-group">
                        <label htmlFor="fullname">Nombre completo</label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            value={dataForm.fullname}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phonenumber">Número de teléfono</label>
                        <input
                            type="tel"
                            id="phonenumber"
                            name="phonenumber"
                            value={dataForm.phonenumber}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={dataForm.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Dirección</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={dataForm.address}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="checkout-button"
                        disabled={cart.length === 0}
                    >
                        Terminar mi compra
                    </button>
                </form>
            </div>
        )}
    </div>
);
 
}


export default CheckOut

