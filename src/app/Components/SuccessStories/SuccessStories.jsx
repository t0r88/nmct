"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const SuccessStories = () => {

        useEffect(() => {
            loadBackgroudImages();
        }, []);

        
    return (
        <section className="audience-section fix section-padding bg-cover" data-background="/assets/img/audience-bg.jpg">
        <div className="container">
            <div className="audience-wrapper">
                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="audience-content">
                            <div className="section-title">
                                <div className="sub-title bg-color-3 wow fadeInUp">
                                    <span className="wow fadeInUp">Карьер төв</span>
                                </div>
                                <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                Төгсөгч бүрийг ирээдүйд аз жаргалтай амьдрах замаа олоход нь туслан чиглүүлэх сурагч, оюутан,
төгсөгчдийн найдвартай зөвлөгч, хамтрагч байхад “Карьер төв”-ийн эрхэм зорилго оршино.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="audience-right">
                            <div className="audience-img wow fadeInUp" data-wow-delay=".3s">
                            <Image src="/assets/img/audience-img.jpg" alt="img" width={333} height={391}   />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default SuccessStories;