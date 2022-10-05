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
        <Card style={{ width: '18rem' , height:'32rem', marginTop:'20px' ,paddingTop:'5px'}}>
          <img src={filterName.img} alt="Rolex" style={{marginLeft:'20px' , width:'100%' , height:'15rem'}} className='card-img-top w-75' />
          <Card.Body>
            <Card.Title style={{height:'40px'}}>{filterName.title}</Card.Title>
            <Card.Text style={{overflow:'hidden' ,height:'110px' , margin:'20px'}}>{filterName.desc}</Card.Text>
            <Link to={`/product/${filterName.id}`} variant="primary">نمایش بیشتر</Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}
