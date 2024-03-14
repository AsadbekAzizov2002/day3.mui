import React from "react";
import Header from "./Header";
import Feature from "./pages/Feature";

const App = () => {
  return (
    <div className=" container ">
      <div className=" container mx-auto px-4 w-[1300px]">
        <Header />
        <Feature/>
      </div>
    </div>
  );
};

export default App;
