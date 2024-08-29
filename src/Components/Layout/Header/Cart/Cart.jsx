import { PiShoppingCartLight } from "react-icons/pi";
import { NavbarItemsStyles } from "../HeaderStyles";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenCart } from "../../../../redux/cartSlice";


const Cart = () => {

  const dispatch = useDispatch()
  const totalCartItems = useSelector((state) => state.cart.cartItems).reduce(
    (acc, item) => {
   return (acc += item.quantity);
    }, 
    
    0);
  return (
    <NavbarItemsStyles onClick={() => dispatch(toggleHiddenCart())}>
        <PiShoppingCartLight />
        <span> {totalCartItems} </span>
    </NavbarItemsStyles>
  );
};

export default Cart