// React
import React from "react";
// Components
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
const Writing = () => {
  return (
    <div className="row mt-4">
      <div className="col-md-8 col-12">
        <LeftSide />
      </div>
      <div className="col-md-4 col-12">
        <RightSide />
      </div>
    </div>
  );
};

export default Writing;
