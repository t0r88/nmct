import Image from "next/image";

const Value1 = () => {

    const chooseContent = [
        {iconclass:'bi bi-people', title:'Саруул ухаан', content:'Сэтгэн бодох, танин мэдэхүйн чадваруудыг тогтвортой хөгжүүлэх, асуудлыг нэг талаас биш олон талаас хардаг, стратегич алсын хараатай, аливаа зүйлд шүүмжлэлт сэтгэлгээгээр ханддаг, бусдын болон өөрийн амна хүлээсэн хариуцлагаа ухамсарладаг, бусдын үзэл бодолд хүндэтгэлтэй хандаж чаддаг байхыг хэлнэ.'},
        {iconclass:'bi bi-pie-chart', title:'Эрүүл бие', content:'Эрүүл биед саруул ухаан оршино. Эрүүл мэндийн боловсрол нь эрүүл чийрэг буюу эрүүл амьдралын хэв маягт сургахаас гадна хүний өөртөө итгэлтэй байдал, сахилга баттай байх, багаар ажиллах ур чадваруудыг давхар сайжруулдаг байна.'},
        {iconclass:'bi bi-cloudy', title:'Сайхан сэтгэл', content:'21-р зуунд даяаршин буй нийгэмд бусадтай хэрхэн зөвхарилцах, хэрхэн өөрийгөө таньж мэдэх, сэтгэлийн эрүүл мэндийг хүртэл хэрхэн анзаарч мэдэрч байх тухай суралцах нь зүйтэй юм.'},
      ]; 

    return (
        <section className="value-section fix section-padding section-bg pt-0">
        <div className="value-shape">
        <Image src="/assets/img/value-shape.png" alt="img" width={213} height={602}   />
        </div>
        <div className="value-shape-2">
        <Image src="/assets/img/value-shape-2.png" alt="img" width={210} height={392}   />
        </div>
        <div className="container">
            <div className="section-title text-center wow fadeInUp" data-wow-delay=".3s">
                <h2>Шинэ Монгол Алтан гурвалжин</h2>
            </div>
            <div className="row">
            {chooseContent.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="value-box-items">
                        <div className="icon">
                           <i className={item.iconclass}></i>
                        </div>
                        <div className="content">
                            <h3>{item.title}</h3>
                            <p>
                            {item.content}
                            </p>
                        </div>
                    </div>
                </div>
))}


            </div>
        </div>
    </section>
    );
};

export default Value1;