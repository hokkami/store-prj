import React from 'react'
import productsContext from '../../Context/ProductsContext'
import './ProductSection.css'

export default function ProductSection() {
    const contextData = useContext(productsContext)

    const x = contextData.allProducts.filter(product => product.isShowHome === true)

    return (
        <div>
                
        </div>
    )
}
