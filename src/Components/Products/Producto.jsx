import { ButtonCard, Card, ImageCard, InfoCard, SectionCard } from "../../pages/Home/Products/ProductsStyles"
import { Products } from "../../Data/Products"
import { ProductCard } from "./ProductCard"
import { CardContainer } from "../../pages/Home/Products/ProductsStyles"


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

