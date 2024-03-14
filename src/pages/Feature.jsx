import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import EdgesensorHighIcon from "@mui/icons-material/EdgesensorHigh";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import img from "../assets/img.png";

const Feature = () => {
  return (
    <div>
      <main>
        <div className="ml-[70px] mb-[100px]">
          <div>
            <h2 className=" text-2xl font-semibold w-[350px] mb-4">
              Product features
            </h2>
            <p className=" w-[400px]">
              Here you can provide a brief overview of the key features of the
              product. For example, you could list the number of features, the
              types of features, add-ons, or the benefits of the features.
            </p>
          </div>
          <div className=" flex gap-20">
            <div>
              <div className=" w-[450px]  flex items-center mt-6 gap-4 border rounded px-4  py-5 hover:bg-blue-200 active:bg-blue-300">
                <div>
                  <DashboardIcon />
                </div>
                <div>
                  <h1 className=" mb-3 font-semibold">Dashboard</h1>
                  <p>
                    This item could provide a snapshot of the most important
                    metrics or data points related to the product.
                  </p>
                  <div>
                    <Link className=" text-blue-400" href="#">
                      Learn more {">"}
                    </Link>
                  </div>
                </div>
              </div>
              <div className=" w-[450px]  flex items-center mt-6 gap-4 border rounded px-4  py-5 hover:bg-blue-200 active:bg-blue-300">
                <div>
                  <EdgesensorHighIcon />
                </div>
                <div>
                  <h1 className=" mb-3 font-semibold">Mobile integration</h1>
                  <p>
                    This item could provide a snapshot of the most important
                    metrics or data points related to the product.
                  </p>
                  <div>
                    <Link className=" text-blue-400" href="#">
                      Learn more {">"}
                    </Link>
                  </div>
                </div>
              </div>
              <div className=" w-[450px]  flex items-center mt-6 gap-4 border rounded px-4  py-5 hover:bg-blue-200 active:bg-blue-300">
                <div>
                  <PhonelinkIcon />
                </div>
                <div>
                  <h1 className=" mb-3 font-semibold">
                    Available on all platforms
                  </h1>
                  <p>
                    This item could provide a snapshot of the most important
                    metrics or data points related to the product.
                  </p>
                  <div>
                    <Link className=" text-blue-400" href="#">
                      Learn more {">"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-[20px] w-[500px] h-[570px] border rounded  bg-blue-50">
              <div className=" ml-[50px] mt-[250px]">
                <img className=" w-[400px] " src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Feature;
