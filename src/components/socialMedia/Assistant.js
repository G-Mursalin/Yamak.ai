import React from "react";

const Assistant = () => {
  return (
    <div className="d-flex justify-content-between">
      <h4 className="fs-4 fs-sm-5">Home/Writing Assistant</h4>
      <div className="d-flex">
        <button type="button" className="btn btn-primary me-3">
          Save
        </button>
        <button type="button" className="btn btn-primary d-none d-sm-block">
          Filter
        </button>
      </div>
    </div>
  );
};

export default Assistant;
