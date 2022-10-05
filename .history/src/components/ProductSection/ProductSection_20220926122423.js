import React from 'react'
import { useContext } from 'react'
import productsContext from '../../Context/ProductsContext'
import './ProductSection.css'

export default function ProductSection() {
    const contextData = useContext(productsContext)

    return (
        <div>
            {contextData.allProducts.filter(product =>(product.isShowHome===true)).map(filterName=>(
                <div key={filterName.id} className="col-xl-10 col-lg-4 col-md-5 col-md-12 mt-3">
                <div className="card py-3px-3">
                  <div className="col-9 text-center">
                    <img src={filterName.img} alt="Rolex" className='card-img-top w-75' />
                  </div>
                  <div className="card-body text-center">
                    <p className="card-text ">{filterName.title}</p>
                    <p className="price ">  قیمت : {filterName.price}  تومان  </p>
                    <br />
      
                    {/* اضافه کردن به سبد خرید مشتری و نشان دادن توست اضافه شدن به سبد همراه با کنترل موجودی کالا و تعداد دفعات اضافه شدن به سبد */}
                    <a href="javascript:void(0)" className='btn btn-danger add-to-bag' onClick={() => {
                      contextData.setIsShowToast(true);
                      setTimeout(() => {
                        contextData.setIsShowToast(false);
                      }, 2000);
      
                      let isInUserCart = contextData.userBag.some(bagProduct => bagProduct.title === filterName.title)
      
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
                <h1>jsj</h1>
        </div>
    )
}
