"use client"
import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";
import Image from "next/image";

const Counter3 = () => {

        useEffect(() => {
            loadBackgroudImages();
        }, []);
    
           const [iframeSrc, setIframeSrc] = useState('about:blank');
          const [toggle, setToggle] = useState(false);
        
          const handelClick = () => {
            setIframeSrc("https://www.youtube.com/embed/RBqJK70eamk?si=5qi1syqEZ-WVWogv");
            setToggle(!toggle);
          };
          const handelClose = () => {
            setIframeSrc('about:blank');
            setToggle(!toggle);
          }; 

    return (
        <section className="cta-counter-section-3 fix section-bg section-padding bg-cover" data-background="/assets/img/cta-counter-bg.jpg">
        <div className="container">
            <div className="cta-counter-wrapper-2">
                <div className="section-title-area">
                    <div className="section-title">
                        <div className="sub-title bg-color-3 wow fadeInUp">
                            <span>Тоон үзүүлэлт</span>
                        </div>
                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                Сургуулийн <br/> сүлд дуу
                            </h2>
                    </div>
                    <div className="counter-box-area">
                            <div className="counter-text wow fadeInUp" data-wow-delay=".3s">
                                <h2>
                                    <span className="count">600+</span>
                                </h2>
                                <p>Оюутан</p>
                            </div>
                            <div className="counter-text wow fadeInUp" data-wow-delay=".5s">
                                <h2>
                                    <span className="count">70+</span>
                                </h2>
                                <p>Багш</p>
                            </div>
                            <div className="counter-text wow fadeInUp" data-wow-delay=".7s">
                                <h2>
                                    <span className="count">1200+</span>
                                </h2>
                                <p>Төгсөгч</p>
                            </div>
                        </div>
                </div>
                <div className="cta-video-image wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s">
                    <Image src="/assets/img/duu-kosen.png" alt="img" width={1386} height={533}   />
                    <a onClick={handelClick}  className="video-icon video-popup">
                        <i className="bi bi-play-fill"></i>
                    </a>
                </div>
            </div>
        </div>
        <VideoModal
            isTrue={toggle}
            iframeSrc={iframeSrc}
            handelClose={handelClose}        
        ></VideoModal>         
    </section>
    );
};

export default Counter3;