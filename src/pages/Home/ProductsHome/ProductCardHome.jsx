import { useNavigate } from "react-router-dom"
import { ButtonContainer } from "../../Products/ProductsStyles"
import { ButtonCard, ButtonSection, Card, ImageCard, InfoCard, SpanPrice, } from "../../Products/ProductsStyles"

export const ProductCardHome = (props) => {
 console.log(props)
    const navigate = useNavigate()
    const {img, title, prize, desc} = props

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
            <ButtonCard whileTap={{ scale: 0.95}} $primary onClick={() => navigate('/product')}>Ver mas</ButtonCard>
            <ButtonCard whileTap={{ scale: 0.95}} >Comprar</ButtonCard>

          </ButtonContainer>
          

      </Card>
      </>
      
  )
}