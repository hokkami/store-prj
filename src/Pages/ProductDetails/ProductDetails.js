import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import productsContext from '../../Context/ProductsContext'
import Container from 'react-bootstrap/Container';
import FilterItem from '../../components/FilterItem/FilterItem';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { HiPlusSm } from 'react-icons/hi';
import { FcShipped,FcShop ,FcRefresh } from 'react-icons/fc';



export default function ProductDetails() {

  const contextData = useContext(productsContext)
  let params = useParams();
  const [productInfo, setProductInfo] = useState(contextData);

  const proInfo = contextData.allProducts.find(product => product.id == params.productID)
  //for tabs
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className="product-main-container" >
      <h3 className='product-brand-latin mt-5'>{proInfo.brandLatin}</h3>
      <div className='product-details-top-container'>

        <div className='product-details-img-container'>
          <img className="product-img" src={proInfo.img} alt={proInfo.title} />
        </div>
        
        <div className='main-product-details'>

          <div className="title-product-container">
            <h4 className='product-title'>{proInfo.title}</h4>
          </div>

          <div className="product-property-list-container">
            <div className="product-property-list">
              <ul className='product-list-items' >
              <h6 style={{fontWeigh:'600' , marginBottom:'20px'}}>ویژگی ها:</h6>
                <div className="product-property-container">
                  <label><HiPlusSm /> رنگ صفحه: </label>
                  <li className='product-property-items' style={{ marginBottom: '15px', listStyle: 'none' }}>
                    {proInfo.pageColor}</li>
                </div>
                <div className="product-property-container">
                  <label><HiPlusSm />جنس شیشه : </label>
                  <li className='product-property-items' style={{ marginBottom: '15px', listStyle: 'none' }}>
                    {proInfo.glassMaterial}</li>
                </div>
                <div className="product-property-container">
                  <label> <HiPlusSm /> فرم صفحه: </label>
                  <li className='product-property-items' style={{ marginBottom: '15px', listStyle: 'none' }}>
                    {proInfo.pageForm}</li>
                </div>
                <div className="product-property-container">
                  <label> <HiPlusSm />جنس بدنه: </label>
                  <li className='product-property-items' style={{ marginBottom: '15px', listStyle: 'none' }}>
                    {proInfo.bodyMaterial}</li>
                </div>
                <div className="product-property-container">
                  <label><HiPlusSm />رنگ بدنه: </label>
                  <li className='product-property-items' style={{ marginBottom: '15px', listStyle: 'none' }}>
                    {proInfo.bodyColor}</li>
                </div>
              </ul>
            </div>

            <div className="product-price-container">
              <span className='product-delivery'><FcShipped style={{marginLeft:'10px' , fontSize:'2rem'}}/> ارسال رایگان</span>
              <span className='product-return'><FcRefresh style={{marginLeft:'10px' , fontSize:'2rem'}}/> تضمین بازگشت کالا یک هفته </span>
              <span className='product-count'><FcShop style={{marginLeft:'10px' , fontSize:'2rem' }}/> موجودی در انبار : {proInfo.count} عدد </span>
              <span className='product-price-item'>{proInfo.price} تومان</span>
            </div>
          </div>
        </div>
      </div>

      <div >
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} textColor="primary" aria-label="lab API tabs example">
                <Tab style={{ fontSize: '2.rem' }} label="معرفی" value="1" className='tab-product-details' />
                <Tab label="مشخصات فنی" value="2" className='tab-product-details' />
                <Tab label="دیدگاه" value="3" className='tab-product-details' disabled />
              </TabList>
            </Box>
            <TabPanel value="1"><p className='product-desc' style={{ textAlign: 'justify' }}>{proInfo.desc}</p></TabPanel>
            <TabPanel value="2">
              <ul className='product-spec' >
                <div className="product-items-container">
                  <label>رنگ صفحه: </label>
                  <li className='porduct-spec-items' style={{ marginBottom: '15px', listStyle: 'none' }}>
                    {proInfo.pageColor}</li>
                </div>
                <div className="product-items-container">
                  <label>جنس شیشه : </label>
                  <li className='porduct-spec-items' style={{ marginBottom: '15px', listStyle: 'none' }}>
                    {proInfo.glassMaterial}</li>
                </div>
                <div className="product-items-container">
                  <label> فرم صفحه: </label>
                  <li className='porduct-spec-items' style={{ marginBottom: '15px', listStyle: 'none' }}>
                    {proInfo.pageForm}</li>
                </div>
                <div className="product-items-container">
                  <label>جنس بدنه: </label>
                  <li className='product-spec-items' style={{ marginBottom: '15px', listStyle: 'none' }}>
                    {proInfo.bodyMaterial}</li>
                </div>
                <div className="product-items-container">
                  <label>رنگ بدنه: </label>
                  <li className='product-spec-items' style={{ marginBottom: '15px', listStyle: 'none' }}>
                    {proInfo.bodyColor}</li>
                </div>
              </ul>
            </TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
      </div>
    </Container>
  )
}
