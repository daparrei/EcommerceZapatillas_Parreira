import db from "../db/db.js";
import { collection, getDocs, doc, getDoc, query, where,addDoc } from "firebase/firestore";  



const getProducts = async () => {
    try {
        const collectionRef = collection(db, "productos");
        const snapshot = await getDocs(collectionRef);
        const products = [];
        snapshot.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data() });
        });
        return products;
        console.log("Productos obtenidos de la base datos:", products);
       
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

// Función para obtener los productos por categoría usando una consulta de Firestore


const getProductsByCategory = async (category) => { 
    try {
        const collectionRef = collection(db, "productos");
        const q = query(collectionRef, where("categoria", "==", category)); 
        const snapshot = await getDocs(q);
        const products = [];
        snapshot.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data() });
        });
        return products;
    } catch (error) {
        console.error("Error fetching products by category:", error);
        throw error;
    }
};

// Función para obtener categorías únicas


const getUniqueCategories = async () => {
    try {
        const collectionRef = collection(db, "productos");
        const snapshot = await getDocs(collectionRef);
        const categoriesSet = new Set();    
        snapshot.forEach((doc) => {
            const data = doc.data();
            if (data.categoria) {
                categoriesSet.add(data.categoria);
            }   
        });
        return Array.from(categoriesSet);
    }
    catch (error) {
        console.error("Error fetching unique categories:", error);
        throw error;
    }
};  



const getProductsById = async (id) => {
    try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        }
        return null;
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        throw error;
    }   
};

const addProduct = async (newProduct) => {
    try {
        const collectionRef = collection(db, "productos");
        const docRef = await addDoc(collectionRef, newProduct);
        return { id: docRef.id, ...newProduct };
    } catch (error) {
        console.error("Error adding product:", error);
        throw error;
    }
};

const deleteProduct = async (id) => {
    try {
        const docRef = doc(db, "productos", id);
        await deleteDoc(docRef);
        return id;
    } catch (error) {
        console.error("Error deleting product:", error);
        throw error;
    }
};  

const updateProduct = async (id, updatedProduct) => {
    try {
        const docRef = doc(db, "productos", id);    
        await updateDoc(docRef, updatedProduct);
        return { id, ...updatedProduct };
    } catch (error) {
        console.error("Error updating product:", error);
        throw error;
    }   
};

const updateProductStockPorTalle = async (id, talle, cantidad) => {
    try {
        const docRef = doc(db, "productos", id);    
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const productData = docSnap.data();
            const stockPorTalle = productData.stockPorTalle || {};
            const currentStock = stockPorTalle[talle] || 0;
            const newStock = currentStock - cantidad;
            if (newStock < 0) {
                throw new Error(`No hay suficiente stock para el talle ${talle}`);
            }
            stockPorTalle[talle] = newStock;
            await updateDoc(docRef, { stockPorTalle });
            return { id, ...productData, stockPorTalle };
        }   
        throw new Error("Producto no encontrado");
    } catch (error) {
        console.error("Error updating product stock:", error);
        throw error;
    }   
};

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

export { getProducts,getProductsById, addProduct, deleteProduct, updateProduct, updateProductStockPorTalle, getProductsByCategory, getUniqueCategories, addOrder };