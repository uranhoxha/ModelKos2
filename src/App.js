import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import About from "./components/About/about";
import Modeling from "./components/Modeling/modeling";
import OurModels from "./components/OurModels/ourmodels";
import Quote from "./components/Quote/quote";
import Marketing from "./components/Marketing/marketing";
import Models from "./components/Models/models";
import WWOffer from "./components/WWOffer/wwoffer";
import BecomeModel from "./components/BecomeModel/becomeModel";
import WPSay from "./components/WPSay/wpsay";
import Partnerships from "./components/Partnerships/partnerships";
import KosovaGirls from "./components/KosovaGirls/kosovagirls";
import Blog from "./components/Blog/blog";
import Modelkosacademy from "./components/ModelKosAcademy/modelkosacademy";
import Partners from "./components/Partners/partners";
import Newsletter from "./components/NewsLetter/newsletter";
import Footer from "./components/Footer/footer";

import "./main.scss";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { translate } from "./translation/translate";
import { IntlProvider } from "react-intl";

function App() {
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    Aos.init({
      duration: 1250,
      once: true,
    });
  }, []);

  return (
    <IntlProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Modeling />
        <OurModels />
        <Quote />
        <Marketing />
        <Models />
        <WWOffer />
        <BecomeModel />
        <WPSay />
        <Partnerships />
        <KosovaGirls />
        <Blog />
        <Modelkosacademy />
        <Partners />
        <Newsletter />
        <Footer />
      </div>
    </IntlProvider>
  );
}

export default App;
