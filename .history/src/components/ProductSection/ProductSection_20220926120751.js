import React from 'react'
import { useContext } from 'react'
import productsContext from '../../Context/ProductsContext'
import './ProductSection.css'

export default function ProductSection() {
    const contextData = useContext(productsContext)

    const x = contextData.allProducts.filter(product => product.isShowHome === true)

    return (
        <div>
            <h1>{x}</h1>
        </div>
    )
}
