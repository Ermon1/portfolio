import React, { useState } from "react";
import carrental from "../asset/carRental.png";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

function Portfolio() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const portfolio = [
    {
      id: 1,
      src: carrental,
      chref: "https://github.com/Ermon1/carRental",
      Dhref: "https://github.com/Ermon1/carRental",
      title: "Car Rental Website",
      description: `
    **Introduction:**
    Welcome to my car rental website plateform, 
    
                       **User Roles:**
    1. **Customer:** Explore our user-friendly platform, create a personalized profile, and effortlessly reserve vehicles with a few clicks. Manage bookings and access transaction history through your dedicated customer dashboard.
    2. **Renter:** List your vehicle and connect with a broad audience of potential renters. A comprehensive dashboard allows you to manage listings, track bookings, and ensure secure and seamless transactions.
    3. **Admin:** Oversee and manage the entire platform with powerful tools. Admins play a crucial role in maintaining platform integrity, resolving disputes, and ensuring a secure environment for all users.
    4. **Employee:** Our dedicated employees contribute to the day-to-day operation, handling customer queries, managing vehicle maintenance, and supporting bookings.

    **Key Features:**
    - **Profile Management:** Every user role enjoys a dedicated profile page for personal information, preferences, and transaction history.
    - **Secure Login/Logout:** Robust login/logout functionalities ensure user data protection and easy access.
    - **Show Car Page:** Explore a comprehensive catalog with detailed vehicle descriptions, images, and rental information.
    - **Description Page:** Access in-depth information about each vehicle, including specifications, features, and rental terms.
    - **Booking Processes:** Effortlessly reserve vehicles, update booking details, and manage reservations with user-friendly functionalities.
    - **Employee Dashboard:** Employees benefit from a centralized dashboard for efficient task management and seamless customer interactions.
  `,
    },
  ];
  const handleDemo = (href) => {
    window.open(href, "_blank");
  };
  const handleCode = (href) => {
    window.open(href, "_blank");
  };

  return (
    <div name="portfolio" className="w-full text-white    mb-28">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4  border-gray-500">
            portfolio
          </p>
          <p className="py-6 ">check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map((port) => (
            <div
              key={port.id}
              className="shadow-md shadow-gray-700 rounded-lg "
            >
              <img
                src={port.src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 "
              />
              <div className="text-center text-slate-950 ">
                <div className="portfolio-item">
                  <h2>{port.title}</h2>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleToggle}
                  >
                    Show Details
                  </Button>

                  <Dialog open={open} onClose={handleToggle}>
                    <DialogTitle>{port.title}</DialogTitle>
                    <DialogContent>
                      <p className="text-base leading-6 text-gray-700">
                        {port.description}
                      </p>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleToggle}>Close</Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>
              <div className="flex items-center ml-5 justify-center ">
                <button
                  onClick={() => handleCode(port.chref)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
                <button
                  onClick={() => handleDemo(port.Dhref)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
