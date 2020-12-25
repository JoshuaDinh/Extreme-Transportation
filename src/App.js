import "./App.css";
import motorway from "./Images/motorway2.mp4";
import section2 from "./Images/3.jpeg";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />

      <video autoPlay muted loop>
        <source src={motorway} type="video/mp4" />
      </video>
      <div className="banner__title animate__animated animate__lightSpeedInRight">
        <h1>Extreme Transportation ..</h1>
      </div>
      {/* <button className="button__header">Contact Us</button> */}
      <section className="section__one ">
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
            These values define company. We will apply these values to our
            everyday decisions, actions, and activities. Our Reputation is of
            vital importance to us. We take ourselves and our mission seriously.
            “
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
