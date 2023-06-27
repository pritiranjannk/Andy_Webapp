import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FirstScreen from "./img/Firstscreen.png";
import SecondScreen from "./img/Secondscreen.png";
import JointPart from "./img/JointPart.png";
import {ReactComponent as RedLine} from "./svg/redline.svg";
import {ReactComponent as Arrow} from "./svg/arrow.svg";
import ServiceInfo from "./components/ServiceInfo";

function App() {
  return (
    <div className="container">
      <div className="first-section">
        <div className="side-section">
          <Header />
          <div>
            <div className="welcome-text">
              <RedLine />
              Welcome to the
            </div>
            <div className="main-headline">
              Unprecedented Era of {""}
              <span className="red">Real Estate Investing</span>
            </div>
            <div className="light-caption">
              Lilypads uses sophisticated technologies for data-driven decisions
              in investing, managing and funding commercial real estate assets
            </div>
            <button className="invest-btn">
              Start Investing Now <Arrow />
            </button>
            <div className="analytical-data">
              <div className="count-flex">
                <span className="count">658+</span> Properties Registered
              </div>
              <div className="count-flex">
                <span className="count">685+</span> Deals Cracked
              </div>
              <div className="count-flex">
                <span className="count">255+</span> Investors
              </div>
            </div>
          </div>
        </div>
        <div className="other-section">
          <div class="buttons">
            <button class="header-button">Contact Us</button>
            <button class="header-button selected">Log In</button>
          </div>
          <div className="screens">
            <div className="joint-screen">
              <img src={FirstScreen} alt="FirstScreen" />
              <img src={JointPart} alt="JointPart" className="joint-img" />
            </div>
            <div className="second-screen">
              <img src={SecondScreen} alt="SecondScreen" />
            </div>
          </div>
        </div>
      </div>
      <ServiceInfo />
      <Footer />
    </div>
  );
}

export default App;
