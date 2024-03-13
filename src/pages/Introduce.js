import React, { useState } from "react";
import images from "../data/Image";
import Dropdown from "../components/Dropdown";
import { useNavigate } from "react-router-dom";

const Introduce = () => {
  const difficulty = ["easy", "medium", "hard"];
  const [difficultyChange, setDifficultyChange] = useState("");

  const navigate = useNavigate();

  const TOTAL_QUESTIONS = 10;

  const startQuiz = () => {
    if (difficultyChange) {
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`);
    }
  };

  // console.log(difficultyChange);
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
        <img src={images.quiz_time} alt="" width={100} />
        <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
        <div onClick={startQuiz} className="btn btn-success">
          Teste Basla
        </div>
      </div>
    </div>
  );
};

export default Introduce;
