import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import section2 from "./Images/3.jpeg";
import phone from "./Images/phone.svg";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [contact, setContact] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 900) {
        setContact(true);
      } else setContact(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className="App">
      <Navigation setModal={setModal} modal={modal} />{" "}
      <div className="banner__title ">
        <h1 className="animate__animated animate__lightSpeedInRight">
          Auto Transport & Car Shipping
        </h1>
        <p>
          Get Car Shipping Quote • Best Rated Vehicle Transport Company •
          Nationwide
        </p>
      </div>
      <div className="sub__headline-container">
        <h3>Auto Transport you can trust</h3>
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
          <h1>About Us</h1>
          <p>
            Extreme Transportation is a California based, Vehicle Transportation
            Company. Servicing Southern California and all throughout the USA
            since 2001. Our professional staff and management ensures you have
            the best experience while we deliver the best quality service.
          </p>
        </div>
      </section>
      <section className="section__two">
        <img className="section__two-image" src={section2} alt="truck" />
        <div className="section__two-title">
          <h1>Commitment You Can Trust</h1>
          <p>
            “Extreme Transportation is COMMITTED to the business of Vehicle
            Transporting Services. We are Committed to serving our Customers. We
            do what we promise in support of our core values: Quality, Loyalty,
            Integrity, Honor, and Service.
          </p>
        </div>
      </section>
      <section className="section__three">
        <div className="section__three-title">
          <h1>Core values</h1>
          <p>
            <span> Quality, Loyalty, Integrity, Honor</span>, and
            <span> Service</span>... Our values define our company. We will
            apply these values to our everyday decisions, actions, and
            activities. Our Reputation is of vital importance to us. We take
            ourselves and our mission seriously. “
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
