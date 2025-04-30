import BreadCumb from '@/app/Components/Common/BreadCumb';
import ContactInfo2 from '@/app/Components/ContactInfo/ContactInfo2';
import React from 'react';

const page = () => {
  return (
    <div>
          <BreadCumb
            bgimg="/assets/img/banner-bg3.png"
            Title="Холбоо барих"
        ></BreadCumb>  
        <ContactInfo2></ContactInfo2>      
    </div>
  );
};

export default page;