import { useState } from 'react'
import { useContext } from 'react';
import { CarContext } from '../context/CarContext';
import { addOrder } from '../data/db-productos';




const CheckOut = () => {
    const [dataFrom, setDataFrom] = useState({  
        fullname: "",
        phonenumber: "",
        email: "",  
        address: ""
    });

    const { cart, totalPrice } = useContext(CarContext);    


    const handleChange = (event) => {   
        setDataFrom({
            ...dataFrom,
            [event.target.name]: event.target.value
        })
    } ;  



    console.log(dataFrom)

    const [OrderId, setOrderId] = useState(null);

    

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí podrías enviar los datos del formulario a un servidor o procesarlos de alguna manera
        const order = {
            ...dataFrom,
            proudctos: [... cart], // Aquí podrías agregar los productos del carrito    
            total: totalPrice(), // Aquí podrías calcular el total de la compra
            timestamp: new Date()
        };
        addOrder(order)
            .then((response) => {
                console.log("Order added successfully:", response);
                // Aquí podrías mostrar un mensaje de éxito al usuario o redirigirlo a otra página
                setOrderId(response.id); // Guardamos el ID de la orden en el estado
            })
            .catch((error) => {
                console.error("Error adding order:", error);
                // Aquí podrías mostrar un mensaje de error al usuario
            });
    }



 return (
    <div>
        <h1>CheckOut</h1>
        { OrderId ?
             (<p>Tu orden ha sido creada con el ID: {OrderId}</p>) :    
         
             (
        <div>
            <p>Formulario de datos del cliente:</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullname">Nombre completo:</label>
                <input 
                    type="text" 
                    id="fullname" 
                    name="fullname" 
                    value={dataFrom.fullname} 
            
                    onChange={handleChange}
                />
                <label htmlFor="phonenumber">Número de teléfono:</label>
                <input 
                    type="number" 
                    id="phonenumber" 
                    name="phonenumber" 
                    value={dataFrom.phonenumber} 
            
                    onChange={handleChange}
                />
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={dataFrom.email} 
            
                    onChange={handleChange}
                />
                <label htmlFor="address">Dirección:</label>
                <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    value={dataFrom.address} 
            
                    onChange={handleChange}
                />
                <button type="submit">Termina mi compra</button>
            </form>
        </div>
             )
            }
    </div>      
 )
 
}


export default CheckOut

