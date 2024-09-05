import { products } from "../../../Data/Products"
import { ProductCardHome } from "./ProductCardHome"
import { CardContainer, SectionCard } from "../../Products/ProductsStyles"
import { useSelector } from "react-redux"


export const ProductsHome = () => {
  const { recommended} = useSelector((state) => state.recommended);
  return (
    <>
        <SectionCard>
            <h2>Productos Destacados</h2>
            <CardContainer gridlength={recommended.length}>
                {recommended.map((recomendado) => (
                    <ProductCardHome key={recomendado.id}{...recomendado} />
                ))}
            </CardContainer>

        </SectionCard>
    </>
  )
}

