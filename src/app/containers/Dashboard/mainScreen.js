import React from "react";
import ProfileSection from "./profileSection";
import GraphSection from "./graphSection";

const MainScreen = ({ accelerataion, brake, setInput }) => {
  return (
    <>
      <ProfileSection />
      <GraphSection accelerataion={accelerataion} brake={brake} />
      <div className="d-flex flex-row-reverse">
        <button
          type="submit"
          className="cssbuttons-io-button mt-3 mb-3 mx-5"
          onClick={() => setInput(false)}
        >
          Close
          <div className="icon">
            <i className="fa-solid fa-circle-xmark text-black"></i>
          </div>
        </button>
      </div>
    </>
  );
};

export default MainScreen;
