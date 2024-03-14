import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";


const Feature = () => {
  return (
    <div>
      <main>
        <div>
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
          <div>
            <div>
              <DashboardIcon/>
            </div>
            <div>
              <h1>Dashboard</h1>
              <p>
                This item could provide a snapshot of the most important metrics
                or data points related to the product.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Feature;
