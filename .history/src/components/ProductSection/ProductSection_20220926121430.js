import React from 'react'
import { useContext } from 'react'
import productsContext from '../../Context/ProductsContext'
import './ProductSection.css'

export default function ProductSection() {
    const contextData = useContext(productsContext)

    return (
        <div>

            {
                contextData.allProducts.map(product => (
                    <ul>
                        <li>{product.title}</li>
                        <li>{product.price}</li>
                        <li>{product.title}</li>
                        <li>{product.title}</li>
                        <li>{product.title}</li>
                    </ul>                    
                ))

            }
        </div>
    )
}