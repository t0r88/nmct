import Image from "next/image";

const Marquee3 = () => {
    return (
        <div className="marquee-section section-padding pt-0">
            <div className="mycustom-marque theme-blue-bg">
                <div className="scrolling-wrap">
                    <div className="comm">
                    <div className="cmn-textslide stroke-text"><Image src="/assets/img/has.png" alt="img" width={50} height={54}   /><a href="https://admission.nmct.edu.mn">Бүртгүүлэх</a></div>
                        <div className="cmn-textslide"><Image src="/assets/img/has.png" alt="img" width={50} height={54}   /><a href="https://admission.nmct.edu.mn">Бүртгүүлэх</a></div>
                        <div className="cmn-textslide stroke-text"><Image src="/assets/img/has.png" alt="img" width={50} height={54}   /><a href="https://admission.nmct.edu.mn">Бүртгүүлэх</a></div>
                        <div className="cmn-textslide"><Image src="/assets/img/has.png" alt="img" width={50} height={54}   /><a href="https://admission.nmct.edu.mn">Бүртгүүлэх</a></div>
                    </div>
                    <div className="comm">
                    <div className="cmn-textslide stroke-text"><Image src="/assets/img/has.png" alt="img" width={50} height={54}   />Барилгын инженер</div>
                        <div className="cmn-textslide"><Image src="/assets/img/has.png" alt="img" width={50} height={54}   />Механик инженер</div>
                        <div className="cmn-textslide stroke-text"><Image src="/assets/img/has.png" alt="img" width={50} height={54}   />Компьютерын ухаан</div>
                        <div className="cmn-textslide"><Image src="/assets/img/has.png" alt="img" width={50} height={54}   />Химийн инженерчлэл</div>
                    </div>   
                </div>
            </div>
        </div>
    );
};

export default Marquee3;