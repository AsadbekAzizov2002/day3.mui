import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <main>
        <div>
          <h1 className=" mb-[60px] w[350px] ml-[350px] mt-[200px] text-4xl font-bold">
            Frequently asked questions
          </h1>
          <div className=" mb-[200px] border-b-2">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  How do I contact customer support if I have a question or
                  issue?
                </Typography>
                <Typography sx={{ color: "text.secondary" }}></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Can I return the product if it doesn't meet my expectations?{" "}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Absolutely! We offer a hassle-free return policy. If you're
                  not completely satisfied, you can return the product within
                  [number of days] days for a full refund or exchange.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  What makes your product stand out from others in the market?{" "}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Our product distinguishes itself through its adaptability,
                  durability, and innovative features. We prioritize user
                  satisfaction and continually strive to exceed expectations in
                  every aspect.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Is there a warranty on the product, and what does it cover?{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, our product comes with a [length of warranty] warranty.
                  It covers defects in materials and workmanship. If you
                  encounter any issues covered by the warranty, please contact
                  our customer support for assistance.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Faq;
