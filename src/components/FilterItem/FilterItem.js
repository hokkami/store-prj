import React, { useState } from 'react'
import { useContext } from 'react'
import productsContext from '../../Context/ProductsContext'
import './FilterItem.css'

export default function FilterItem() {
  const contextData = useContext(productsContext)
  const [mainBrand, setMainBrand] = useState('همه')

  return (

    <div className='filterItem-container'>
      {
        contextData.brands.map((brand, index) => (
          <button key={index} type='button'
            className={brand === mainBrand ? 'filter-btn highlight' : 'filter-btn'}
            onClick={() => {
              setMainBrand(brand)
              contextData.filterMenus(brand)
            }}>{brand}</button>

        ))
      }
    </div>
  )
}
