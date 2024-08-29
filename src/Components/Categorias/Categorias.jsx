import React from 'react'
import { categories } from '../../Data/Categories'
import Categoria from './Categoria'
import { CategoriesContainer } from './CategoriasStyles'
import { useSelector } from 'react-redux'

const Categorias = () => {

  const {categories} = useSelector(state => state.categories)
console.log("messi", categories)
  return (
    <CategoriesContainer>
        {categories.map((category) =>(
            <Categoria key={category.id} {...category}/>
        ))}
    </CategoriesContainer>
  )
}

export default Categorias