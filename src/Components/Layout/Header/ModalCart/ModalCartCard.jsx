import React from 'react'
import { BgButtonsQuantityStyles, CardStyles, ImgCartCardStyles, InfoContainerStyles, ProductsContainerStyles, QuantityContainerStyles } from './ModalCartStyles'
import { FaMinus, FaTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Increase from '../../../../UI/Increase/Increase';
import { addToCart, removeFromCart } from '../../../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import Count from '../../../../UI/Count/Count';


const ModalCartCard = ({img, title, desc, prize, quantity, id}) => {
  const dispatch = useDispatch()


  return (
    <>
      <CardStyles>
        <ImgCartCardStyles src={img} alt={title} />
        <InfoContainerStyles>
            <h3> {title} </h3>
            <p> {desc} </p>
            <span> {prize} </span>
        </InfoContainerStyles>
        <QuantityContainerStyles>
            <Increase onClick={() => dispatch(removeFromCart(id))}>
            <BgButtonsQuantityStyles whileTap={{ scale: 0.95 }}>
              {quantity === 1 ? <FaTrashAlt color='white' /> : <FaMinus color='white' />}
            </BgButtonsQuantityStyles>
            </Increase>
            <Count> {quantity} </Count>
            <Increase onClick={() =>
            dispatch(addToCart({ img, title, desc, prize, quantity, id }))}>
            <BgButtonsQuantityStyles whileTap={{ scale: 0.95 }}>
              <FaPlus color='white' />
            </BgButtonsQuantityStyles>
          </Increase>  
        </QuantityContainerStyles>
    </CardStyles>
    </>

  )
}

export default ModalCartCard