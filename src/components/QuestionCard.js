import React, { useEffect, useState } from "react";

const QuestionCard = ({
  questionsData,
  score,
  setScore,
  count,
  setCount,
  modal,
  setModal,
}) => {
  const [timer, setTimer] = useState(30);

  const approvedChoise = (e) => {
    const checkAnswer =
      e.currentTarget.value == questionsData[count]?.correct_answer;

    if (checkAnswer) {
      setScore(score + 100);
    }
    setCount(count + 1);

    if (count == 9) setModal(true);
    setTimer(30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }

      if (timer == 0 && count < 10) {
        setCount(count + 1);
        setTimer(30);
      } else if (count >= 10) {
        setModal(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div
      className="w-100 vh-100 d-flex align-items-center justify-content-center"
      style={{ background: "linear-gradient(#fae043, #272b2e)" }}
    >
      <div
        className="w-100 d-flex align-items-center justify-content-center flex-column bg-white"
        style={{
          maxWidth: "700px",
          padding: "1.5rem",
          border: "1px solid transparent",
          borderRadius: "10px",
        }}
      >
        <div>{timer}</div>
        <div className="fw-bold text-dark mb-5" style={{ fontSize: "24px" }}>
          {count + 1}/10 - {questionsData[count]?.question}
        </div>
        {questionsData[count]?.answers?.map((answer, i) => {
          return (
            <button
              className="btn btn-secondary mb-3 w-100"
              onClick={approvedChoise}
              key={i}
              value={answer}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
