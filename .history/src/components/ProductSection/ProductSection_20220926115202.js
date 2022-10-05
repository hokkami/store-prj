import React from 'react'
import productsContext from '../../Context/ProductsContext'
import './ProductSection.css'

export default function ProductSection() {
    const contextData = useContext(productsContext)

    return (
        <div>
            {
               let x = contextData.allProducts.filter(product => product.isShowHome === true)
            }

        </div>
    )
}
