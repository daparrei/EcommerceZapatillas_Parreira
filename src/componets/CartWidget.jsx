import { LuShoppingCart } from "react-icons/lu";
import { useContext } from "react";
import { CarContext } from "../context/CarContext.jsx";
import { Link } from "react-router-dom";


const CartWidget = () => {

  const { quantityInCart } = useContext(CarContext);


  return (
    <Link to="/cart" className="position-relative">
      <LuShoppingCart size={24} color="white" />
      <p className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {quantityInCart()}
      </p>
    </Link>
  );
}; 

export default CartWidget;