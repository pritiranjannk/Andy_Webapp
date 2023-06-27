import React from "react";
import logo from "../img/Logo.png";
import {ReactComponent as FacebookSvg} from "../svg/facebook.svg";
import {ReactComponent as TwitterSvg} from "../svg/twitter.svg";
import {ReactComponent as LinkedinSvg} from "../svg/linkedin.svg";
import {ReactComponent as YoutubeSvg} from "../svg/youtube.svg";
import {ReactComponent as MediumSvg} from "../svg/medium.svg";
import {ReactComponent as PinterestSvg} from "../svg/pinterest.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-footer">
        <div className="newsletter">
          <input
            type="text"
            className="email-input"
            placeholder="Enter Your Email Here"
          />
          <button className="sub-btn">Subscribe To Newsletter</button>
        </div>
        <div className="signup-text">
          Signup and start enjoying the benifits today!
        </div>
        <button className="sign-up-btn">Sign Up To Lilypads</button>
        <div className="social-icons">
          <div className="white-circle">
            <FacebookSvg />
          </div>
          <div className="white-circle">
            <TwitterSvg />
          </div>
          <div className="white-circle">
            <LinkedinSvg />
          </div>
          <div className="white-circle">
            <YoutubeSvg />
          </div>
          <div className="white-circle">
            <MediumSvg />
          </div>
          <div className="white-circle">
            <PinterestSvg />
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="right-footer">
        <div class="grid-container">
          <div class="grid-item">
            <img src={logo} alt="logo" width={120} height={70} />
          </div>
          <div class="grid-item middle">
            <p className="footer-heading">Reach Us At</p>
            <p className="second-item">
              6751 Columbia Gateway Dr., 3rd floor, Columbia, MD 21046
            </p>
          </div>
          <div class="grid-item"></div>
          <div class="grid-item">
            <p className="footer-heading">Network</p>
            <p className="sub-list">Community</p>
            <p className="sub-list">Investor</p>
            <p className="sub-list">Broker</p>
          </div>
          <div class="grid-item middle">
            <p className="footer-heading">Product</p>
            <p className="sub-list">Invest</p>
            <p className="sub-list">Discover</p>
            <p className="sub-list">Transact</p>
            <p className="sub-list">Manage</p>
          </div>
          <div class="grid-item">
            <p className="footer-heading">Our Story</p>
            <p className="sub-list">Approach</p>
            <p className="sub-list">AboutUs</p>
          </div>
          <div class="grid-item">
            <p className="footer-heading">Technology</p>
            <p className="sub-list">Articial Intelligence</p>
            <p className="sub-list">Block Chain</p>
          </div>
          <div class="grid-item middle">
            <p className="footer-heading">Highlights</p>
            <p className="sub-list">
              Impact of COVID-19 on the food and beverage industry and the
              retail sector
            </p>
            <p className="sub-list">
              Commercial lending during COVID-19: navigating the impact
            </p>
          </div>
          <div class="grid-item">
            <p className="footer-heading">Knowledge Center</p>
            <p className="sub-list">Resource</p>
            <p className="sub-list">Blog</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
