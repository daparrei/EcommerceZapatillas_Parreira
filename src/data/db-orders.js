import db from "../db/db.js";
import { collection, getDocs, doc, getDoc, query, where,addDoc } from "firebase/firestore";  

// Funcion para subir la ORDER a la base de datos, se puede crear una nueva colección llamada "orders" y agregar un nuevo documento con los detalles de la orden, incluyendo los productos comprados, el total de la compra y los datos del cliente.
const addOrder = async (orderData) => {
    try {
        const collectionRef = collection(db, "orders"); 
        const docRef = await addDoc(collectionRef, orderData);
        return { id: docRef.id, ...orderData };
    } catch (error) {
        console.error("Error adding order:", error);
        throw error;    
    }
}

// Función para obtener una orden por su ID, se puede usar la función getDoc de Firestore para obtener el documento de la orden por su ID y devolver los detalles de la orden.
const getOrders = async (orderId) => {
    try {
        const docRef = doc(db, "orders", orderId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };   
        } else {
            throw new Error("Order not found");
        }   
    } catch (error) {
        console.error("Error getting order:", error);
        throw error;
    }
}

export { addOrder, getOrders };