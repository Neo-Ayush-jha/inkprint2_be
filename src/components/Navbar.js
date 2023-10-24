import React, { useState, useRef, useEffect } from 'react';
import Logo from '../assets/Logo.png';
import Search from '../assets/search.png';
import Phone from '../assets/phone.png';
import Cart from '../assets/cart.png';
import Login from '../authentication/Login';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const modalRef = useRef();

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowLogin(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="navbar w-[100%]">
        <div className="navbar-header flex justify-between">
          <div className="logo ml-10">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="search-container flex w-[390px] border-[1px] h-[35px] items-center justify-center border-solid border-[#ADADAD] mt-6 ml-6 rounded-[25px]">
            <input type="text" placeholder="Search Product..." className="w-[320px] outline-none bg-none placeholder-[#ADADAD] pr-3" />
            <img src={Search} alt="search" className="w-5 h-5 cursor-pointer" />
          </div>

          <div className="left flex mt-5 mr-10">
            <div className="contact-container flex w-[250px] mt-1 text-center pt-1 pl-4 cursor-pointer">
              <img src={Phone} className="w-4 h-4 mt-1" alt="phone icon" />
              <h5 className="text-custom-text font-[600]">Contact us for bulk order</h5>
            </div>
            <div className="login mr-6">
              <button className="bg-custom-btn text-white w-[90px] h-[40px] rounded-[16px]" onClick={handleLoginClick}>Log in</button>
            </div>
            <div className="cart ml-2 mt-2">
              <img src={Cart} alt="cart icon" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="product-lists w-[100%]">
        <div className="items flex justify-evenly mt-5">
          <h5 className="text-[#777777] font-medium cursor-pointer">All Product</h5>
          <h5 className="text-[#777777] font-medium cursor-pointer">Visiting Cards</h5>
          <h5 className="text-[#777777] font-medium cursor-pointer">Business Essentials</h5>
          <h5 className="text-[#777777] font-medium cursor-pointer">Packaging Printing</h5>
          <h5 className="text-[#777777] font-medium cursor-pointer">Marketing essentials</h5>
          <h5 className="text-[#777777] font-medium cursor-pointer">Display Product</h5>
        </div>
      </div>
      {showLogin && (
        <div ref={modalRef}>
        <Login setShowLogin={setShowLogin} />
        </div>
      )}
    </>
  );
};

export default Navbar;
