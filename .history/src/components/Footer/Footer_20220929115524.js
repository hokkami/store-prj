import React, { useState } from 'react'
import RegisterComment from '../RegisterComment/RegisterComment'
import { Link } from 'react-router-dom';
import { FaTelegramPlane, FaTwitter, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { SiAparat } from 'react-icons/si';
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi';
import { BiPhone, BiTimeFive } from 'react-icons/bi';
import { ImMobile } from 'react-icons/im';
import { Container } from 'react-bootstrap'
import './Footer.css'

export default function Footer() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const [validValue, setValidValue] = useState(false);
  const [submitted, setSubmitted] = useState(false);


  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (fullName.length !== 0 && email.length !== 0 && description.length !== 0) {
      setValidValue(true)

    }

    setTimeout(() => {
      setValidValue(false)
      setFullName('');
      setEmail('')
      setDescription('')
    }, 6000)
  }


  return (

    <div className='footer-main-section'>
      <div className='footer-top-container'>
        <div className="footer-aboutUs-section footer-top-item">
          <div className='title-header-section'>درباره ما</div>
          <div className="aboutUs-items">
            <div>
              <Link to='/historyCompany' className='aboutUs-item'>تاریخچه</Link>
            </div>
            <div>
              <Link to='/personnel' className='aboutUs-item'>کارکنان</Link>
            </div>
            <div>
              <Link to='/survey' className='aboutUs-item'>نظر سنجی</Link>
            </div>
            <div>
              <Link to='/historyCompany' className='aboutUs-item'>شرکت های همکار</Link>
            </div>
          </div>
        </div>
        <div className="footer-contactUs-section footer-top-item">
          <span className='title-header-section'>تماس با ما</span>
          <div className="contactU-list">
            <div className="contactUs-item">
              <HiOutlineLocationMarker className='location-icon icons' />
              <span className='location-desc description'>اراک - خیابان ملک - خیابان 12 متری - کوچه یکم - پلاک 23</span>
            </div>
            <div className="contactUs-item">
              <BiPhone className='phone-icon icons' />
              <span className='phone-desc description'> 22369874  -  22334589 </span>

            </div>
            <div className="contactUs-item">
              <ImMobile className='mobil-icon icons' />
              <span className='mobil-desc description'> 09353699466 </span>
            </div>

            <div className="contactUs-item">
              <HiOutlineMail className='email-icon icons' />
              <span className='email-desc description'> R.hokkami@gmail.com </span>
            </div>

            <div className="contactUs-item">
              <p> <BiTimeFive className='email-icon icons' /> ساعات کاری هفته:</p>
              <ul className='work-hours description'>
                <li>شنبه تا چهارشنبه: از ساعت 8 الی 17 </li>
                <li>پنج شنبه ها: تعطیل</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-comment-section footer-top-item">
          <div className='title-header-section'>ثبت نظر</div>
          <form action="off" className="register-comment-form">
            <div>
              <input type="text" className="form-field-elem" value={fullName} onChange={e => setFullName(e.target.value)} placeholder='نام و نام خانوادگی' />
              {submitted && fullName.length === 0 && (
                <span className='error-elem' id='first-name-error'>لطفا نام خود را وارد نمایید</span>
              )}
            </div>
            <div>
              <input type="email" className="form-field-elem" value={email} pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" required onChange={e => setEmail(e.target.value)} placeholder='ایمیل' />
              {submitted && email.length === 0 && (
                <span className='error-elem' id='first-name-error'>لطفا ایمیل را وارد نمایید</span>
              )}
            </div>
            <div>
              <textarea type="text" className="form-field-elem" id='description' value={description} onChange={e => setDescription(e.target.value)} placeholder='توضیحات' />
              {submitted && description.length === 0 && (
                <div>
                  <span className='error-elem' id='description-error'>لطفا توضیحات را وارد نمایید</span>
                </div>
              )}
            </div>

          </form>
          <button type='submit' className='btn-submit' onClick={(event) => onSubmit(event)}>ثبت</button>
          {submitted && validValue && (
            <div className='success-message'> نظر شما با موفقیت ثبت شد</div>
          )}
        </div>
      </div >

      <div className="social-section">
        <div className="right-side-social">
          <p>کلیه حقوق این سایت برای شرکت گالری ساعت است</p>
        </div>
        <div className="left-side-social">
          <a className='social-media-items' href="#"><FaTelegramPlane /></a>
          <a className='social-media-items' href="#"><FaTwitter /></a>
          <a className='social-media-items' href="#"><FaWhatsapp /></a>
          <a className='social-media-items' href="#"><SiAparat /></a>
          <a className='social-media-items' href="#"><FaLinkedinIn /></a>
        </div>
      </div>

    </div >
  )
}
