"use client"
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";

const Team2 = () => {

     const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
            {
            breakpoint: 1399,
            settings: {
                slidesToShow: 2,
            }
            },
            {
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
            }
            },{
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            }
            }
        ]
        };  

        const sliderRef = useRef(null);

        const next = () => {
        sliderRef.current.slickNext();
        };
    
        const previous = () => {
        sliderRef.current.slickPrev();
        }; 

    const teamContent = [
        {img:'/assets/img/team/management/t.oyunjargal.jpeg', name:'Т.Оюунжаргал', content:'Гүйцэтгэх захирал',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/management/sh.oyunchimeg.jpg', name:'Ш.Оюунчимэг', content:'СҮАХМ',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/management/a.purevsuren.jpg', name:'А.Пүрэвсүрэн', content:'ОХМ',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/management/s.sarangerel.jpg', name:'С.Сарангэрэл', content:'Нягтлан бодогч',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/management/01.jpg', name:'Ч.Цэнгүүн', content:'ГХМ',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/management/01.jpg', name:'Ж.Уранчимэг ', content:'Дотоод хяналтын мэргэжилтэн',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/management/01.jpg', name:'С.Өнөрцэцэг', content:'Захирлын туслах',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/management/b.bilguun.jpg', name:'Б.Билгүүн', content:'МИТ-ийн эрхлэгч',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/management/n.soronzonbold.jpg', name:'Н.Соронзонболд', content:'КУТ-ийн эрхлэгч',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/management/b.bolortsetseg.jpg', name:'Б.Болорцэцэг', content:'БДБИТ-ийн эрхлэгч',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/management/i.uyanga.jpg', name:'И.Уянга', content:'ЦЭИТ-ийн эрхлэгч',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/management/e.sunjidmaa.jpg', name:'Э.Сүнжидмаа', content:'ЕЭТ-ийн эрхлэгч',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/management/t.munkhbat.jpg', name:'Т.Мөнхбат', content:'МФ ЗАН-ийн ахлагч',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/management/m.oyunchimeg.jpg', name:'М.Оюунчимэг', content:'ЯХ ЗАН-ийн ахлагч',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
      ];

    return (
        <section className="team-section-33 section-padding">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="team-left-content sticky-style ">
                            <div className="section-title">
                                <div className="sub-title bg-color-2 wow fadeInUp">
                                    <span>Удирдлагын багийн хамт олон</span>
                                </div>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    Менежментийн <br/>багийн хамт олон 
                                </h2>
                            </div>
                            <div className="array-button wow fadeInUp" data-wow-delay=".5s">
                                <button onClick={previous} className="array-prev"><i className="bi bi-arrow-up"></i></button>
                                <button onClick={next} className="array-next"><i className="bi bi-arrow-down"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="swiper team-slider">
                            <div className="swiper-wrapper cs_slider_gap_30">
                            <Slider ref={sliderRef} {...settings}>
                            {teamContent.map((item, i) => (
                                <div key={i} className="swiper-slide">
                                    <div className="team-card-items mt-0">
                                        <div className="team-image">
                                        <Image src={item.img} alt="img" width={279} height={310}   />
                                        </div>
                                        <div className="team-content">
                                            <h3><a href="#">{item.name}</a></h3>
                                            <p>{item.content}</p>
                                        </div>
                                        <div className="icon-shape">
                                            <img src="/assets/img/team/icon-shape.png" alt="img" />
                                            <div className="social-profile">
                                                <ul>
                                                <li><Link href={item.content}><i className="bi bi-instagram"></i></Link></li>
                                                <li><Link href={item.content}><i className="bi bi-facebook"></i></Link></li>
                                                <li><Link href={item.content}><i className="bi bi-twitter-x"></i></Link></li>
                                                <li><Link href={item.content}><i className="bi bi-linkedin"></i></Link></li>
                                                </ul>
                                                <span className="plus-btn"><i className="bi bi-share"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 ))}
                                 </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team2;