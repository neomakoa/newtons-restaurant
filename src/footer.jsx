import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white mt-2 pb-3 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <a className="navbar-brand display-6 text-success" href="/">
                Newton's
              </a>
              <div
                className="py-2"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <a href="/">
                  <FaFacebook />
                </a>
                <a href="/">
                  <FaInstagram />
                </a>
                <a href="/">
                  <FaTwitter />
                </a>
                <a href="/">
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div className="col-4 text-end">
              <p>Privacy Policy</p> <p>FAQs</p> <p>Cookies Policy</p>
            </div>
            <div className="col-4 text-end">
              <p>Careers</p> <p>Events</p> <p>Contact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
