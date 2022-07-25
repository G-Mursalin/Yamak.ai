import React from "react";

const LeftSide = () => {
  return (
    <div>
      <div>
        <h6>
          Enter input to get
          <span className="text-primary">Writing Assistant</span>
        </h6>
        <div className="d-flex p-2 mb-3">
          <div>
            <label htmlFor="">Word Count:</label>&nbsp;
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
      <div className="d-flex justify-content-end px-4">
        <p>
          <span className="me-3">word: 00</span>|
          <span className="ms-1">character: 0/250</span>
        </p>
      </div>
      <div className="bg-white p-4" style={{ height: "80vh" }}>
        <div className="pb-4 border-bottom">
          <span className="shadow px-2 py-1 bg-body rounded fw-bold">B</span>
          <span className="ms-3 shadow px-2 py-1 bg-body rounded fw-bold">
            I
          </span>
          <span className="ms-3">hyperlink</span>
          <span className="ms-3"> text cut</span>
          <span className="ms-3">underline</span>
        </div>
        <div className="mt-2">
          <p>
            As artificial intelligence continues to evolve, it is becoming
            increasingly capable of generating original and insightful content.
            This blog post is a prime example; the title was generated by AI
            within 10 seconds. AI is quickly becoming a powerful tool for
            content creators and marketers alike.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
