import React, { useState, useContext } from 'react'
import ProductsCard from '../../components/Card/ProductsCard'
import Toast from '../../components/Toast/Toast'
import Bag from '../../components/Bag/Bag'
import productsContext from '../../Context/ProductsContext'
import FilterItem from '../../components/FilterItem/FilterItem'
import './Products.css'


export default function Products() {

    const contextData = useContext(productsContext);

    return (
        <div classNames='product-main-container'>
            <main className='pb-5'>
                <div className="products-title-container">
                    <h1 className="text-center main-title gallery-title">تمامی محصولات</h1>
                </div>
                <div className='product-card-container'>
                    <FilterItem />
                    <ProductsCard />
                </div>
                <Toast />
                <Bag />
            </main>
        </div>
    )
}

