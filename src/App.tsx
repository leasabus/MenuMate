import React from "react";
import { Navbar } from "./components/Navbar";
import { HomeContainer } from "./pages/home/HomeContainer";

export const App: React.FC = () => {
  return (
    <>
      <div className="container px-8 mx-auto">
        <Navbar />
        <HomeContainer />
      </div>
    </>
  );
};

export default App;
