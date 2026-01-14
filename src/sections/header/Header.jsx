import HeaderImage from "../../assets/AIpic.jpeg";
import data from "./data";
import "./header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h1>Shivarama Krishna Koyalakonda</h1>
        <h3>Full-stack AI/ML Engineer</h3>
        <p>
          Full-Stack AI / ML Engineer with 3+ years of experience building
          end-to-end machine learning systems, from data ingestion and feature
          engineering to model deployment and cloud integration. Strong
          background in deep learning, backend development, and scalable cloud
          pipelines. Focused on creating production-ready AI solutions that
          deliver real-world impact.
        </p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
