import React from 'react'
import { useContext } from 'react'
import productsContext from '../../Context/ProductsContext'
import './ProductSection.css'

export default function ProductSection() {
    const contextData = useContext(productsContext)

    return (
        <div>
            {contextData.allProducts.filter(product =>(product.isShowHome===true)).map(filterName=>(
                <ul>
                    <li>{}</li>
                    <li></li>
                    <li></li>
                </ul>
             ))}
                <h1>jsj</h1>
        </div>
    )
}
