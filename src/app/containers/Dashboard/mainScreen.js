import React from "react";
import ProfileSection from "./profileSection";
import GraphSection from "./graphSection";

const MainScreen = ({ accelerataion, brake }) => {
  return (
    <>
      <ProfileSection />
      <GraphSection accelerataion={accelerataion} brake={brake} />
    </>
  );
};

export default MainScreen;
