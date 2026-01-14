import faqs from "./data";
import FAQ from "./FAQ";
import "./faqs.css";

const FAQs = () => {
  return (
    <section id="faqs">
      <h2>Experience</h2>
      <div className="container faqs__container">
        {faqs.map((faq) => (
          <FAQ key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
