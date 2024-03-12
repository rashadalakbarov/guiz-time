import React from "react";

const Dropdown = ({ data, setDifficultyChange }) => {
  return (
    <>
      <select
        onChange={(e) => setDifficultyChange(e.target.value)}
        name=""
        id=""
        className="form-control mb-3"
      >
        {data.map((dt, i) => {
          return (
            <option value={dt} key={i}>
              {dt}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Dropdown;
