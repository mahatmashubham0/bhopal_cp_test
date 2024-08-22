import React from "react";
import LandingPage from "../components/Landing";

const Body = () => {
  return (
    <div className="w-full h-full">
      <div className="p-4 items-center justify-center flex md:flex-col flex-wrap flex-row">
        <LandingPage />
      </div>
    </div>
  );
};

export default Body;
