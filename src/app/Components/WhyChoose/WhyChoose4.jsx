"use client"
import { useEffect, useRef, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";
import Link from "next/link";

const WhyChoose4 = () => {

    const faqContent = [
        {title:'Өөртөө итгэх итгэл нэмэгдүүлэх', content:'“Зоригжуулах - EQ хөгжүүлэх” хөтөлбөрөөр дамжуулан нийгмийн харилцаанд тулгарах асуудалд сэтгэл зүйн бэлтгэлтэй байх, даван туулах чадвар олгох. '},
        {title:'Хувь хүний идэвх санаачлага, оролцоог сайжруулах ', content:'Анги бүрийн онцлогод нийцүүлэн хамрагдах боломжтой, нээлттэй зарлагддаг хөтөлбөрүүдийн талаарх нэгдсэн танилцуулга жил бүр хийдэг. Үүгээр ач холбогдлыг тайлбарлах, өөрийн онцлог чадварт нийцсэн боломжийг олж харах, оролдож үзэхийг дэмжих.'},
        {title:'Нийгмийн идэвх санаачлага, оролцоог нэмэгдүүлэх', content:'Карьер хөгжлийн төв оюутнуудыг орчноо өөрчлөх, бусад салбарын хүмүүстэй танилцаж өөрийгөө нээх, комфорт зоноос гаргах зорилгоор төрөл бүрийн сайн дурын ажил, хөтөлбөрүүдийг зарлаж, оюутнуудыг хамрагдуулдаг.'},
        {title:'Эсээ, CV бичих чадварыг нэмэгдүүлэх', content:'Монбушо тэтгэлгийн судалгааны эсээ бичих гарын авлага боловсруулж, эсээ бичих зурган зөвлөмжүүдийг цахимаар хүргэж байна. CV бичих сургалт орж, оюутан бүрийн CV-нд зөвлөмж өгч ажиллаж байна. '},
        {title:'Гадаад хэлний чадварыг нэмэгдүүлэх', content:'Гадаад хэлний чадварыг нэмэгдүүлэх	Англи болон Япон хэлний ярианы клубыг 7 хоног бүр тогтмол зохион байгуулж, үүгээрээ оюутнуудын ярианы болон харилцааны чадваруудыг нэмэгдүүлэх дээр ажиллаж байна. '},
        {title:'Сонгосон мэргэжлийн мөн чанарыг ойлгох', content:'1,2-р курсэд “Мэргэжил сурталчлах воркшоп” жил бүр тогтмол явуулснаар тухайн мэргэжилтний талаарх практик мэдлэг олгож, суралцаж буй хугацаандаа хичээлдээ хандах хандлагыг сайжруулна. '},
        {title:'Дотоодын ажлын байранд хариуцлагатай ажиллах ', content:'“Сургууль - ажил олгогч хөтөлбөр” санаачлан дотоодын аж ахуй нэгжүүдтэй санамж бичиг байгуулан тогтмол жил бүр төгсөгчдөөс сонгон шалгаруулалт хийж ажилд авах боломжийг хангаж, сургуулийн зүгээс мөн тухайн төгсөгчийг ажлын байранд хариуцлагатай тогтвортой ажиллахад анхаарч байх хөтөлбөр юм/  '},
        {title:'Цахим сургалтын чанарыг сайжруулах', content:'Ковидын нөхцөлд “Цахим сургалтын гарын авлага” боловсруулж, цахим хичээлийг өөрийн сурах арга барилд тааруулан суралцахад зөвлөгөө өгөх, тулгарч буй асуудлыг сургуулиудад уламжлан шийдэхэд туслах, санал хүсэлтийг хаалттай байдлаар авч анализ хийж хөтөлбөр сайжруулахад тусгах.'},

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

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="team-section fix section-padding bg-cover" data-background="/assets/img/service/service-bg.jpg">
            <div className="shape-img float-bob-y">
            <Image src="/assets/img/service/rocket-shape.png" alt="img" width={175} height={229}   />
            </div>
            <div className="shape-img-2 float-bob-y">
            <Image src="/assets/img/service/right-shape-2.png" alt="img" width={112} height={184}   />
            </div>
            <div className="container">
                <div className="team-wrapper style-4">
                    <div className="row g-4 align-items-center">
                        <div className="col-xl-4">
                            <div className="results-left-items">
                               <div className="content">
                                    <h2><span className="count">63</span>%</h2>
                                    <h3>Төгсөгчидөөс</h3>
                                    <p>Мэргэжилээрээ ажиллаж буй.</p>
                               </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="team-content">
                                <div className="section-title">
                                    <div className="sub-title bg-color-2 wow fadeInUp">
                                        <span>Career center</span>
                                    </div>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Зорилго
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                Оюутан бүрийг өөрийгөө таних, зорилгоо тодорхойлох түүндээ хүрэх замд туслах, чиглүүлэх, тэдний найдвартай зөвлөгч-хамтрагч байх. <br/>
                                Карьер төвийн оюутанд үзүүлэх үйлчилгээний роуд мап:
                                1-р курс: Өөрийгөө тодорхойлох шат
                                Өөрийгөө таних, сонирхол, ур чадвар, зан төлөв, сэтгэл хөдлөл, сурах арга барилыг оношлох тест хийж зөвлөгөө өгдөг. <br/><br/>
                                2-р курс: Судалгаа хийх, зорилгоо тодорхойлох шат <br/>
                                Төгсөлтийн дараах сурах болон ажиллах замуудыг нарийвчлан судлахад чиглүүлж гарын авлага өгөх, мэдээллээр хангаж, сонголт хийхэд туслах үйл ажиллагаа эвентүүд зохион байгуулдаг.<br/><br/>
                                3-р курс: Төлөвлөлт хийх шат <br/>
                                Төлөвлөлт хийх маягтын дагуу судалгаа хийж сонгосон замаараа явахад шаардлагатай гадаад хэлний онооны шалгалт, шаардлагатай ур чадварыг эзэмших зэрэг цаг хугацааг нарийн төлөвлөж хамтдаа боловсруулдаг. <br/><br/>
                                4-р курс: Зорилгодоо хүрэх шат <br/>
                                Төлөвлөгөөний дагуу зорилгодоо хүрч чадсан ч түүнийг хэрэгжүүлэхэд шаардлагатай гадаад хэлний чадвар, мэргэжлийн мэдлэг, харилцааны соёл, сэтгэл хөдлөлөө удирдах, бие дааж нийгэмших байдал зэрэгт анхаарч чиглэсэн ажлууд зохион байгуулдаг.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="faq-wrapper mt-5">
                    <div className="faq-accordion-items">
                        <div className="faq-accordion">
                            <div className="accordion" id="accordion">
                                {faqContent.map((item, index) => (
                                    <div key={index} className={`accordion-item mb-3 ${index === openItemIndex ? "active" : "" }`}   data-wow-delay=".3s">
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
        </section>
    );
};

export default WhyChoose4;