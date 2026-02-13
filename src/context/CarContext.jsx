import { createContext , useState} from "react";

const CarContext = createContext(null);

const CarProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (newProduct) => {
        //Evaluar si el producto ya existe en el carrito
        const existingProductIndex = cart.findIndex(item => item.id === newProduct.id);
        if (existingProductIndex !== -1) {
            // Si el producto ya existe, incrementar la cantidad
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].cantidad += newProduct.cantidad;
            setCart(updatedCart);
        } else {
            // Si no existe, agregar el nuevo producto
            setCart([...cart, newProduct]);
        }
   };
    
   const quantityInCart = () => {
     const quantity = cart.reduce((acc, item) => acc + item.cantidad, 0);
      return quantity;
    };

    const totalPrice = () => {
        const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
        return total;
    }

    const clearCart = () => {
        setCart([]);
    }

    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    };

    
    return (
    <CarContext.Provider value={{cart, addToCart, quantityInCart, totalPrice, clearCart, removeFromCart}}>
        {children}
    </CarContext.Provider>
    )
  };


export { CarContext, CarProvider } ;

