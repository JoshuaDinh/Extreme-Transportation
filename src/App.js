import React, { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Gallery } from "./Components/Gallery/Gallery";
import application from "./Images/application.pdf";
import { SectionOne } from "./Components/SectionOne/SectionOne";
import { SectionTwo } from "./Components/SectionTwo/SectionTwo";
import { SectionThree } from "./Components/SectionThree/SectionThree";
import { SectionFour } from "./Components/SectionFour/SectionFour";
import { Contact } from "./Components/Contact/Contact";

const App = () => {
  const [contact, setContact] = useState(false);
  const [modal, setModal] = useState(false);
  const [stickyContact, setStickyContact] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setStickyContact(true);
      } else setStickyContact(false);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navigation setModal={setModal} modal={modal} />{" "}
        <Switch>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/">
            {modal && <Contact setModal={setModal} />}
            {stickyContact && (
              <p
                onClick={() => setModal(true)}
                className="footer-contact-button"
              >
                Contact
              </p>
            )}
            <div className="banner__title ">
              <div className="banner__title-container">
                <p className="banner__title-auto-transport animate__animated animate__lightSpeedInRight">
                  Auto Transportation
                </p>
                <p className="banner__title-text">
                  Auto Transportion • Best Rated Vehicle Transportation Company
                  • Nationwide
                </p>
              </div>
            </div>
            <div className="sub__headline-container">
              <p>Transporting your vehicle safely is our top priority</p>
            </div>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <Footer setModal={setModal} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
