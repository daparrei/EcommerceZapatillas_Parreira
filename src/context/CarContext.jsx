import { createContext , useState} from "react";

const CarContext = createContext(null);

const CarProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

const addToCart = (newProduct) => {

  const existingProductIndex = cart.findIndex(
    item => item.id === newProduct.id && item.talle === newProduct.talle
  );

  const stockDisponible = newProduct.stockPorTalle[newProduct.talle];

  if (existingProductIndex !== -1) {

    const updatedCart = [...cart];

    const cantidadActual = updatedCart[existingProductIndex].cantidad;
    const nuevaCantidad = cantidadActual + newProduct.cantidad;

    if (nuevaCantidad > stockDisponible) {
      alert(`Solo hay ${stockDisponible} unidades disponibles para este talle`);
      return;
    }

    updatedCart[existingProductIndex].cantidad = nuevaCantidad;
    setCart(updatedCart);

  } else {

    if (newProduct.cantidad > stockDisponible) {
      alert(`Solo hay ${stockDisponible} unidades disponibles`);
      return;
    }

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

    const removeFromCart = (id,talle) => {
        const updatedCart = cart.filter(item => !(item.id === id && item.talle === talle));
        setCart(updatedCart);
    };

    
    return (
    <CarContext.Provider value={{cart, addToCart, quantityInCart, totalPrice, clearCart, removeFromCart}}>
        {children}
    </CarContext.Provider>
    )
  };


export { CarContext, CarProvider } ;

