"use client"
import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";
import Image from "next/image";

const HeroBanner1 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

      const [iframeSrc, setIframeSrc] = useState('about:blank');
	  const [toggle, setToggle] = useState(false);
	
	  const handelClick = () => {
		setIframeSrc("https://www.youtube.com/embed/t5lpNHIY7Ds?si=Mu7atKKgE57FeLbJ");
		setToggle(!toggle);
	  };
	  const handelClose = () => {
		setIframeSrc('about:blank');
		setToggle(!toggle);
	  };

      const heroContent = {
        bg:'/assets/img/hero/hero-bg.jpg',  
        //subtitle:"ӨӨРИЙН ГАРААР УЛСАА БҮТЭЭНЭ",
        title:'Эрхэм зорилго',
        content:'Бүтээлч сэтгэлгээ, хүн болон асуудалтай харилцах чадвар, биеэ даасан байдалтай байхыг эрхэмлэн зорих',
        content2:'Оюутан бүрийг өөрийгөө таних, зорилгоо тодорхойлох түүндээ хүрэх замд туслах, чиглүүлэх, тэдний найдвартай зөвлөгч-хамтрагч байх.',
        img:'/assets/img/hero/hero-text.png',               
      }

    return (
        <section className="hero-section fix hero-1 bg-cover" data-background={heroContent.bg} >
        <div className="container-fluid">
            <div className="row g-4 align-items-center">
                <div className="col-xl-5 col-lg-6">
                    <div className="hero-content">
                        <span className="wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.2s">{heroContent.subtitle}</span>
                        <h1 className="wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.2s">{heroContent.title}</h1>
                        <p className="wow fadeInUp" data-wow-delay=".3s">
                        {heroContent.content}
                        </p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="hero-image">
                    <Image src="/assets/img/hero/hero_banner.png" alt="img" className="wow img-custom-anim-left" width={608} height={406}   />
                        <div className="bg-shape">
                        <Image src="/assets/img/hero/bg-shape.png" alt="img" width={998} height={1131}   />
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                    <div className="video-right">
                        <a onClick={handelClick} className="video-btn video-popup wow fadeInUp" data-wow-delay=".3s">
                        <i className="bi bi-play-fill"></i>
                        <Image src="/assets/img/hero/text-circle.png" alt="img" width={128} height={126}   />   
                        </a>
                        <p className="wow fadeInUp" data-wow-delay=".5s">
                        {heroContent.content2}
                        </p>
                    </div>
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

export default HeroBanner1;