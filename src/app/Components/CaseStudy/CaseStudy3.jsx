"use client"
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const CaseStudy3 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 3,
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
              slidesToShow: 1,
            }
          }
        ]
      };  


    const chooseContent = [
        {subtitle:'Ерөнхий эрдэм', title:'Ерөнхий эрдэм', img:'/assets/img/case-studies/eronhii.jpg'},
        {subtitle:'Барилгын инженерчлэл', title:'Барилгын инженерчлэл', img:'/assets/img/case-studies/barilga.jpg'},
        {subtitle:'Компьютерийн ухаан', title:'Компьютерийн ухаан', img:'/assets/img/case-studies/com.jpg'},
        {subtitle:'Химийн инженерчлэл', title:'Химийн инженерчлэл', img:'/assets/img/case-studies/chem.jpg'},
        {subtitle:'Механик инженерчлэл', title:'Механик инженерчлэл', img:'/assets/img/case-studies/mech.png'},
      ]; 

    return (
        <section className="case-studies-section-3 fix section-padding">
        <div className="container">
            <div className="section-title text-center">
                <div className="sub-title wow fadeInUp">
                    <span>Тэхимүүд</span>
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Бид дараах <br/>
                    хөтөлбөрүүдээр хичээллэж байна
                </h2>
            </div>
        </div>
        <div className="container-fluid">
            <div className="swiper project-slider">
                <div className="swiper-wrapper cs_slider_gap_30">
                <Slider {...settings}>
                {chooseContent.map((item, i) => (
                    <div key={i} className="swiper-slide">
                        <div className="case-studies-card-items">
                            <div className="thumb">
                            <Image src={item.img} alt="img" width={589} height={393}   />
                            </div>
                            <div className="content">
                                <div className="title">
                                    <h3><Link href="/service/service-details">{item.title}</Link></h3>
                                    <p>{item.subtitle}</p>
                                </div>
                                <Link href="/service/service-details" className="icon"><i className="bi bi-arrow-up-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    ))}
                    </Slider>

                </div>
            </div>
        </div>
    </section>
    );
};

export default CaseStudy3;