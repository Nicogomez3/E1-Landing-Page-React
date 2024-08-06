import { ButtonCard, ButtonContainerProduct, ButtonProduct, Card, ImageCard, InfoCard, SectionCard } from "./ProductsStyles"
import { Products } from "../../Data/Products"
import { ProductCard } from "./ProductCard"
import { CardContainer } from "./ProductsStyles"
import { ButtonGlobal } from "../../GlobalStyles/GlobalStyles"
import { ButtonContainer } from "../Home/Hero/HeroStyles"
import { useNavigate } from "react-router-dom"


export const Producto = () => {
  const navigate = useNavigate();

  return (
    <>
    <SectionCard>
      <h2>Productos</h2>

      <CardContainer>
      {Products.map(product => (
        <ProductCard key={product.id}{...product} />
        ))}
      </CardContainer>
      <ButtonContainerProduct>
        <ButtonProduct whileTap={{scale: 0.95}} onClick={() => navigate(-1)}>Volver atras</ButtonProduct>
        <ButtonProduct whileTap={{scale: 0.95}} onClick={() => navigate('/')}>Volver a Home</ButtonProduct>
      </ButtonContainerProduct>

    </SectionCard>
 
    </>
     
    
  )
}

