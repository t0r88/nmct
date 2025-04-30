"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Faq1 = ({addclass}) => {

    const faqContent = [
        {title:'Ямар ямар хөтөлбөрүүд байдаг вэ?', content:'Барилгын инженер, Механик инженер, Компьютерын ухаан, Химийн инженерчлэл'},
        {title:'Сургалтын төлбөр хэд вэ?', content:'6800000₮'},
        {title:'хэдэн жил сурдаг вэ?', content:'5 жил суралцаад төгсдөг'},
        {title:'Их дээд сургуульд хэрхэн дэвшин суралцдаг вэ', content:'3-р курсээ төгсөөд их дээд сургуулийн 1-р курс элсэн суралцаж болно. Мөн 5-р курсээ төгссөний дараа их дээд сургуулийн 3-курсээс үргэлжлүүлэн сурч болно'},
        {title:'Хаана байдаг вэ?', content:'БЗД 25-р хороо шинэ монгол технологийн коллеж'},
        {title:'Нэг анги хэдэн хүүхэдтэй вэ?', content:'Анги дүүргэлт 30'},
        {title:'Ямар ямар хөтөлбөрүүд байдаг вэ?', content:''},
        {title:'Ямар ямар хөтөлбөрүүд байдаг вэ?', content:''},
        {title:'Ямар ямар хөтөлбөрүүд байдаг вэ?', content:''},
      ]; 

      const accordionContentRef = useRef(null);
      const [openItemIndex, setOpenItemIndex] = useState(-1);
      const [firstItemOpen, setFirstItemOpen] = useState(true);
    
      const handleItemClick = index => {
        if (index === openItemIndex) {
          setOpenItemIndex(-1);
        } else {
          setOpenItemIndex(index);
        }
      };
      useEffect(() => {
        if (firstItemOpen) {
          setOpenItemIndex(0);
          setFirstItemOpen(false);
        }
      }, [firstItemOpen]);

    return (
        <section className={addclass}>
            <div className="faq-overlay">
            <Image src="/assets/img/faq-overlay.png" alt="img" width={370} height={946}   />
            </div>
            <div className="faq-shape">
            <Image src="/assets/img/faq-shape.png" alt="img" width={169} height={286}   />
            </div>
            <div className="container">
                <div className="faq-wrapper">
                    <div className="row g-4 justify-content-between">
                        <div className="col-xl-5 col-lg-6">
                            <div className="faq-content">
                                <div className="section-title">
                                    <div className="sub-title bg-color-2 wow fadeInUp">
                                        <span>FAQs</span>
                                    </div>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Шинэ Монгол Технологийн Коллежийг яагаад сонгох вэ?
                                    </h2>
                                </div>
                                <p className="wow fadeInUp" data-wow-delay=".5s">
                                    We are not just another agency - we are your digital growth partners. With
                                    years of industry experience and a passion for innovation, our team is
                                    dedicated to delivering measurable results propel your business forward.
                                </p>
                                <ul className="faq-list">
                                    <li className="wow fadeInUp" data-wow-delay=".3s">
                                    <i className="bi bi-check-circle"></i>
                                        Top quality service
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay=".5s">
                                    <i className="bi bi-check-circle"></i>
                                        Intermodal Shipping
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="faq-accordion-items">
                                <div className="faq-accordion">
                                    <div className="accordion" id="accordion">
                                    {faqContent.map((item, index) => (
                                        <div key={index} className={`accordion-item mb-3 ${index === openItemIndex ? "active" : "" }`}  data-wow-delay=".3s">
                                            <h5 onClick={() => handleItemClick(index)} className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                                {item.title}
                                                </button>
                                            </h5>
                                            <div ref={accordionContentRef} id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                <div className="accordion-body">
                                                {item.content}
                                                </div>
                                            </div>
                                        </div>
                                         ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq1;