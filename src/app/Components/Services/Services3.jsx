import Image from "next/image";
import Link from "next/link";

const Services3 = () => {

    const chooseContent = [
        {img:'/assets/img/service/icon-1.png', title:'Өөртөө итгэх итгэл нэмэгдүүлэх', content:'"Зоригжуулах - EQ хөгжүүлэх” хөтөлбөрөөр дамжуулан нийгмийн харилцаанд тулгарах асуудалд сэтгэл зүйн бэлтгэлтэй байх, даван туулах чадвар олгох'},
        {img:'/assets/img/service/icon-2.png', title:'Хувь хүний идэвх санаачлага, оролцоог сайжруулах ', content:'Анги бүрийн онцлогод нийцүүлэн хамрагдах боломжтой, нээлттэй зарлагддаг хөтөлбөрүүдийн талаарх нэгдсэн танилцуулга жил бүр хийдэг. Үүгээр ач холбогдлыг тайлбарлах, өөрийн онцлог чадварт нийцсэн боломжийг олж харах, оролдож үзэхийг дэмжих.'},
        {img:'/assets/img/service/icon-3.png', title:'Нийгмийн идэвх санаачлага, оролцоог нэмэгдүүлэх', content:'Карьер хөгжлийн төв оюутнуудыг орчноо өөрчлөх, бусад салбарын хүмүүстэй танилцаж өөрийгөө нээх, комфорт зоноос гаргах зорилгоор төрөл бүрийн сайн дурын ажил, хөтөлбөрүүдийг зарлаж, оюутнуудыг хамрагдуулдаг.'},
        {img:'/assets/img/service/icon-4.png', title:'Эсээ, CV бичих чадварыг нэмэгдүүлэх', content:'Монбушо тэтгэлгийн судалгааны эсээ бичих гарын авлага боловсруулж, эсээ бичих зурган зөвлөмжүүдийг цахимаар хүргэж байна. CV бичих сургалт орж, оюутан бүрийн CV-нд зөвлөмж өгч ажиллаж байна. '},
        {img:'/assets/img/service/icon-5.png', title:'Гадаад хэлний чадварыг нэмэгдүүлэх', content:'Англи болон Япон хэлний ярианы клубыг 7 хоног бүр тогтмол зохион байгуулж, үүгээрээ оюутнуудын ярианы болон харилцааны чадваруудыг нэмэгдүүлэх дээр ажиллаж байна.'},
        {img:'/assets/img/service/icon-6.png', title:'Сонгосон мэргэжлийн мөн чанарыг ойлгох', content:'1,2-р курсэд “Мэргэжил сурталчлах воркшоп” жил бүр тогтмол явуулснаар тухайн мэргэжилтний талаарх практик мэдлэг олгож, суралцаж буй хугацаандаа хичээлдээ хандах хандлагыг сайжруулна.'},
      ]; 

    return (
        <section className="service-section fix section-padding">
            <div className="container">
                <div className="row g-4">

                {chooseContent.map((item, i) => (
                    <div key={i} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-box-items mt-0">
                            <div className="icon">
                            <Image src={item.img} alt="img" width={60} height={50}   />
                            </div>
                            <div className="content"> 
                                <h4>{item.title}</h4>
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

export default Services3;