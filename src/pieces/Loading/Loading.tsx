import "./Loading.css";

import React from "react";

const Loading = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-1/2">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
