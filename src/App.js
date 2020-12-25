import "./App.css";
import motorway from "./Images/motorway2.mp4";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />

      <div className="banner">
        <video autoPlay muted loop>
          <source src={motorway} type="video/mp4" />
        </video>
        <div className="banner__title">
          <h1>Extreme Transportation ..</h1>
        </div>
      </div>
      {/* <button className="button__header">Contact Us</button> */}
      {/* <img className="banner" src={banner} alt="truck" /> */}
      <section className="section__one">
        <h1>About Us</h1>
        <p>
          Extreme Transportation is a California based, Vehicle Transportation
          Company. Servicing Southern California and all throughout the USA
          since 2001. Our professional staff and management ensures you have the
          best experience while we deliver the best quality service.
        </p>
      </section>
      <section className="section__two">section2</section>
      <Footer />
    </div>
  );
}

export default App;
