import React from "react";
import { Navbar } from "./components/Navbar";

export const App: React.FC = () => {
  return (
    <>
      <div className="container px-8 mx-auto">
        <Navbar />
      </div>
    </>
  );
};

export default App;
