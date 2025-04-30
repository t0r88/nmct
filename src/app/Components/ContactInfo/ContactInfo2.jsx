
const ContactInfo2 = () => {
    return (
        <div>
        <section className="contact-info-section fix section-padding">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="contact-info-items text-center active">
                            <div className="icon">
                            <i className="bi bi-geo-alt-fill"></i>
                            </div>
                            <div className="content">
                                <h3>Манай хаяг</h3>
                                <p>
                                Манлай Баатар Дамдинсүрэнгийн Гудамж 43 <br/> Apartment 43, BZD - 25 khoroo, Ulaanbaatar 13372
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="contact-info-items text-center">
                            <div className="icon">
                            <i className="bi bi-envelope-fill"></i>
                            </div>
                            <div className="content">
                                <h3><a href="mailto:info@example.com">info@nmct.edu.mn</a></h3>
                                <p>
                                    Бидэнрүү <br/>
                                    имэйл илгээгээрэй.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="contact-info-items text-center">
                            <div className="icon">
                            <i className="bi bi-telephone-fill"></i>
                            </div>
                            <div className="content">
                                <h3>Hot:<a href="tel:+2086660112">+976 75777799</a></h3>
                                <p>
                                    Бидэнтнй холбогдхыг <br/>
                                    хүсвэл залгаарай.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="contact-section-33 fix section-padding pt-0">
            <div className="container">
                <div className="contact-wrapper-2">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="map-items">
                                <div className="googpemap">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5317.284258895035!2d106.93960578688207!3d47.911889981958076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96922f835ea591%3A0xbec0c2b228d4ab85!2s43%2F1%2C%20BZD%20-%2025%20khoroo%2C%20Ulaanbaatar%2013372!5e1!3m2!1sen!2smn!4v1744075250324!5m2!1sen!2smn" loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-content">
                                <h2>Санал хүсэлт</h2>
                                <p>
                                    Танд ямар нэг санал хүсэлт байгаа бол доорх формыг бөглөн бидэнд илгээнэ үү,
                                </p>
                                <form id="contact-form" className="contact-form-items">
                                    <div className="row g-4">
                                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                            <div className="form-clt">
                                                <span>Нэр*</span>
                                                <input type="text" name="name" id="name" placeholder="Нэр" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                            <div className="form-clt">
                                                <span>Имэйл*</span>
                                                <input type="text" name="email" id="email" placeholder="Имэйл" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                                            <div className="form-clt">
                                                <span>Санал, хүсэлт*</span>
                                                <textarea name="message" id="message" placeholder="Санал, хүсэлт ..."></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 wow fadeInUp" data-wow-delay=".9s">
                                            <button type="submit" className="theme-btn">
                                                Илгээх <i className="bi bi-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>           
        </div>
    );
};

export default ContactInfo2;