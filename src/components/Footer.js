import React from 'react'
import {Link} from 'react-router-dom'
import Line from '../assets/img/line2.png'
import InkLogo from '../assets/img/inkprintc.png'
import Insta from '../assets/img/insta3.png'
import Face from '../assets/img/face3.png'
import You from '../assets/img/you3.png'
import {useNavigate} from 'react-router-dom'

const Footer = () => {
   
  return (
    <>
        <div className='footer-wrapper bg-white md:hidden'>
        <h1 className='text-[#6D6E70] text-xl font-semibold pl-10 pt-5'>Our Products</h1>
            <div className='wrapper flex justify-evenly mt-5'>
            <div className='wrapper1 flex'>
                <div className='items1 mr-5'>
                 <ul>
                    <Link><li className='text-[#ADADAD] mt-3'>Banner</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Bill Books</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Booklets</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>BookMarks</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Bottle Neck Hang Tags</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Box Packaging</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Brochures</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Business Cards</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Button Badges</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Calendars</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Canvas Prints</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Carbonless Forms</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Carry Bags</li></Link>

                 </ul>

                </div>
                <div className='items2 pl-5'>
                <ul>
                <Link><li className='text-[#ADADAD] mt-3'>Catalogs</li></Link>
                <Link><li className='text-[#ADADAD] mt-3'>Certificates</li></Link>
                <Link><li className='text-[#ADADAD] mt-3'>Conference Pads</li></Link>
                <Link><li className='text-[#ADADAD] mt-3'>Counter Cards</li></Link>
                <Link><li className='text-[#ADADAD] mt-3'>Custom Tissue Paper</li></Link>
                <Link><li className='text-[#ADADAD] mt-3'>Customized Mugs</li></Link>
                <Link><li className='text-[#ADADAD] mt-3'>Door Hangers</li></Link>
                <Link><li className='text-[#ADADAD] mt-3'>Embossed Foil Business Cards</li></Link>
                <Link><li className='text-[#ADADAD] mt-3'>Embossed Spot UV Business Cards</li></Link>
                <Link><li className='text-[#ADADAD] mt-3'>Envelopes</li></Link>
                <Link><li className='text-[#ADADAD] mt-3'>Flyers</li></Link>
                <Link><li className='text-[#ADADAD] mt-3'>Gift Vouchers</li></Link>
                <Link><li className='text-[#ADADAD] mt-3'>Graphics T-shirts</li></Link>
                </ul>
                    
                </div>
            </div>
            <div className='wrapper2 flex'>
                <div className='item3  mr-10'>
                    <ul>
                    <Link><li className='text-[#ADADAD] mt-3'>Greeting Cards</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Hang Tags</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Header cards/ Bag Toppers</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>High Texture Luxury Visiting Cards</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>ID Cards</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Invitation Cards</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Lanyards</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Letterheads</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Magazines</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Medical Prescription Pads</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Menus</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Notebooks</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Notepads</li></Link>

                    </ul>
                </div>
                <div className='items4'>
                    <ul>
                    <Link><li className='text-[#ADADAD] mt-3'>Photo Books</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Photo Mugs</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Photo T-Shirts</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Placemats</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Pocket Folders</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>PostCards</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Posters</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Printed Butter Papers</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Printed Packaging Tapes</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Product Labels & Stickers</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Receipt Books</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Roll Up Standee/Banners</li></Link>
                  


                    </ul>
                </div>
                <div className='items5 ml-10'>
                    <ul>
                    <Link><li className='text-[#ADADAD] mt-3'>Sandwich Business Cards</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Stickers & Labels</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>T-Shirts</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Table tent Cards</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Ultra Thick Business Cards</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Vinyl Prints & Posters(Large)</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Visiting Cards</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Wrapping Papers</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Greeting Cards</li></Link>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        <div className='footer_wrapper_2 bg-white hidden md:block'>
        <h1 className='text-[#6D6E70] text-xl font-semibold pl-3 pt-5 pb-3'>Our Products</h1>
            <div className='flex justify-between'>
            <div className='items'>
                 <ul>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Banner</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Bill Books</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Booklets</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>BookMarks</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Bottle Neck Hang Tags</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Box Packaging</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Brochures</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Business Cards</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Button Badges</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Calendars</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Canvas Prints</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Carbonless Forms</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Carry Bags</li></Link>
                    
                <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Catalogs</li></Link>
                <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Certificates</li></Link>
                <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Conference Pads</li></Link>
                <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Counter Cards</li></Link>
                <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Custom Tissue Paper</li></Link>
                <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Customized Mugs</li></Link>
                <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Door Hangers</li></Link>
                <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Embossed Foil Business Cards</li></Link>
                <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Embossed Spot UV Business Cards</li></Link>
                <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Envelopes</li></Link>
                <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Flyers</li></Link>
                <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Gift Vouchers</li></Link>
                <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Graphics T-shirts</li></Link>
               
                <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Greeting Cards</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Hang Tags</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2'>Header cards/ Bag Toppers</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-2 text-[12px]'>High Texture Luxury Visiting Cards</li></Link>
                  

                 </ul>

                </div>
                <div className='item2'>
                    <ul>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Lanyards</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Letterheads</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Magazines</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Medical Prescription Pads</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Menus</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Notebooks</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Notepads</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Photo Books</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Photo Mugs</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Photo T-Shirts</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Placemats</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Pocket Folders</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>PostCards</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Posters</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Printed Butter Papers</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Printed Packaging Tapes</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Product Labels & Stickers</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Receipt Books</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Roll Up Standee/Banners</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Sandwich Business Cards</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Stickers & Labels</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>T-Shirts</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Table tent Cards</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Ultra Thick Business Cards</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Vinyl Prints & Posters(Large)</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Visiting Cards</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Wrapping Papers</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Greeting Cards</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>ID Cards</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 text-sm pl-3'>Invitation Cards</li></Link>
                    </ul>
                </div>

            </div>
        </div>
        <div className='footer2-wr4pper mt-[40px] md:hidden'>
            <div className='footer2-wrapper1 flex justify-center items-center mt-[50px]'>
            <img src={Line} alt='break-line' />
            </div>
           <div className='footer2-wrapper3 flex justify-between mt-10'>
           <div className='logocopyright ml-8'>
             <img src={InkLogo} alt='inklogo with copyright'/>
           </div>
           <div className='information'>
                <ul>
                    <h4 className='text-[#6D6E70] text-2xl font-semibold '>Information</h4>
                    <Link><li className='text-[#ADADAD] mt-3'>About Us</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Contact Us</li></Link>
                    <Link to="/blogs"><li className='text-[#ADADAD] mt-3'>Blog</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Privacy Policy</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Terms & Conditions</li></Link>

                </ul>
            </div>
            <div className='myaccount'>
                <ul>
                    <h4 className='text-[#6D6E70] text-2xl font-semibold '>My Account</h4>
                    <Link><li className='text-[#ADADAD] mt-3'>Account Details</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Orders</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Wishlist</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3'>Cart</li></Link>

                </ul>
            </div>
            <div className='socialmeida'>
             <h4 className='text-[#6D6E70] text-2xl font-semibold '>Follow Us On</h4>
             <div className='flex justify-around mt-3'>
                    <img src={Insta} alt='instagram icon' className='w-5 h-5' />
                    <img src={Face} alt='facebook icon' className='w-5 h-5' />
                    <img src={You} alt='youtube icon' className='w-5 h-5' />
                    </div>
            </div>
            <div className='address w-[290px]'>
                <ul>
                    <h4 className='text-[#6D6E70] text-2xl font-semibold '>Address</h4>
                    <li className='text-[#ADADAD] mt-3'>Turtle Media Pvt. Ltd., 9 DSIDC Sheds, IInd Floor, Okhla Industrial Area Phase I, New Delhi - 110020, India</li>
                    <li className='text-[#ADADAD]'><span className='text-[#9A9A9A] font-medium'>Phone:</span>+91-977-290-6080 (India)</li>
                    <li className='text-[#ADADAD]'><span className='text-[#9A9A9A] font-medium' >Email:</span>Contact@Inkprint.In</li>
                </ul>
            </div>
           </div>
        </div>
        <div className='footer3_wrapper mt-[30px] hidden md:block w-[100%] '>
        <div className='footer2-wrapper1 flex justify-center items-center mt-[40px] mb-[40px]'>
            <img src={Line} className='w-[200px]' alt='break-line' />
            </div>
            <div className='footer3_wrapper flex justify-evenly w-[100%]'>
            <div className='information'>
                <ul>
                    <h4 className='text-[#6D6E70] text-xl font-semibold pl-2'>Information</h4>
                    <Link><li className='text-[#ADADAD] mt-3 pl-2'>About Us</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 pl-2'>Contact Us</li></Link>
                    <Link to="/blogs"><li className='text-[#ADADAD] mt-3 pl-2'>Blog</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 pl-2'>Privacy Policy</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 pl-2'>Terms & Conditions</li></Link>

                </ul>
                <div className='address w-[250px] mt-10'>
                <ul>
                    <h4 className='text-[#6D6E70] text-xl font-semibold pl-2'>Address</h4>
                    <li className='text-[#ADADAD] mt-3 pl-2'>Turtle Media Pvt. Ltd., 9 DSIDC Sheds, IInd Floor, Okhla Industrial Area Phase I, New Delhi - 110020, India</li>
                    <li className='text-[#ADADAD] pl-2'><span className='text-[#9A9A9A] font-medium'>Phone:</span>+91-977-290-6080 (India)</li>
                    <li className='text-[#ADADAD] pl-2'><span className='text-[#9A9A9A] font-medium' >Email:</span>Contact@Inkprint.In</li>
                </ul>
            </div>
            </div>
            <div className='myaccount  0 w-[100%]'>
                <ul>
                    <h4 className='text-[#6D6E70] text-xl pl-2 font-semibold '>My Account</h4>
                    <Link><li className='text-[#ADADAD] mt-3 pl-2'>Account Details</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 pl-2'>Orders</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 pl-2'>Wishlist</li></Link>
                    <Link><li className='text-[#ADADAD] mt-3 pl-2'>Cart</li></Link>

                </ul>
            </div>
            </div>
            <div className='logos_follows flex justify-between mt-[60px]'>
            <div className='logocopyright ml-1 mt-[20px] mb-[40px]'>
             <img src={InkLogo} alt='inklogo with copyright' className='w-[140px] h-[60px]'/>
           </div>
           <div className='socialmeida mr-4 mt-4  mb-[40px]'>
             <h4 className='text-[#6D6E70] text-xl font-semibold '>Follow Us On</h4>
             <div className='flex justify-around mt-3'>
                    <img src={Insta} alt='instagram icon' className='w-5 h-5' />
                    <img src={Face} alt='facebook icon' className='w-5 h-5' />
                    <img src={You} alt='youtube icon' className='w-5 h-5' />
                    </div>
            </div>

            </div>
        </div>
    </>
  )
}

export default Footer