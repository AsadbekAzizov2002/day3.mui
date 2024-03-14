import React from "react";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import img from "./assets/img.png";
const Header = () => {
  return (
    <div className="  mb-20">
      <header className=" items-center flex mt-9 px-4 py-2 border rounded-2xl justify-between">
        <div className=" flex items-center">
          <img
            className=" w-[150px]"
            src={`https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg`}
            alt=""
          />
          <ul className=" flex gap-2">
            <li className=" cursor-pointer transition-colors hover:text-blue-700 active:text-red-500">
              <NavLink to="/features">Features</NavLink>
            </li>
            <li className=" cursor-pointer transition-colors hover:text-blue-700 active:text-red-500">
              <NavLink to="/testtimonials">Testtimonials</NavLink>
            </li>
            <li className=" cursor-pointer transition-colors hover:text-blue-700 active:text-red-500">
              <NavLink to="/hightlights">Hightlights</NavLink>
            </li>
            <li className=" cursor-pointer transition-colors hover:text-blue-700 active:text-red-500">
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li className=" cursor-pointer transition-colors hover:text-blue-700 active:text-red-500">
              <NavLink to="/faq">Faq</NavLink>
            </li>
          </ul>
        </div>
        <div className=" flex gap-6">
          <button>
            <Brightness2Icon />
          </button>
          <div>
            <ul className=" flex gap-5">
              <li className=" cursor-pointer transition-colors hover:text-blue-700 active:text-red-500">
                <NavLink to="/signIn">Sign in</NavLink>
              </li>
              <li className=" cursor-pointer transition-colors hover:text-blue-700 active:text-red-500">
                <NavLink to="/signUp">Sign up</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className=" container px-4 mt-[150px]">
        <h1 className=" h-[100px] ml-[360px] font-bold justify-center mx-auto text-5xl w-[650px]">
          Our latest <span className=" text-blue-500">products</span>
        </h1>
        <p className=" mb-10 justify-center mx-auto w-[650px]">
          Explore our cutting-edge dashboard, delivering high-quality solutions
          tailored to your needs. Elevate your experience with top-tier features
          and services.
        </p>
      </div>
      <div className=" flex gap-2 mx-auto justify-center ">
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
      <div className=" justify-center mx-auto ml-[380px]">
        <p className=" justify-center mt-4 mx-auto">
          By clicking "Start now" you agree to our Terms & Conditions.
        </p>
      </div>
      <main>
        <div>
          <img className=" w-[1000px] ml-[100px] mt-[150px]" src={img} alt="" />
        </div>

        <div className=" mt-20  ">
          <h2 className=" mx-auto  ml-[450px]">
            Trusted by the best companies
          </h2>
          <div className=" ml-[250px] mt-[50px] flex gap-5 mb-[100px]">
            <img
              className=" w-[100px]"
              src="https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg"
              alt=""
            />
            <img
              className=" w-[100px]"
              src="https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg"
              alt=""
            />
            <img
              className=" w-[100px]"
              src="https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg"
              alt=""
            />
            <img
              className="w-[100px]"
              src="https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg"
              alt=""
            />
            <img
              className=" w-[100px]"
              src="https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg"
              alt=""
            />
            <img
              className=" w-[100px]"
              src="https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg"
              alt=""
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;
