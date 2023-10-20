import React from 'react'
import Line from '../assets/line2.png';
import partner from '../assets/partner1.png'
import partner2 from '../assets/partner2.png'
import partner3 from '../assets/partner3.png'
import partner4 from '../assets/partner4.png'
import partner5 from '../assets/partner5.png'
import partner6 from '../assets/partner6.png'
import Arrow from '../assets/arrow.png'
import ProductCard from '../components/ProductCard';
import Sproduct from '../assets/s_product.png'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const data=[{
      title:'Packaging for gifts',
      price:'1234'
  },{
    title:'Packaging for gifts',
    price:'1234'
},{
  title:'Packaging for gifts',
  price:'1234'
},{
  title:'Packaging for gifts',
  price:'1234'
},{
  title:'Packaging for gifts',
  price:'1234'
},{
  title:'Packaging for gifts',
  price:'1234'
},{
  title:'Packaging for gifts',
  price:'1234'
},{
  title:'Packaging for gifts',
  price:'1234'
},]
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius:'50%' }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius:'50%' }}
      onClick={onClick}
    />
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

  return (
    <>
      <div className='hero1 w-[100%]'>
        <div className='hero-text pl-10 pt-6 pb-5 ml-5 mt-14'>
          <h1 className='text-4xl text-[#000000]'>Elevate Your Brand with InkPrint: Unleash the Power of <span className='text-custom-text-hero'>Exceptional Packaging Solutions and Design Expertise.</span></h1>
        </div>
        <div className='hero-text-2 mt-10 ml-16'>
          <p className='text-[#6D6E70] text-lg'>Your Brand, Our Box: Crafting Packaging Magic with InkPrint.</p>
        </div>
      </div>
      <div className='product_carousel w-[100%]'>
       <div className='w-5/6 m-auto'>
        <div className='mt-20'>
        <Slider {...settings}>
        {data.map((item,index) => (
          <div className='w-[400px] relative ' key={index} >
            <img src={Sproduct} className=''/>
            <div className='pdetail flex justify-between relative mt-[-50px] pb-5 bg-white bg-opacity-90 '>
             <div className=''>
              <h1 className='text-lg text-[#000000] font-semibold pt-3  pl-3'>{item.title}</h1>
              <h6 className='text-[#ADADAD] text-sm pl-3'>starting from {item.price}₹</h6>
             </div>
             <img src={Arrow} className='w-5 h-5 mt-7 mr-2'  />
            </div>
          </div>

        ))

        }
        </Slider>

        </div>
       </div>

      </div>
      <div className='products-wrapper bg-custm-bg-product mt-10 mb-10'>
      <h1 className='pt-10 pl-10 text-3xl text-custom-text-p'>Packaging Printing</h1>
       <div className='product-wrapper1 flex justify-evenly mt-10 '>
          <ProductCard />
          <ProductCard />
          <ProductCard />
       </div>
       <div className='product-wrapper2 flex justify-evenly mt-10'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
       </div>
       <div className='product-wrapper3 flex justify-evenly mt-10 '>
          <ProductCard />
          <ProductCard />
          <ProductCard />
       </div>
        

      </div>
      <div className='partners ml-10 mt-[50px] mb-[50px]'>
        <div className='ourpartner flex'>
          <h1 className='text-[#000000] text-2xl font-semibold'>Our Partners</h1>
          <img src={Line} className='w-[420px] h-1 mt-5 ml-2'/>
        </div>
        <div className='partners-images flex justify-evenly mt-10 mr-[52px]'>

          <img src={partner} alt='ficci image' className='h-[100px] w-[130px]'/>
          <img src={partner2} alt='honda image' className='h-[100px] w-[130px]'/>
          <img src={partner3} alt='ixigo image' className='h-[100px] w-[130px] mt-3'/>
          <img src={partner4} alt='live mint image' className='h-[100px] w-[130px] mt-3'/>
          <img src={partner5} alt='harvard business review image' className='h-[100px] w-[130px] mt-3'/>
          <img src={partner6} alt='oxford image' className='h-[100px] w-[130px]'/>

        </div>
      </div>

      <div className='aboutus-hero w-[100%] h-[500px] relative bg-[#E7E1C3] '>
      <div className='about-wrapp '>
      <div className='about-wrapper w-[70%]  border-solid border-4 border-[#FFFFFF] top-[50px] left-[220px] relative rounded-[25px] '>
        <h2 className='text-[#344054] font-semibold text-2xl pt-3 pl-3'>About Us</h2>
        <p className='pt-3 pl-3 pb-3 pr-3 text-[18px] text-[#344054]'>At InkPrint, we are more than just a printing company; we are your creative partners in bringing your ideas to life. With a rich history of delivering excellence in digital printing, offset printing, and a wide range of marketing solutions, we have established ourselves as a trusted name in Delhi-NCR. Our commitment to quality, innovation, and customer satisfaction sets us apart. Whether you need eye-catching business marketing materials, immaculate offset prints, or attention-grabbing outdoor advertising, we have the expertise and state-of-the-art technology to make it happen. We pride ourselves on being the go-to printing solution provider in the region, offering versatile printing options, reliability, and cost-effective services. Let us be the bridge between your vision and reality. Choose InkPrint for all your printing needs and experience the difference.</p>
        <div className='viewmore flex ml-[800px] mb-[50px] mt-[30px] cursor-pointer'>
         <button className='text-[#787878]'>View more</button><img src={Arrow} className='w-5 h-5  ml-2'  />
       </div>
       </div>
      
      </div>

      </div>
    </>
  )
}

export default Home