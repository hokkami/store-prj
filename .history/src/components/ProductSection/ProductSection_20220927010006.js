import React from 'react'
import { useContext } from 'react'
import productsContext from '../../Context/ProductsContext'
import { Link } from 'react-router-dom';
import './ProductSection.css'
import Card from 'react-bootstrap/Card';

export default function ProductSection() {
  const contextData = useContext(productsContext)

  return (
    <div className='test-card'>
      {contextData.allProducts.filter(product => (product.isShowHome === true)).map(filterName => (

        <Card style={{ width: '18rem' , marginTop:'20px' }}>
          <img src={filterName.img} alt="Rolex" style={{margin:'50px'}} className='card-img-top w-75' />
          <Card.Body>
            <Card.Title>{filterName.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={`/product/${filterName.id}`} variant="primary">نمایش بیشتر</Link>
          </Card.Body>
        </Card>





      ))}
    </div>
  )
}
