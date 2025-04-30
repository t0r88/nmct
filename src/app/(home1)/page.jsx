import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import Marquee3 from '../Components/Marquee/Marquee3';
import WhatWeDo from '../Components/WhatWeDo/WhatWeDo';
import About1 from '../Components/About/About1';
import CaseStudy3 from '../Components/CaseStudy/CaseStudy3';
import SuccessStories from '../Components/SuccessStories/SuccessStories';
import Testimonial1 from '../Components/Testimonial/Testimonial1';
import ContactInfo1 from '../Components/ContactInfo/ContactInfo1';
import Blog1 from '../Components/Blog/Blog1';

const page = () => {
    return (
        <div>
            <HeroBanner1></HeroBanner1>
            <Marquee3></Marquee3>
            <WhatWeDo></WhatWeDo>
            <About1></About1>
            <CaseStudy3></CaseStudy3>
            <SuccessStories></SuccessStories>
            <Testimonial1></Testimonial1>
            <ContactInfo1></ContactInfo1>
            <Blog1></Blog1>
        </div>
    );
};

export default page;