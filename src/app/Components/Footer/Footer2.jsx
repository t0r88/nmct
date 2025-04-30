"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";

const Footer2 = () => {

        useEffect(() => {
            loadBackgroudImages();
        }, []);

    return (
        <div>
             <section className="cta-section section-padding pb-0">
            <div className="container">
                <div className="cta-wrapper bg-cover" data-background="/assets/img/cta-bg.jpg">
                    <div className="cta-img wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s">
                    <Image src="/assets/img/cta-img.png" alt="Logo" width={260} height={360}   />
                    </div>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Яг одоо <br/> бүртгүүлээрэй
                    </h2>
                    <div className="main-button wow fadeInUp" data-wow-delay=".5s">
                        <Link href="https://admission.nmct.edu.mn"> <span className="theme-btn">Бүртгүүлэх</span><span className="arrow-btn"> <i className="bi bi-arrow-right"></i></span></Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="footer-section footer-bg fix">
            <div className="container">
                <div className="footer-widgets-wrapper">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <a href="#">
                                        <Image src="/assets/img/logo/png1.png" alt="Logo" width={171} height={171}   />
                                    </a>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        2014 онд үүсгэн байгуулагдсан ба 60 жилийн түүхтэй Японы "Коосэн" технологийн коллежийн систем, хөтөлбөрийг загвар болгосон дээд боловсролын байгууллага юм.
                                    </p>
                                    <div className="social-icon d-flex align-items-center">
                                        <a href="https://www.facebook.com/NMkosen"><i className="bi bi-facebook"></i></a>
                                        <a href="https://www.youtube.com/@NewMongolKOSEN/"><i className="bi bi-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>ШМЭХ-ийн бүрэлдэхүүн</h3>
                                </div>
                                <ul className="list-area">
                                    <li>
                                        <Link href="https://newmongol.edu.mn">
                                        <i className="bi bi-arrow-right"></i>
                                            ШМЭХ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://nmit.edu.mn">
                                        <i className="bi bi-arrow-right"></i>
                                            ШМТДС
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://shinemongol.edu.mn">
                                        <i className="bi bi-arrow-right"></i>
                                            ЕБШМС
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.facebook.com/yulaUB">
                                        <i className="bi bi-arrow-right"></i>
                                            YU language Ulaanbaatar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.byatshanmongol.com/">
                                        <i className="bi bi-arrow-right"></i>
                                            Бяцхан монгол
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Мэдээ</h3>
                                </div>
                                <div className="recent-post-area">
                                    <div className="recent-post-items">
                                        <div className="thumb">
                                            <Image src="/assets/img/news/pp1.jpg" alt="Logo" width={80} height={80}   />
                                        </div>
                                        <div className="content">
                                            <ul className="post-date">
                                                <li>
                                                    <i className="fa-solid fa-calendar-days me-2"></i>
                                                    20 Feb, 2024
                                                </li>
                                            </ul>
                                            <h6>
                                                <Link href="/blog/blog-details">
                                                    Мэдээ 1 <br/>
                                                    Богино тайлбар
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="recent-post-items mb-0">
                                        <div className="thumb">
                                            <Image src="/assets/img/news/pp2.jpg" alt="Logo" width={80} height={80}   />
                                        </div>
                                        <div className="content">
                                            <ul className="post-date">
                                                <li>
                                                    <i className="fa-solid fa-calendar-days me-2"></i>
                                                    15 Dec, 2024
                                                </li>
                                            </ul>
                                            <h6>
                                                <Link href="/blog/blog-details">
                                                    Мэдээ 2 <br/>
                                                    Богино тайлбар   
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Холбоо барих</h3>
                                </div>
                                <div className="footer-content">
                                    <ul className="contact-info">
                                        <li>
                                            <i className="fa-regular fa-envelope"></i>
                                            <a href="mailto:info@nmct.edu.mn">info@nmct.edu.mn</a>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-phone-volume"></i>
                                            <a href="tel:75777799">+976 75777799 </a>
                                        </li>
                                    </ul>
                                    <div className="footer-input">
                                        <input type="email" id="email2" placeholder="Your email address" /> 
                                        <button className="newsletter-btn" type="submit">
                                        <i className="bi bi-arrow-right"></i>
                                        </button>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"  id="flexCheckChecked"  />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            I agree to the <a href="#">Privacy Policy.</a>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                            © All Copyright 2025 created by ШМЭХ
                        </p>
                        <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                            <li>
                                <a href="#">
                                    Terms & Condition       
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <a href="#" id="scrollUp" className="scroll-icon">
                <i className="bi bi-arrow-up"></i>
                </a>
            </div>
        </section>

        </div>
    );
};

export default Footer2;