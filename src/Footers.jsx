import { Button } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ClearIcon from "@mui/icons-material/Clear";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footers = () => {
  return (
    <div>
      <main>
        <div className=" flex justify-between">
          <div>
            <img
              className=" w-[150px]"
              src={`https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg`}
              alt=""
            />
            <h2>Newsletter</h2>
            <p className=" w-[350px]">
              Subscribe to our newsletter for weekly updates and promotions.
            </p>
            <div className=" flex">
              <input
                className=" py-2 border rounded pr-[90px] pl-[10px]"
                type="text"
                name="text"
                id="text"
                placeholder="Yur email adress"
              />
              <div>
                <Button variant="contained" disableElevation>
                  Start now
                </Button>
              </div>
            </div>
          </div>
          <div className=" flex gap-6">
            <div>
              <h2>Product</h2>
              <ul>
                <li>Features</li>
                <li>Testimonials</li>
                <li>Hightlight</li>
                <li>Priceng</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h2>Compani</h2>
              <ul>
                <li>About us</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h2>Legal</h2>
              <ul>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-between mb-[60px]">
          <div className=" mt-[80px]">
            <h2>Privacy Policy • Terms of Service</h2>
            <h2>Copyright © Sitemark 2024</h2>
          </div>
          <div className=" flex">
            <div>
              <GitHubIcon />
            </div>
            <div>
              <ClearIcon />
            </div>
            <div>
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Footers;
