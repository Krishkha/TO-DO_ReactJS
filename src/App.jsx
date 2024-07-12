import React from "react";
import Navbar from "./Component/Navbar";
import Inputbox from "./Component/Inputbox";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="d-flex justify-content-center align-items-center">
        <Inputbox/>
      </div>
    </>
  );
};

export default App;
