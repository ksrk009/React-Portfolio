import AboutImage from "../../assets/Zenitsu.jpeg";
import CV from "../../assets/ShivaResume2.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            I'm a Data Scientist and Cloud Engineer with a strong foundation in
            machine learning, data analytics, and AWS cloud services. Currently
            pursuing my Master's in Information Science and Technology at
            Missouri S&T.
          </p>
          <p>
            My expertise spans building scalable data pipelines, developing
            predictive models, and delivering actionable business insights. I'm
            passionate about leveraging AI and automation to simplify workflows,
            enhance monitoring, and drive customer delight.
          </p>
          <a href={CV} download className="btn primary" target="_blank">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
