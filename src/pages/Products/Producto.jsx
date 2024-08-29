import { ButtonCard, ButtonContainerProduct, ButtonProduct, Card, ImageCard, InfoCard, SectionCard } from "./ProductsStyles"
import { products } from "../../Data/Products"
import { ProductCard } from "./ProductCard"
import { CardContainer } from "./ProductsStyles"
import { ButtonGlobal } from "../../GlobalStyles/GlobalStyles"
import { ButtonContainer } from "../Home/Hero/HeroStyles"
import { useNavigate } from "react-router-dom"
import Categorias from "../../Components/Categorias/Categorias"
import { useSelector } from 'react-redux'

export const Producto = () => {
  const navigate = useNavigate();
  const { selectedCategory } = useSelector(state => state.categories);
  const filteredProducts = selectedCategory 
  ? products.filter(product => product.category === selectedCategory)
  : products;

  return (
    <>
    <SectionCard>
      <h2>Productos</h2>

      <div>
        <Categorias/>
      </div>

      <CardContainer>
      {filteredProducts.map(product => (
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

