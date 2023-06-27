import React from "react";
import {ReactComponent as RedLine} from "../svg/redline.svg";
import {ReactComponent as SecondCell} from "../svg/secondcell.svg";
import {ReactComponent as ThirdCell} from "../svg/thirdcell.svg";
import {ReactComponent as FourthCell} from "../svg/fourthcell.svg";
import {ReactComponent as FifthCell} from "../svg/fifthcell.svg";
import {ReactComponent as SixthCell} from "../svg/sixthcell.svg";
import {ReactComponent as HorizontalLine} from "../svg/horizontal.svg";
import {ReactComponent as VerticalLine} from "../svg/vertical.svg";

const ServiceInfo = () => {
  return (
    <section class="flex-section">
      <div class="list-services">
        <ul class="services-list">
          <div className="left-line">
            <VerticalLine />
          </div>
          <li>
            <div class="link-box">
              <div className="welcome-text">
                <RedLine /> About Us
              </div>
              <div className="first-cell">
                Lillypad is the only Real Estate Investment tool you need for
                your business
              </div>
            </div>
          </li>
          <li>
            <div class="link-box">
              <div className="box-title">
                <SecondCell />
                Become a Data-Driven Investor
              </div>
              <div className="box-content">
                Lilypads is the cloud-based real estate investment platform that
                helps you make data-driven investment decisions and assists with
                reaching your long term investment objectives.
              </div>
            </div>
          </li>
          <li>
            <div class="link-box">
              <div className="box-title">
                <ThirdCell />
                Lilypads can help you make smarter decisions.
              </div>
              <div className="box-content">
                Streamline your investment evaluation process and collaborate in
                reaching your long term investment objectives
              </div>
            </div>
          </li>
          <HorizontalLine />
          <li>
            <div class="link-box">
              <div className="box-title">
                <FourthCell />
                Manager Due Diligence
              </div>
              <div className="box-content">
                Evaluate managers against your objectives using traditional risk
                metrics with the addition of factor analysis. All it takes is a
                set of returns
              </div>
            </div>
          </li>
          <li>
            <div class="link-box">
              <div className="box-title">
                <FifthCell />
                Optimize Asset Allocation
              </div>
              <div className="box-content">
                Understand the underlying risk drivers in your portfolio using
                the Lilypads analysis factors and then optimize that portfolio
                based on objectives
              </div>
            </div>
          </li>
          <li>
            <div class="link-box">
              <div className="box-title">
                <SixthCell />
                Our Subscribers
              </div>
              <div className="box-content">
                Serving a constellation of global subscribers Pension funds,
                Funds of Funds, Banks, Family offices, Asset managers, Wealth
                Managers
              </div>
            </div>
          </li>
          <div className="right-line">
            <VerticalLine />
          </div>
        </ul>
      </div>
    </section>
  );
};

export default ServiceInfo;
