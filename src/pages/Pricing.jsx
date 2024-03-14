import React from "react";

const Pricing = () => {
  return (
    <div>
      <main>
        <div>
          <h2 className=" text-3xl  font-semibold w-[250px] mx-auto mt-28">
            Pricing
          </h2>
          <p className=" w-[600px] mx-auto mt-3">
            Quickly build an effective pricing table for your potential
            customers with this layout.
          </p>
          <p className=" w-[500px] mx-auto mb-20">
            It's built with default Material UI components with little
            customization.
          </p>
        </div>
        <div className=" grid grid-cols-3">
          <div className=" rounded h-[390px] bg-blue-50 border w-[400px] ">
            <h3 className=" px-4">Free</h3>
            <span className=" flex items-center gap-1 border-b-2 w-[300px] mb-[60px]">
              <h2 className=" px-4 text-3xl font-bold">$0</h2>
              <h3 className=" "> per month</h3>
            </span>
            <h2 className=" px-5 mb-7">10 users included</h2>
            <h2 className=" px-5 mb-7">2 GB of storage</h2>
            <h2 className=" px-5 mb-7">Help center access</h2>
            <h2 className=" px-5 mb-7">Email support</h2>

            <div className=" px-5">
              <button className="   text-blue-600 py-1  px-[140px] border rounded hover:bg-blue-300">
                Sign up for free
              </button>
            </div>
          </div>
          <div className=" rounded h-[490px] bg-[#022E58] border w-[400px] ">
            <h3 className=" text-white px-4">Professional</h3>
            <span className=" flex items-center gap-1 border-b-2 w-[300px] mb-[60px]">
              <h2 className=" text-white px-4 text-3xl font-bold">$15</h2>
              <h3 className=" text-white "> per month</h3>
            </span>
            <h2 className=" text-[#999999] px-5 mb-7">20 users included</h2>
            <h2 className=" text-[#999999] px-5 mb-7">10 GB of storage</h2>
            <h2 className=" text-[#999999] px-5 mb-7">Help center access</h2>
            <h2 className=" text-[#999999] px-5 mb-7">Email support</h2>
            <h2 className=" text-[#999999] px-5 mb-7">Dedicated team</h2>
            <h2 className=" text-[#999999] px-5 mb-7">Best deals</h2>

            <div className=" px-5">
              <button className="  text-white py-2 px-[140px] border rounded hover:bg-blue-300">
                Start now
              </button>
            </div>
          </div>{" "}
          <div className=" rounded h-[390px] bg-blue-50 border w-[400px] ">
            <h3 className=" px-4">Enterprise</h3>
            <span className=" flex items-center gap-1 border-b-2 w-[300px] mb-[60px]">
              <h2 className=" px-4 text-3xl font-bold">$30</h2>
              <h3 className=" "> per month</h3>
            </span>
            <h2 className=" px-5 mb-7">50 users included</h2>
            <h2 className=" px-5 mb-7">30 GB of storage</h2>
            <h2 className=" px-5 mb-7">Help center access</h2>
            <h2 className=" px-5 mb-7">Phone & email support</h2>

            <div className=" px-5">
              <button className="  text-blue-600 py-1 px-[140px] border rounded hover:bg-blue-300">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
