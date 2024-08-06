import { Products } from "../../../Data/Products"
import { ProductCardHome } from "./ProductCardHome"
import { CardContainer, SectionCard } from "../../Products/ProductsStyles"


export const ProductsHome = () => {
  return (
    <>
        <SectionCard>
            <h2>Productos Destacados</h2>
            <CardContainer>
                {Products.slice(0, 3).map(product => (
                    <ProductCardHome key={product.id}{...product} />
                ))}
            </CardContainer>

        </SectionCard>
    </>
  )
}

