import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { BsBag } from 'react-icons/bs'
import productsContext from '../../Context/ProductsContext';
import './Topbar.css';
import Button from 'react-bootstrap/Button';

export default function Topbar() {

  const contextData = useContext(productsContext)

  return (
    <nav className='navbar navbar-expand-sm d-flex' style={{position:'absolute'}}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          گالری ساعت
        </Link>
        <ul className="navbar-nav me-auto ms-3">
          <li className="nav-item">
            <Link to="/" className="nav-link">صفحه اصلی</Link></li>
          <li className="nav-item">
            <Link to='/products' className="nav-link">گالری</Link></li>
          <li className="nav-item">
            <Link to="/contactUs" className="nav-link">ارتباط با ما</Link></li>
          
        </ul>

        <div className="bag-bax">
          <a href="#" className="bag">
            <BsBag className='text-white' onClick={() => {
              contextData.setIsShowBag(true)
            }} />
            <span className='bag-products-counter'>0</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
