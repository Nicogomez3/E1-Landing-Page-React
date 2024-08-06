import { ButtonContainer } from "./ProductsStyles"
import { ButtonCard, ButtonSection, Card, ImageCard, InfoCard, SpanPrice, } from "./ProductsStyles"

export const ProductCard = (props) => {
 console.log(props)
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
            <ButtonCard whileTap={{ scale: 0.95}} $primary>Ver mas</ButtonCard>
            <ButtonCard whileTap={{ scale: 0.95}} >Comprar</ButtonCard>

          </ButtonContainer>
          

      </Card>
      </>
      
  )
}

