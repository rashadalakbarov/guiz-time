import React from "react";

const Modal = ({ score }) => {
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
        <div className="mb-3">Score : {score}</div>
        <button
          onClick={() => (window.location = "/")}
          className="btn btn-success"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Modal;
