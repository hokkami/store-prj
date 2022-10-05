import React from 'react'
import { useContext } from 'react'
import productsContext from '../../Context/ProductsContext'
import './ProductSection.css'

export default function ProductSection() {
    const contextData = useContext(productsContext)

    console.log(x);
    return (
        <div>
            const x = contextData.allProducts.filter(product =>product.isShowHome===true ).map(filtername=>())
                <h1>jsj</h1>
        </div>
    )
}
