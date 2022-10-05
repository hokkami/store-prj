import React, { useContext } from 'react'
import productsContext from '../../Context/ProductsContext'
import './Toast.css'

export default function Toast() {
  const contextData = useContext(productsContext);
  return (
    <div className='toast-container position-fixed bottom-0 me-4 end-0 mb-4'>
      <div className={`${contextData.isShowToast ? 'show' : ''} toast align-item-center text-white bg-danger`}>
        <div className="d-flex justify-content-between align-items-center px-2 py-2 " >
          <button type='button' className="btn-close btn-close-red me-3" onClick={() => {
            contextData.setIsShowToast(false)
          }}></button>
          <div className="toast-body">محصول با موفقیت به سبد اضافه شد</div>
        </div>
      </div>
    </div>
  )
}
