import Card from "../../components/Card.jsx";
import data from "./data.js";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h2>My Skills</h2> {/* Changed Title */}
      {/* <p>I give you the best in all these technologies</p> */}
      <div className="container services__container">
        {data.map((item) => (
          <Card key={item.id} className="service light">
            <div className="service__icon">
              <item.icon />
            </div>
            <div className="service__details">
              <h4>{item.title}</h4>
              {/* New skills container */}
              <div className="service__skills">
                {item.skills.map((skill, index) => (
                  <span key={index} className="skill__box">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
