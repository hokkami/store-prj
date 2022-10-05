import React, { useContext, useState } from 'react'
import productsContext from '../../Context/ProductsContext'
import { Link } from 'react-router-dom';
import './ProductsCard.css'


export default function ProductsCard() {

  const contextData = useContext(productsContext)

  const [currentPage, setCurrentPage] = useState(1);
  
  let pageSize = 6
  let pagesNumbers
  
  let endIndex = pageSize * currentPage
  let startIndex = endIndex - pageSize
  let allShownProduct = contextData.allProducts.slice(startIndex, endIndex)
  // console.log('allShownProduct:', allShownProduct);
  // setPaginatedProduct(allShownProduct)
  const [paginatedProduct, setPaginatedProduct] = useState(allShownProduct);
  
  
  const changePaginate = (newPage) => {
    setCurrentPage(newPage)
    let endIndex = pageSize * currentPage
    let startIndex = endIndex - pageSize
    let allShownProduct = contextData.allProducts.slice(startIndex, endIndex)
    setPaginatedProduct(allShownProduct);
    
  }
  
  const pagesCount = Math.ceil(contextData.allProducts.length / pageSize);
  pagesNumbers = Array.from(Array(pagesCount).keys())
  

  return (
    <div className='product-card-section'>
      {paginatedProduct.map((product) => (
        <div key={product.id} className="col-xl-10 col-lg-4 col-md-5 col-md-12 mt-3">
          <div className="card py-3px-3">
            <div className="col-9 text-center">
              <img src={product.img} alt="Rolex" className='card-img-top w-75' />
            </div>
            <div className="card-body text-center">
              <p className="card-text ">{product.title}</p>
              <p className="price ">  قیمت : {product.price}  تومان  </p>
              <br />

              {/* اضافه کردن به سبد خرید مشتری و نشان دادن توست اضافه شدن به سبد همراه با کنترل موجودی کالا و تعداد دفعات اضافه شدن به سبد */}
              <a href="javascript:void(0)" className='btn btn-danger add-to-bag' onClick={() => {
                contextData.setIsShowToast(true);
                setTimeout(() => {
                  contextData.setIsShowToast(false);
                }, 2000);

                let isInUserCart = contextData.userBag.some(bagProduct => bagProduct.title === product.title)

                if (!isInUserCart) {
                  let newUserBagProduct = {
                    id: contextData.userBag.length + 1,
                    title: product.title,
                    price: product.price,
                    count: 1
                  }
                  product.count -= 1
                  contextData.setUserBag(prevProducts => [...prevProducts, newUserBagProduct,])
                } else {
                  let userBag = [...contextData.userBag]

                  //---------- way 1 ----------
                  userBag.some(userBagProduct => {
                    if (userBagProduct.title === product.title && product.count > 0) {
                      userBagProduct.count += 1
                      product.count -= 1
                      return true
                    }
                  })
                }
              }}
              >
                اضافه به سبد خرید
              </a>
              <br />
              <Link to={`/product/${product.id}`} className='btn btn-outline-dark mt-3 text-capitalize btn-details'
              >نمایش جزئیات ...</Link>
              <p className="count-product"> موجودی :  {product.count}  عدد </p>
            </div>
          </div>
        </div>
      ))}
      <div>
        <nav className='d-flex justify-content-center'>
          <ul className="pagination pagination-sm">
            {pagesNumbers.map((pageNumber) => (
              <li className={pageNumber + 1 === currentPage ? 'page-item active' : 'page-item'} aria-current="page" key={pageNumber + 1} onClick={() => changePaginate(pageNumber + 1)}>
                <span className="page-link">{pageNumber + 1}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
