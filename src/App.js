import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import phone from "./Images/phone2.svg";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import BuildIcon from "@material-ui/icons/Build";
import HowToRegIcon from "@material-ui/icons/HowToReg";

const App = () => {
  const [contact, setContact] = useState(false);
  const [modal, setModal] = useState(false);
  const [offset, setOffset] = useState(0);
  const [animateSectionOne, setAnimateSectionOne] = useState(false);
  const [animateSectionTwo, setAnimateSectionTwo] = useState(false);
  const [animateSectionThree, setAnimateSectionThree] = useState(false);

  // Contact modal appears at scroll position above 900px
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 900) {
        setContact(true);
      } else setContact(false);
    });
  }, []);

  // scroll animation for section / headers
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 900) {
        setAnimateSectionOne(true);
      } else setAnimateSectionOne(false);
      if (window.scrollY > 1600) {
        setAnimateSectionTwo(true);
      } else {
        setAnimateSectionTwo(false);
      }
      if (window.scrollY > 2500) {
        setAnimateSectionThree(true);
      } else {
        setAnimateSectionThree(false);
      }
    });
  }, []);

  // useEffect(() => {
  //   function handleScroll() {
  //     setOffset(window.pageYOffset);
  //   }
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="App">
      <Navigation setModal={setModal} modal={modal} />{" "}
      <div className="banner__title ">
        <div className="background"></div>
        <h1 className="animate__animated animate__lightSpeedInRight">
          Auto Transport & Car Shipping
        </h1>
        <p>
          Get Car Shipping Quote • Best Rated Vehicle Transport Company •
          Nationwide
        </p>
      </div>
      <div className="sub__headline-container">
        {/* <h3>Auto Transport you can trust</h3> */}
        <div>
          <span className="highlight-text">A</span>
          <span className="highlight-text">u</span>
          <span className="highlight-text">t</span>
          <span className="highlight-text">o</span>
          <span className="highlight-text"> T</span>
          <span className="highlight-text">r</span>
          <span className="highlight-text">a</span>
          <span className="highlight-text">n</span>
          <span className="highlight-text">s</span>
          <span className="highlight-text">p</span>
          <span className="highlight-text">o</span>
          <span className="highlight-text">r</span>
          <span className="highlight-text">t</span>
          <span className="highlight-text"> Y</span>
          <span className="highlight-text">o</span>
          <span className="highlight-text">u</span>
          <span className="highlight-text"> c</span>
          <span className="highlight-text">a</span>
          <span className="highlight-text">n</span>
          <span className="highlight-text"> T</span>
          <span className="highlight-text">r</span>
          <span className="highlight-text">u</span>
          <span className="highlight-text">s</span>
          <span className="highlight-text">t</span>
        </div>
        <p>Transporting your vehicle safely is our top priority</p>
        <div onClick={() => setModal(true)} className="sub__headline-box">
          <span>
            Get a Quote <FormatQuoteIcon />
          </span>
          <span>
            <LocalOfferIcon fontSize="large" />
          </span>
        </div>
      </div>
      {contact && (
        <button
          onClick={() => setModal(true)}
          className="scrolled__contact-button"
        >
          Need help?
        </button>
      )}{" "}
      <section className="section__one">
        <div className="section__one-title">
          <h1 className={animateSectionOne && "animation-header"}>About Us</h1>
          <p className={animateSectionOne && "animation-header"}>
            Extreme Transportation is a California based, Vehicle Transportation
            Company. Servicing Southern California and all throughout the USA
            since 2001. Our professional staff and management ensures you have
            the best experience while we deliver the best quality service.
          </p>
        </div>
      </section>
      <section className="section__two">
        <div className="section__two-title">
          <h1
            className={`section__two-title-text ${
              animateSectionTwo && "animation-header"
            }  `}
          >
            Core Values
          </h1>
          <div
            className={`section__two-icons-container ${
              animateSectionTwo && "animation-header"
            }  `}
          >
            <div className="section__two-icon-container">
              <LoyaltyIcon className="section__two-icon" />{" "}
              <span className="section__two-icon-text">Loyalty</span>
            </div>
            <div className="section__two-icon-container">
              <BuildIcon className="section__two-icon" />{" "}
              <span className="section__two-icon-text">Quality</span>
            </div>
            <div className="section__two-icon-container">
              <VerifiedUserIcon className="section__two-icon" />{" "}
              <span>Integrity</span>
            </div>
            <div className="section__two-icon-container">
              <HowToRegIcon className="section__two-icon" />{" "}
              <span className="section__two-icon-text">Honor</span>
            </div>
            <div className="section__two-icon-container">
              <RoomServiceIcon className="section__two-icon" />{" "}
              <span className="section__two-icon-text">Service</span>
            </div>
          </div>
          <p className={` ${animateSectionTwo && "animation-header"}`}>
            Our values define our company. We will apply these values to our
            everyday decisions, actions, and activities. Our Reputation is of
            vital importance to us. We take ourselves and our mission seriously.
            “
          </p>
        </div>
      </section>
      <section className="section__three">
        <div className="section__three-title">
          <h1 className={animateSectionThree && "animation-header"}>
            {/* Core values */}
            Commitment
          </h1>
          <p className={animateSectionThree && "animation-header"}>
            {" "}
            “Extreme Transportation is COMMITTED to the business of Vehicle
            Transporting Services. We are Committed to serving our Customers. We
            do what we promise in support of our core values: Quality, Loyalty,
            Integrity, Honor, and Service.
          </p>
        </div>
      </section>
      <section className="section__four">
        <div className="section__four-title">
          <h4 className="section__four-questions">
            Got Any Questions? Need help?
          </h4>
          <p>We are here to help. Get in touch!</p>
        </div>
        <div className="section__four-img">
          <img src={phone} alt="phone" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
