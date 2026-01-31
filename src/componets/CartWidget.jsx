import { LuShoppingCart } from "react-icons/lu";

const CartWidget = () => {
  return (
    <div className="position-relative">
      <LuShoppingCart size={24} color="white" />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        0
      </span>
    </div>
  );
};

export default CartWidget;