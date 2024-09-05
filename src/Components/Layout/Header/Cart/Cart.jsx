import { PiShoppingCartLight } from "react-icons/pi";
import { CartIconContainer, NavbarItemsStyles, NavbarStyles } from "../HeaderStyles";
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
    <NavbarStyles onClick={() => dispatch(toggleHiddenCart())}>
      <CartIconContainer whileTap={{scale: 0.95}}>
        <PiShoppingCartLight />
        <span> {totalCartItems} </span>

      </CartIconContainer>
    </NavbarStyles>
  );
};

export default Cart