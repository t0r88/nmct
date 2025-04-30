import parse from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';

const WhatWeDo = () => {

    const heading = { 
        subtitle:"Уриа",
        title:'Өөрийн гараар улсаа бүтээнэ',
        content:'.',  
      }

    const whyContent = [
        {img:'/assets/img/service/s1.png', title:'Сургалтын хөтөлбөрийн онцлог', content:'Онолын хичээлийг туршилтаар бататган дадлага ажил хийх. Суралцагч төвтэй арга зүйгээр сургалтыг зохион байгуулах. Мэргэжил сонголтоо 2-р курсээс хийх боломжтой.'},
        {img:'/assets/img/service/idea-1.png', title:'ОЮУТНЫ КАРЬЕР СОНГОЛТЫН ДЭМЖЛЭГ', content:'Сургалтын төлбөрийн хөнгөлөлт эдлэх боломж. Японы Коосэнд 100% тэтгэлэгтэй суралцах эрх. Япон улсын засгийн газрын тэтгэлэгээр суралцах эрх. Суралцангаа мэргэжлийн компанид цалинтай дадлага хийх ABU робокон тэмцээнд оролцож мэргэжлийн ур чадвараа дээшлүүлэх.'},
        {img:'/assets/img/service/goal-1.png', title:'КРЕДИТ ДҮЙЦҮҮЛЭЛТ', content:'6 ИХ ДЭЭД СУРГУУЛЬ МУИС, ШУТИС, ХААИС, ҮБХИС зэрэг ИС-ийн 3-р курсэд шилжин суралцах Японы Тоёохаши ИС, Сэндай технологийн коллежийн ахисан түвшинд дэвшин суралцах'},
      ];  

    return (
        <section className="service-section fix section-padding">
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <div className="sub-title wow fadeInUp">
                            <span>{heading.subtitle}</span>
                        </div>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        {parse(heading.title)}
                        </h2>
                    </div>
                    <p className="wow fadeInUp" data-wow-delay=".5s">
                    {parse(heading.content)}
                    </p>
                </div>
                <div className="row">
                {whyContent.map((item, i) => (
                    <div key={i} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-box-items">
                            <div className="icon">
                            <Image src={item.img} alt="img" width={60} height={50}   />
                            </div>
                            <div className="content"> 
                                <h4><Link href="/service/service-details">{item.title}</Link></h4>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    </div>
                    ))}


                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;