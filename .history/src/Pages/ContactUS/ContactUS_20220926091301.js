import React from 'react'
import { BiBorderBottom } from 'react-icons/bi'
import { FaLinkedinIn, FaTelegramPlane, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { SiAparat } from 'react-icons/si'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Location from '../../components/Location/Location';
import './ContactUS.css'

export default function ContactUS() {
    return (
        <div className='contactUs-main-container'>
            <div className='contactUs-top-container'>
                <div className="contactUs-right-side">
                    <div style={{ borderBottom: '1px solid var(--gold)', marginBottom: '15px' }}>
                        <h5 style={{ paddingRight: '10px' }}>ثبت نظر</h5>
                    </div>
                    <div className="contactUs-input-container">
                        <input type="text" className="fullname elem-input" placeholder='نام' />
                        <input type="text" className="email elem-input" placeholder='ایمیل' />
                    </div>
                    <div className='contactUs-textaria'>
                        <textarea name="textarea" cols="60" rows="10" className='desc' placeholder='متن پیام' />
                    </div>
                    <button className='btn-desc'>ثبت پیام</button>
                </div>
                <div className="contactUs-left-side">
                    <div style={{ borderBottom: '1px solid var(--gold)', marginBottom: '15px' }}>
                        <h5 style={{}}>راه های ارتباطی دیگر</h5>
                    </div>
                    <div style={{ marginTop: '30px', marginRight: '30px' }}>
                        <Row >
                            <Col style={{ width: '100px' }}>
                                <p style={{ color: 'var(--darkgray)', width: '100px' }}>آدرس ما:</p>
                            </Col>
                            <Col>
                                <p style={{ width: '200px', justifyContent: 'start' }}>اراک خیابان ملک - خیابان 12 متری</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{ color: 'var(--darkgray)' }}>شماره های تماس:</p>
                            </Col>
                            <Col>
                                <p>22336699 - 22558877</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{ color: 'var(--darkgray)' }}>شماره موبایل:</p>
                            </Col>
                            <Col>
                                <p>03953699466</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{ color: 'var(--darkgray)' }}>ایمیل:</p>
                            </Col>
                            <Col>
                                <p>R.hokkami@gmail.com</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{ color: 'var(--darkgray)' }}>ساعات کاری:</p>
                            </Col>
                            <Col>
                                <p>شنبه تا چهار شنبه : 8 الی 17</p>
                                <p>پنج شنبه: تعطیل</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{ color: 'var(--darkgray)' }}>شبکه های اجتماعی:</p>
                            </Col>
                            <Col style={{ marginLeft: '30px' }}>
                                <div className="left-side-social">
                                    <a className='social-media-items' href="#"><FaTelegramPlane /></a>
                                    <a className='social-media-items' href="#"><FaTwitter /></a>
                                    <a className='social-media-items' href="#"><FaWhatsapp /></a>
                                    <a className='social-media-items' href="#"><SiAparat /></a>
                                    <a className='social-media-items' href="#"><FaLinkedinIn /></a>
                                </div>
                            </Col>
                        </Row>
                    </div>



                </div>
            </div>
            <div className='contactUs-bottom-container'>
                <Location/>
            </div>
        </div>
    )
}
