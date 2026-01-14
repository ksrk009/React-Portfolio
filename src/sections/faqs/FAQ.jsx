import Card from "../../components/Card";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const FAQ = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <Card className="faq" onClick={() => setShowAnswer((prev) => !prev)}>
      <div>
        <h2 className="faq__question">{faq.question}</h2>
        <h5>{faq.company}</h5>
        <h6>{faq.duration}</h6>
        {showAnswer && <p className="faq__answer">{faq.answer}</p>}
      </div>
      <button className="faq__icon">
        {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
    </Card>
  );
};

export default FAQ;
