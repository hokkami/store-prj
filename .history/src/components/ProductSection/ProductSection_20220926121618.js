import React from 'react'
import { useContext } from 'react'
import productsContext from '../../Context/ProductsContext'
import './ProductSection.css'

export default function ProductSection() {
    const contextData = useContext(productsContext)

    contextData.allProducts.filter(product =>product.isShowHome===true )
    log
    return (
        <div>
                <h1>jsj</h1>
        </div>
    )
}
