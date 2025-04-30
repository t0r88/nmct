"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from 'html-react-parser';
import Link from "next/link";
import Image from "next/image";

const About1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      };  

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    const brandContent = [
        {img:'/assets/img/brand/01.png'},
        {img:'/assets/img/brand/02.png'},
        {img:'/assets/img/brand/03.png'},
        {img:'/assets/img/brand/04.png'},
      ];

      const aboutContent = {
        bg:'/assets/img/about/about-bg.png',  
        img:'/assets/img/about/oyunjargal.png',  
        subtitle:"Захирлын мэндчилгээ",
        title:'Skills to improve Your Company Brand',
        content:'Сайн байцгаана уу. Өөрийн гараар улсаа бүтээж, эх орныхоо хөгжилд хувь нэмрээ оруулах чадварлаг инженер залуусыг бэлтгэх эрхэм зорилготой сургууль маань үүсгэн байгуулагдаад хэдийнэ 10 жил болсон байна. Инженерийн суурь мэдлэг ур чадвар,хувь хүний хүмүүжил төлөвшил, инженерийн зохион бүтээх чадварыг 5 жилийн инженерийн цогц сургалтын хөтөлбөрөөр олгож ирсэн Япон улсын брэнд боловсролын тогтолцоог Монголд нутагшуулсан анхны коосэн сургууль гэдгээрээ танигдаж, анхны Магадлан итгэмжлэгдсэн Технологийн коллеж болсон билээ. 15 настай элсэгчийг Ерөнхий боловсролын цөм хөтөлбөрийг агуулсан коосэнгийн 5 жилийн инженерийн 5 мэргэжлийн хөтөлбөрөөр сургаж, төгсөөд мэргэжлээрээ ажиллах, мөн их дээд сургуульд дэвшин суралцах боломжтой 20 настай, дэд бакалавр зэрэгтэй инженерүүдийг бэлтгэн гаргадгаараа манай сургууль онцлогтой.',
        number1:'70+', 
        content2:'Багш', 
        number2:'600+', 
        content3:'Оюутан', 
      }      


    return (
        <section className="about-section fix section-padding" data-background={aboutContent.bg} >
        <div className="container">
            <div className="about-wrapper">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="about-image">
                            <Image src={aboutContent.img} alt="img" className="wow img-custom-anim-left" width={420} height={539}   />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title">
                                <div className="sub-title bg-color-2 wow fadeInUp">
                                    <span>{aboutContent.subtitle}</span>
                                </div>
                            </div>
                            <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                            {aboutContent.content}
                            </p>
                            <div className="circle-progress-bar-wrapper">
                                <div className="single-circle-bar wow fadeInUp" data-wow-delay=".3s">
                                    <div className="circle-bar"  data-duration="2000">
                                    <div className="circle-border-area"><span>{aboutContent.number1}</span></div>                                        
                                    </div>
                                    <div className="content">
                                        <h6>
                                        {parse(aboutContent.content2)}
                                        </h6>
                                    </div>
                                </div>
                                <div className="single-circle-bar wow fadeInUp" data-wow-delay=".5s">
                                    <div className="circle-bar" data-duration="2000">
                                    <div className="circle-border-area"><span>{aboutContent.number2}</span></div> 
                                    </div>
                                    <div className="content">
                                        <h6>
                                        {parse(aboutContent.content3)}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="main-button wow fadeInUp" data-wow-delay=".3s">
                                <Link href="/about"> <span className="theme-btn"> Дэлгэрэнгүй унших </span><span className="arrow-btn"><i className="bi bi-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About1;