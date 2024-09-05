import React from 'react'
import { CategoriesCards } from './CategoriasStyles'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../redux/categoriesSlice/categoriesSlice'

const Categoria = ({name, image, category}) => {

    const {selectedCategory } = useSelector(state => state.categories)
    const dispatch = useDispatch()
  return (
    <CategoriesCards
        whileTap={{scale: 0.95}}
        selected={category === selectedCategory}
        onClick={() => dispatch(selectCategory(category))}
    >
        <img src={image} alt={category}/>
        <h3> {name} </h3>
    </CategoriesCards>
  )
}

export default Categoria