import { useDispatch } from "react-redux"
import { ButtonContainer } from "./ProductsStyles"
import { ButtonCard, ButtonSection, Card, ImageCard, InfoCard, SpanPrice, } from "./ProductsStyles"
import { addToCart } from "../../redux/cartSlice"

export const ProductCard = ({img, title, prize, desc, id}) => {

   

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
            <ButtonCard whileTap={{ scale: 0.95}} $primary>Ver mas</ButtonCard>
            <ButtonCard onClick={()=> dispatch(addToCart({img, title, prize, desc, id}))} whileTap={{ scale: 0.95}} >Comprar</ButtonCard>

          </ButtonContainer>
          

      </Card>
      </>
      
  )
}

