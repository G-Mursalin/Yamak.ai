import React from "react";

const LeftSide = () => {
  return (
    <div>
      <div>
        <h6>
          Enter input to get{" "}
          <span className="text-primary">Writing Assistant</span>
        </h6>
        <div className="d-flex">
          <div>
            <label htmlFor=""> Word Count:</label>&nbsp;
            <input type="number" min="0" style={{ width: "60px" }} />
          </div>
          <div className="ms-2">
            <label htmlFor=""> Word Count:</label>&nbsp;
            <select>
              <option value="actual value 1">Select</option>
              <option value="actual value 2">Select-1</option>
              <option value="actual value 3">Select-2</option>
            </select>
          </div>
          <div className="ms-2">
            <label htmlFor=""> Word Count:</label>&nbsp;
            <select>
              <option value="actual value 1">Select</option>
              <option value="actual value 2">Select-1</option>
              <option value="actual value 3">Select-2</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
