import React, { useState } from 'react';
import questions from '../Data/Questions.json'; // Adjust the path if needed

const About = () => {
  // State to keep track of the index of the opened question
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle the visibility of the answer
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-12">
          <div className="accordion" id="accordionExample">
            {questions.map((item, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAnswer(index)}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
                >
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
