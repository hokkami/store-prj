import React, { useContext } from 'react'
import productsContext from '../../Context/ProductsContext';
import { BsBag } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import './BagPage.css'

export default function BagPage() {
  
    const contextData = useContext(productsContext);

    return (
        <aside className={`${contextData.isShowBag ? 'active' : ''} bag-sidebar`}>
            <h3 className='bag-title'>
                <h4></h4>
                <span className='bag-icon'>
                    <BsBag />
                </span>
                <span>
                    <AiOutlineClose className='close-icon'  onClick={()=>{
                        contextData.setIsShowBag(false)
                    }}/>
                </span>
            </h3>
            <div className="row bag-wrapper">
                {contextData.userBag.map((userProduct) => (
                    <div className="col-12 mt-5" key={userProduct.id}>
                    <div className="card py-3 px-3">
                        <div className="col-12 text-center">
                            <img src={userProduct.avatar} alt={userProduct.title} className='cart-img-top w-75' />
                        </div>
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                            <p className="card-text">{userProduct.title}</p>
                            <p className="price">{userProduct.price}</p>
                            <br />
                            <a href="#" className="btn btn-danger">خرید کالا</a>
                            <a href="#" className="btn btn-outline-dark mt-3 text-capitalize">
                                جزئیات بیشتر
                            </a>
                            <p className="number">{userProduct.count}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </aside>
    )
}
