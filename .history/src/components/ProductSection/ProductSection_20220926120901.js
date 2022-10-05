import React from 'react'
import { useContext } from 'react'
import productsContext from '../../Context/ProductsContext'
import './ProductSection.css'

export default function ProductSection() {
    const contextData = useContext(productsContext)

    const x = contextData.allProducts.map(product =>(
        product
    ))

    return (
        <div>
            <h1>{x}</h1>
        </div>
    )
}
