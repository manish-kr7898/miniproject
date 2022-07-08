
import HeadersComponent from "./HeadersComponents/HeadersComponent";
import AboutUs from "./BodyComponents/AboutUs";
import Portfolio from "./BodyComponents/Portfolio";
import Contact from "./BodyComponents/Contact";
import Footer from "./BodyComponents/Footer";

function MyPortfolio() {
  return (
    <div>
      <HeadersComponent />
      <AboutUs/>
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default MyPortfolio;