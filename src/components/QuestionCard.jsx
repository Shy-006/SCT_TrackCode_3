import React, { useState } from 'react';
import './QuestionCard.css';


function QuestionCard({ data, onNext }) {
  const [userInput, setUserInput] = useState(data.type === "multi" ? [] : "");
  
  const handleSubmit = () => {
    let isCorrect = false;
    if (data.type === "fill") {
      isCorrect = userInput.trim().toLowerCase() === data.answer.toLowerCase();
    } else if (data.type === "multi") {
      isCorrect = JSON.stringify([...userInput].sort()) === JSON.stringify([...data.answer].sort());
    } else {
      isCorrect = userInput === data.answer[0];
    }
    onNext(isCorrect, userInput);
  };

  return (
    <div>
      <h2>{data.question}</h2>
      {data.type === "fill" ? (
        <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      ) : (
        <div>
          {data.options.map((opt) => (
            <div key={opt}>
              <label>
                <input
                  type={data.type === "multi" ? "checkbox" : "radio"}
                  name="option"
                  value={opt}
                  onChange={(e) => {
                    if (data.type === "multi") {
                      setUserInput(prev =>
                        e.target.checked ? [...prev, opt] : prev.filter(o => o !== opt)
                      );
                    } else {
                      setUserInput(opt);
                    }
                  }}
                />
                {opt}
              </label>
            </div>
          ))}
        </div>
      )}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default QuestionCard;
