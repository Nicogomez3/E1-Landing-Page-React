import { ButtonCard, Card, ImageCard, InfoCard, SectionCard } from "./ProductsStyles"
import { Products } from "../../Data/Products"
import { ProductCard } from "./ProductCard"
import { CardContainer } from "../Products/ProductsStyles"


export const Producto = () => {
  return (
    <>
    <SectionCard>
      <h2>Productos destacados</h2>

      <CardContainer>
      {Products.map(product => (
        <ProductCard key={product.id}{...product} />
        ))}
      </CardContainer>

    </SectionCard>
 
    </>
     
    
  )
}

