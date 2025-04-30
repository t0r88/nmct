import Image from "next/image";
import Link from "next/link";

const Blog1 = () => {

    const blogContent = [
        {img:'/assets/img/news/01.jpg', title:'Importers achieve savings through the First Sale rule!'},
        {img:'/assets/img/news/02.jpg', title:'Is now the right time to invest in an enterprise'},
        {img:'/assets/img/news/03.jpg', title:'Focus logistics secure new landmark Contracts'},
        {img:'/assets/img/news/04.jpg', title:'Transid Named a Finalist For Year 25 Best Choice'},
      ]; 

    return (
        <section className="news-section section-padding section-bg">
            <div className="left-shape">
            <Image src="/assets/img/news/left-shape.png" alt="img" width={460} height={1006}   />
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="sub-title bg-color-2 wow fadeInUp">
                        <span>Мэдээ</span>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Blog1;