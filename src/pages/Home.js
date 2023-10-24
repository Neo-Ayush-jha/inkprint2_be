import React, { useEffect, useRef, useState } from 'react';
import Line from '../assets/line2.png';
import partner from '../assets/partner1.png';
import partner2 from '../assets/partner2.png';
import partner3 from '../assets/partner3.png';
import partner4 from '../assets/partner4.png';
import partner5 from '../assets/partner5.png';
import partner6 from '../assets/partner6.png';
import Arrow from '../assets/arrow.png';
import ProductCard from '../components/ProductCard';
import Sproduct from '../assets/s_product.png';
import Slider from 'react-slick';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const Home = () => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [{
    title: 'Packaging for gifts 1',
    price: '1234',
    image:'http://res.cloudinary.com/brijesh070707/image/upload/v1698140625/rs1tjj6rftr8huph0cwf.png'
  }, {
    title: 'Packaging for gifts 2',
    price: '1234',
    image:'http://res.cloudinary.com/brijesh070707/image/upload/v1698138171/s3olgyjlddqdmglkqka0.png'
  }, {
    title: 'Packaging for gifts 3',
    price: '1234',
    image:'http://res.cloudinary.com/brijesh070707/image/upload/v1698140625/rs1tjj6rftr8huph0cwf.png'
  }, {
    title: 'Packaging for gifts 4',
    price: '1234',
    image:'http://res.cloudinary.com/brijesh070707/image/upload/v1698138171/s3olgyjlddqdmglkqka0.png'
  }, {
    title: 'Packaging for gifts 5',
    price: '1234',
    image:'http://res.cloudinary.com/brijesh070707/image/upload/v1698140625/rs1tjj6rftr8huph0cwf.png'
  }, {
    title: 'Packaging for gifts 6',
    price: '1234',
    image:'http://res.cloudinary.com/brijesh070707/image/upload/v1698138171/s3olgyjlddqdmglkqka0.png'
  }, {
    title: 'Packaging for gifts 7',
    price: '1234',
    image:'http://res.cloudinary.com/brijesh070707/image/upload/v1698140625/rs1tjj6rftr8huph0cwf.png'
  }, {
    title: 'Packaging for gifts 8',
    price: '1234',
    image:'http://res.cloudinary.com/brijesh070707/image/upload/v1698138171/s3olgyjlddqdmglkqka0.png'
  }];

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius: '50%' }}
        onClick={onClick}
      >
        ←
      </div>
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius: '50%' }}
        onClick={onClick}
      >
        →
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const handleNext = () => {
    if (currentIndex < data.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.mousewheel.enable();
    }
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.mousewheel.enable();
    }
  }, []);

  return (
    <>
      <div className='hero1 w-[100%]'>
        <div className='hero-text pl-10 pt-6 pb-5 ml-1 mt-14'>
          <h1 className='text-3xl text-[#000000]'>Elevate Your Brand with InkPrint: Unleash the Power of <span className='text-custom-text-hero'>Exceptional Packaging Solutions and Design Expertise.</span></h1>
        </div>
        <div className='hero-text-2 mt-10 ml-16'>
          <p className='text-[#6D6E70] text-lg'>Your Brand, Our Box: Crafting Packaging Magic with InkPrint.</p>
        </div>
      </div>

      {/* <div className="carousel-container flex justify-center items-center mt-10">
        <button
          className="carousel-button prev w-[50px] h-[50px] rounded-[50%] text-3xl text-[#1B9FD3] border border-[#1B9FD3] pb-1"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          ←
        </button>
        <div className="carousel flex ease-in-out">
          {data.slice(currentIndex, currentIndex + 3).map((item, index) => (
            <div className='w-[300px] ml-2 relative' key={currentIndex + index}>
              <img src={Sproduct} alt='product' />
              <div className='pdetail flex justify-between relative mt-[-50px] pb-5 bg-white bg-opacity-90 '>
                <div>
                  <h1 className='text-lg text-[#000000] font-semibold pt-3 pl-3'>{item.title}</h1>
                  <h6 className='text-[#ADADAD] text-sm pl-3'>starting from {item.price}₹</h6>
                </div>
                <img src={Arrow} className='w-5 h-5 mt-7 mr-2' alt='arrow' />
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-button next w-[50px] h-[50px] rounded-[50%] text-3xl text-[#1B9FD3] border border-[#1B9FD3] pb-1"
          onClick={handleNext}
          disabled={currentIndex === data.length - 3}
        >
          →
        </button>
      </div> */}
      <Swiper
        slidesPerView={3}
        spaceBetween={1}
        slidesPerGroup={3}
        cssMode={true}
        navigation={false}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        ref={swiperRef}
        Mousewheel={true}
       
       
        className="mySwiper"
      >
         {data.map((item, index) => (
          <SwiperSlide>
            <div className='w-[400px] relative m-10 ml-[60px]' key={index}>
              <img src={item.image} className='w-[350px]' alt='product' />
              <div className='pdetail flex justify-between relative mt-[-50px] pb-5 bg-white bg-opacity-90 '>
                <div>
                  <h1 className='text-lg text-[#000000] font-semibold pt-3 pl-3'>{item.title}</h1>
                  <h6 className='text-[#ADADAD] text-sm pr-5'>starting from {item.price}₹</h6>
                </div>
                <img src={Arrow} className='w-5 h-5 mt-7 mr-[80px]' alt='arrow' />
              </div>
            </div>
            </SwiperSlide>
          ))}


      </Swiper>

      <div className='products-wrapper bg-custm-bg-product mt-10 mb-10'>
        <h1 className='pt-10 pl-10 text-3xl text-custom-text-p'>Packaging Printing</h1>
        <div className='product-wrapper1 flex justify-evenly mt-10 '>
          <ProductCard title="Printed packaging BOPP tape" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698136545/bxoc4uhlztsqgirzgkhf.png" />
          <ProductCard title="Paper Bags" image="https://res.cloudinary.com/brijesh070707/image/upload/v1698135316/vzzj91idljqccf0budxw.png" />
          <ProductCard title="Soap Boxes" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698136642/gjuclnnqcrbeooz2emxx.png" />
        </div>
        <div className='product-wrapper2 flex justify-evenly mt-10'>
          <ProductCard title="Custom Tissue Paper" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698136716/misjnm8edld4alnm4jxb.png" />
          <ProductCard title="Wrapping Paper" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698136803/cqnw5dcqes35rsfn1mwr.png" />
          <ProductCard title="Printed Butter Paper" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698136879/aguyadvayl6fs6utpjz9.png" />
        </div>
        <div className='product-wrapper3 flex justify-evenly mt-10 '>
          <ProductCard title="Header Cards/ Bag Toppers" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698136954/fojd7k29vgrama0viliv.png" />
          <ProductCard title="Hang Tags" image='http://res.cloudinary.com/brijesh070707/image/upload/v1698137036/mbths1tqxq3itoqtquqq.png' />
          <ProductCard title="Product Labels & Stickers" image="http://res.cloudinary.com/brijesh070707/image/upload/v1698137104/rmdmdxm8ybjxjssjeghf.png" />
        </div>
      </div>

      <div className='partners ml-10 mt-[50px] mb-[50px]'>
        <div className='ourpartner flex'>
          <h1 className='text-[#000000] text-2xl font-semibold'>Our Partners</h1>
          <img src={Line} className='w-[420px] h-1 mt-5 ml-2' alt='line' />
        </div>
        <div className='partners-images flex justify-evenly mt-10 mr-[52px]'>

          <img src={partner} alt='ficci image' className='h-[90px] w-[120px]' />
          <img src={partner2} alt='honda image' className='h-[90px] w-[120px]' />
          <img src={partner3} alt='ixigo image' className='h-[90px] w-[120px] mt-3' />
          <img src={partner4} alt='live mint image' className='h-[90px] w-[120px] mt-3' />
          <img src={partner5} alt='harvard business review image' className='h-[90px] w-[120px] mt-3' />
          <img src={partner6} alt='oxford image' className='h-[90px] w-[120px]' />

        </div>
      </div>

      <div className='aboutus-hero w-[100%] h-[500px] relative bg-[#E7E1C3] '>
        <div className='about-wrapp '>
          <div className='about-wrapper w-[70%]  border-solid border-4 border-[#FFFFFF] top-[50px] left-[180px] relative rounded-[25px] '>
            <h2 className='text-[#344054] font-semibold text-xl pt-3 pl-3'>About Us</h2>
            <p className='pt-3 pl-3 pb-3 pr-3 text-[15px] text-[#344054]'>At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life. With a rich history of delivering excellence in digital printing, offset printing, and a wide range of marketing solutions, we have established ourselves as a trusted name in Delhi-NCR. Our commitment to quality, innovation, and customer satisfaction sets us apart. Whether you need eye-catching business marketing materials, immaculate offset prints, or attention-grabbing outdoor advertising, we have the expertise and state-of-the-art technology to make it happen. We pride ourselves on being the go-to printing solution provider in the region, offering versatile printing options, reliability, and cost-effective services. Let us be the bridge between your vision and reality. Choose InkPrint for all your printing needs and experience the difference.</p>
            <div className='viewmore flex ml-[700px] mb-[50px] mt-[30px] cursor-pointer'>
              <button className='text-[#787878]'>View more</button><img src={Arrow} className='w-5 h-5  ml-2' alt='arrow' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
