import React from 'react'
import { useContext } from 'react'
import productsContext from '../../Context/ProductsContext'
import './ProductSection.css'

export default function ProductSection() {
    const contextData = useContext(productsContext)

    const x = contextData.allProducts.map(product =>(
        console.log(product.isHomeShow === true)
    ))

    return (
        <div>
            <h1>تست</h1>
        </div>
    )
}
