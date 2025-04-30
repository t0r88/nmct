import BreadCumb from '@/app/Components/Common/BreadCumb';
import Services3 from '@/app/Components/Services/Services3';
import WhyChoose4 from '@/app/Components/WhyChoose/WhyChoose4';
import React from 'react';

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/banner-bg3.png"
        Title="Карьер төв"
    ></BreadCumb>
    <WhyChoose4></WhyChoose4>
    <Services3></Services3>
    
    </div>
  );
};

export default page;