import { useNavigate } from "react-router-dom"
import { ButtonContainer } from "../../Products/ProductsStyles"
import { ButtonCard, ButtonSection, Card, ImageCard, InfoCard, SpanPrice, } from "../../Products/ProductsStyles"
import { useDispatch } from "react-redux"
import { addToCart } from "../../../redux/cartSlice"

export const ProductCardHome = (props) => {
 console.log(props)
    const navigate = useNavigate()
    const {img, title, prize, desc, id} = props
    const handleClick = () => {
      window.scroll(0, 0);
      navigate('/product');
    };


    const dispatch = useDispatch()
    
    return (
      <>
      <Card>
          <ImageCard src= {img} alt="" />
          <InfoCard>
            <h2> {title} </h2>
            

          </InfoCard>
          <SpanPrice> $ {prize} </SpanPrice>
          <p> {desc} </p>
          <ButtonContainer>
            <ButtonCard whileTap={{ scale: 0.95}} $primary onClick={ handleClick}>Ver mas</ButtonCard>
            <ButtonCard onClick={() => dispatch(addToCart({img, title, prize, desc, id}))}
            whileTap={{ scale: 0.95}} >Comprar</ButtonCard>
          </ButtonContainer>
          

      </Card>
      </>
      
  )
}