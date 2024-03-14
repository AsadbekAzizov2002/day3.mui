import React from "react";
import Header from "./Header";
import Feature from "./pages/Feature";
import Testtimonials from "./pages/Testtimonials";
import Hightlights from "./pages/Hightlights";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import Footers from "./Footers";
import { Button, ButtonGroup } from "@mui/material";

const App = () => {
  return (
    <div className=" container ">
      <div className=" container mx-auto px-4 w-[1300px]">
        <Header />
        <Feature />
        <Testtimonials />
        <Hightlights />
        <Pricing />
        <Faq />
        <Footers />
        <div className=" w-[300px ] ml-[450px]">
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled button group"
          >
            <Button>Custom theme</Button>
            <Button>Matirial Design 2</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default App;
