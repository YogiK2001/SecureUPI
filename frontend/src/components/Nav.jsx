// import { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-between items-center gap-2 w-full bg-slate-200 rounded-md p-3">
      <span className="flex flex-row justify-center items-center mt-2 px-10">
        <h1 className="text-green-500 text-5xl text-center font-bold font-mono px-2">
          Secure
        </h1>
        <img src={logo} alt="SecureUPILogo" className="h-10 w-30 " />
      </span>

      <nav className="flex items-center gap-6 pr-10 overflow-x-clip">
        {/* Home */}
        <div className="relative group">
          <button
            className="px-2 py-2 text-gray-700 hover:text-green-500 font-medium"
            onClick={() => navigate("/predict")}
          >
            Home
          </button>
        </div>

        {/* About Us */}
        <div className="relative group">
          <button className="px-2 py-2 text-gray-700 hover:text-green-500 font-medium">
            About Us
          </button>
          <div className="absolute left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 mt-0 w-40 bg-white rounded-md shadow-lg py-1 z-10 transition-all duration-300">
            <div className="pt-2">
              {" "}
              {/* Added spacing at top */}
              <a
                href=""
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                onClick={() => navigate("/team")}
              >
                Team
              </a>
              <a
                href=""
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                onClick={() => () => navigate("/faculty")}
              >
                Faculty
              </a>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="relative group">
          <button className="px-4 py-2 text-gray-700 hover:text-green-500 font-medium">
            FAQs
          </button>
        </div>

        {/* News Feed */}
        <div className="relative group">
          <button className="px-4 py-2 text-gray-700 hover:text-green-500 font-medium">
            News Feed
          </button>
          <div className="absolute left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 mt-0 w-40 bg-white rounded-md shadow-lg py-1 z-10 transition-all duration-300">
            <div className="pt-2">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                onClick={() => {
                  /* Add navigation logic */
                }}
              >
                Latest News
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                onClick={() => {
                  /* Add navigation logic */
                }}
              >
                Announcements
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                onClick={() => {
                  /* Add navigation logic */
                }}
              >
                Events
              </a>
            </div>
          </div>
        </div>

        {/* Feedback */}
        <div className="relative group">
          <button className="px-4 py-2 text-gray-700 hover:text-green-500 font-medium">
            Feedback
          </button>
          <div className="absolute left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 mt-0 w-40 bg-white rounded-md shadow-lg py-1 z-10 transition-all duration-300 overflow-hidden">
            <div className="pt-2 overflow-hidden">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                onClick={() => {
                  /* Add navigation logic */
                }}
              >
                Contact
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                onClick={() => {
                  /* Add navigation logic */
                }}
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
