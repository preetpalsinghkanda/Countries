import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="max-w-[1500px] mx-auto flex  flex-col w-full ">
      <Navbar />
      <Hero/>
    </div>
  );
};

export default App;
