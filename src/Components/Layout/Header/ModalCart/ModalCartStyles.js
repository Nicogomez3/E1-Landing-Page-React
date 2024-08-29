import { motion } from "framer-motion";
import styled from "styled-components";

export const OverlayStyles = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;



`

export const ModalCartStyles = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;

  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 30px;

  width: 450px;
  height: calc(100vh - 4rem);

  padding: 3rem;
  background-color: #1a1a1a;
  border-radius: 0 0 0 1rem;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
`

export const CloseButtonContainerStyles = styled.div`
    height: 32px;
`

export const CloseButtonStyles = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: var(--btn-gradient);
  color: white;
  cursor: pointer;
`

export const CartItemsContainerStyles = styled.div`
    height: 55%;
`

export const TitlesStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* margin: 0 0 2rem 0;  */

  & h2 {
    margin-top: 0;
    color: white;
  }
`



export const ProductsContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  gap: 15px;
  width: 360px;
  
  width: 100%;
  height: 400px;
  margin: 0 auto;
  padding: 1rem;

  padding-left: 0;

  overflow: scroll;



  & p {
    color: white;
  }

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 235px;
  }
`

export const CardStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 360px;

  background: var(--gray-bg);
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 15px;
`

export const ImgCartCardStyles = styled.img`
  width: 90px;


`

export const CartItemsStyles = styled.div`

`
export const InfoContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 190px;
  & h3 {
    margin: 0;
    margin-bottom: 2px;
    font-weight: 500;
    color: white;
  }

  & p {
    margin: 0;
    color: #666;
    font-size: 1rem;
  }

  & span {
    text-align: center;
    font-weight: 800;
    font-size: 1.2rem;
    background: linear-gradient(90deg, #FFC593 0%, #BC7198 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
export const QuantityContainerStyles = styled.div`
    display: flex;
    align-items: center;

    & span {
      width: 22px;
      padding: 0 0.5rem;
      text-align: center;
      font-weight: 500;
      font-size: 18px;
      letter-spacing: 0.6px;
      opacity: 0.7;
      background: linear-gradient(90deg, #FFC593 0%, #BC7198 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
`

export const BgButtonsQuantityStyles = styled(motion.div)`
  background-color: #BF4F74;
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const InfoPriceStyles = styled.div`
  
  gap: 10px;
  color: white;
  font-weight: 500;

  border-top: 1px solid #666; 
  padding-top: 1rem;  

  & p {
    text-align: center;
    margin-bottom: 0;
  }
    
`

export const TotalStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SentStyles = styled(TotalStyles)``;
export const TotalPay = styled(TotalStyles)``;

export const ButtonCart = styled(motion.button)`
     background-color: #BF4F74;
   border-radius: 5px;
   color: white;
   padding: 0.8rem 1.5rem;
   border: none;
   font-size: 16px;
   display: flex;
   align-items: center;
   border: 1px solid #BF4F74;
   gap: 5px;
   cursor: pointer;

   &:hover {
    background-color: transparent;
    color: #BF4F74;
    border: 1px solid #BF4F74;
    border-radius: 5px;
   } 

`