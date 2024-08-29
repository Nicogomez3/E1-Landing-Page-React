
import { useNavigate } from 'react-router-dom'
import { OverlayStyles, ModalCartStyles, CloseButtonContainerStyles, CloseButtonStyles, CartItemsContainerStyles, TitlesStyles, ProductsContainerStyles, InfoContainerStyles, InfoPriceStyles, TotalStyles, SentStyles, TotalPay, ButtonCart } from './ModalCartStyles'
import { AnimatePresence } from 'framer-motion'
import { MdClose } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import ModalCartCard from './ModalCartCard';
import { useDispatch, useSelector } from 'react-redux';
// import Cart from '../Cart/Cart';
import { clearCart, toggleHiddenCart } from '../../../../redux/cartSlice';
import Increase from '../../../../UI/Increase/Increase';

export const ModalCart = () => {
const navigate = useNavigate()

const {cartItems, shippingCost} = useSelector((state) => state.cart)
console.log(cartItems)

const hiddenCart = useSelector(state => state.cart.hidden);

const dispatch = useDispatch()


const totalPrice = cartItems.reduce((acc, item) => {
    return acc += item.prize * item.quantity;
}, 0)

// const cartItem = Cart || [];
return (
    <>
         {!hiddenCart && ( 
            <OverlayStyles 
                onClick={() => dispatch(toggleHiddenCart()) } 
                isHidden={hiddenCart} 
            />
        )}
        <AnimatePresence>
            {!hiddenCart && (
                <ModalCartStyles 
                    initial={{ translateX: 600 }}
                    animate={{ translateX: 0 }}
                    exit={{ translateX: 600 }}
                    transition={{ duration: 0.5 }}
                    key="modal-cart"
                >
                    <CloseButtonContainerStyles>
                        <CloseButtonStyles
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => dispatch(toggleHiddenCart())}
                        >
                            <MdClose size="24px" />
                        </CloseButtonStyles>
                    </CloseButtonContainerStyles>  

                    <CartItemsContainerStyles>
                        <TitlesStyles>
                            <h2>Tus Productos</h2>
                            <Increase 
                            onClick={() => dispatch(clearCart())}
                            disabled={!cartItems.length}
                            >
                              <FaTrashAlt color='white'/>
                            </Increase>
                        </TitlesStyles>
                    

                        <ProductsContainerStyles>
                        {cartItems.length ? (
                            cartItems.map((item) => (
                                <ModalCartCard key={item.id} {...item} />
                            ))
                        ) : (
                            <p>No hay productos</p>
                        )}
                        </ProductsContainerStyles>
                    </CartItemsContainerStyles>


                    <InfoPriceStyles>
                        <TotalStyles>
                            <h2>Total</h2>
                            <span>$ {totalPrice} </span>
                        </TotalStyles>
                        <SentStyles>
                            <p>
                                Envio: 
                            </p>
                            <span>$ {shippingCost} </span>
                        </SentStyles>
                        <hr />
                        <TotalPay>
                            <h2>Total a Pagar</h2>
                            <span>$ {totalPrice + shippingCost} </span>
                        </TotalPay>
                        <div>
                            <ButtonCart whileTap={{scale: 0.9}}>
                                Finalizar Compra
                            </ButtonCart>
                        </div>
                    </InfoPriceStyles>
                </ModalCartStyles>

                
            )}
        </AnimatePresence>
    </>
  )
 } 
