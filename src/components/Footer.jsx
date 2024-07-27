import React from "react";
import { Element } from "react-scroll";

import {
  FaInstagram,
  FaPinterest,
  FaSquareFacebook,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import "./Footer.css";
export default function Footer() {
  return (
    <>
      <Element name="contact" className="element">
        <div className="footer-wrapper">
          <div className="footer-deco">
            <div className="foot-contact">
              <h5>CONTACT US</h5>
              <p>Address: Bhubaneswar</p>
              <p>Phone: 9078850484 </p>
              <p>Email: projecthub@gmail.com</p>
              <p>Working Days/Hours: Mon - Sat : 11:00 AM - 6:00 PM</p>
              <div className=" foot-inner">
                <h5>Follow us</h5>
                <div className="icon-deco">
                  <FaSquareFacebook />

                  <FaSquareXTwitter />

                  <FaPinterest />

                  <FaYoutube />

                  <FaInstagram />
                </div>
              </div>
            </div>
            <div>
              <h5>COUSTOMER SERVICE</h5>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              {/* <p>Refund, Return & Cancellation Policy </p> */}
            </div>
            <div>
              <h5>MY ACCOUNT</h5>
              <p>My account</p>
              <p>Wishlist</p>
              <p>Checkout</p>
              <p>Cart</p>
              {/* <p>Coupons</p> */}
            </div>
            {/* <div>
            <h5>USEFUL LINK</h5>
            <p>Bulk Buy</p>
            <p>Request a Quote</p>
            <p>Become Reseller</p>
            <p>Free Project Ideas</p>
          </div> */}
          </div>
        </div>
        <div className="foot-end  text-white">
          <p> © Copyright Project Hub , 2020. All Rights Reserved.</p>
        </div>
      </Element>
    </>
  );
}
