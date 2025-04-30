"use client"
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";

const Testimonial1 = () => {

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

    const testimonialContent = [
        {img:'/assets/img/testimonial/enkhuyanga.png', subtitle:'Шинэ Монгол Коосэнгийн 1-р үеийн төгсөгч', title:'Э.Энх-Уянга ', content:'Энэ хүртэл бидэнд бүхий л зүйлсээ зааж сургасан Шинэ Монгол коосэнгийн бүх багш, ажилчдадаа талархаж буйгаа илэрхийлье.'},
        {img:'/assets/img/testimonial/davaadorj.png', subtitle:'Шинэ Монгол Коосэнгийн 1-р үеийн төгсөгч', title:'Ч.Даваадорж', content:'Шинэ Монгол технологийн коллежийн дүү нартаа захихад, өөрийнхөө мөрөөдлийг зориллго болгож, түүнийхээ төлөө тууштай тэмцэж, ажиллахыг хүссэн чиглэлээрээ хичээлээс гадуурх секц дугуйланд хамрагдаж өөрийгөө хөгжүүлээрэй.'},      
    ]; 

    return (
        <section className="testimonial-section fix section-padding">
            <div className="container">
                <div className="testimonial-wrapper">
                    <div className="section-title-area">
                        <div className="section-title">
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Төгсөгчийн <br/> сэтгэгдэл
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="swiper testimonial-slider">
                                <div className="swiper-wrapper cs_slider_gap_30">
                                <Slider ref={sliderRef} {...settings}>
                                {testimonialContent.map((item, i) => (
                                    <div key={i} className="swiper-slide">
                                        <div className="testimonial-box-items">
                                            <div className="icon">
                                            <Image src="/assets/img/testimonial/icon.png" alt="img" width={44} height={33}   />
                                            </div>
                                            <div className="testimonial-img">
                                            <Image src={item.img} alt="img" width={102} height={122}   />
                                                <div className="shape-img">
                                                <Image src="/assets/img/testimonial/shape.png" alt="img" width={62} height={221}   />
                                                </div>
                                            </div>
                                            <div className="content">
                                               <div className="client-info">
                                                    <h5>{item.title}</h5>
                                                    <span>{item.subtitle}</span>
                                               </div>
                                               <p>
                                               {item.content}
                                               </p>
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
            </div>
        </section>
    );
};

export default Testimonial1;