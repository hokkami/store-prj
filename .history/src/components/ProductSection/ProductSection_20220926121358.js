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
                        <li>{product.ti}</li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>                    
                ))

            }
        </div>
    )
}
