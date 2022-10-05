import React from 'react'
import productsContext from '../../Context/ProductsContext'
import './ProductSection.css' 

export default function ProductSection() {
    const contextData = useContext(productsContext)

  return (
    <div>
      {
        contextData.
      }
    </div>
  )
}
