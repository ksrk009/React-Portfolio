import React from "react";
import NavBar from "./sections/navbar/NavBar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import Testimonials from "./sections/testimonials/Testimonials";
// import Experience from "./sections/experience/Experience";
import FAQs from "./sections/faqs/FAQs";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/Floatingnav";
import Model from "./components/Model";
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/theme-context";

const App = () => {
  const { themeState } = useThemeContext();
  return (
    <main className={`${themeState.primary} ${themeState.background}`}>
      <NavBar />
      <Header />
      <About />
      <FAQs />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      {/* <Model /> */}
      <Theme />
      {/* <Footer /> */}
      {/* <FloatingNav /> */}
    </main>
  );
};

export default App;
