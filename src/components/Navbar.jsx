import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between">
      {/* Placeholder for left section */}
      <div></div>

      {/* Right-side menu */}
      <div className="flex items-center space-x-4">
        {/* People Dropdown */}
        <div className="relative group">
          <button className="hover:text-purple-400">
            People ▼
          </button>
          
          <div
            className="hidden group-hover:flex absolute bg-purple-600 text-white mt-2 rounded shadow-md flex-col z-10"
            onMouseEnter={(e) => e.stopPropagation()} // Prevent disappearance
            onMouseLeave={(e) => e.stopPropagation()} // Prevent disappearance
          >
            <Link
              to="/meet-the-team"
              className="px-4 py-2 hover:bg-purple-700"
            >
              Meet the Team
            </Link>
            <Link
              to="/state-affiliates"
              className="px-4 py-2 hover:bg-purple-700"
            >
              State Affiliates
            </Link>
          </div>


        </div>

        {/* Events Dropdown */}
        <div className="relative group">
          <button className="hover:text-purple-400">
            Events ▼
          </button>
          <div
            className="hidden group-hover:flex absolute bg-purple-600 text-white mt-2 rounded shadow-md flex-col z-10"
            onMouseEnter={(e) => e.stopPropagation()} // Prevent disappearance
            onMouseLeave={(e) => e.stopPropagation()} // Prevent disappearance
          >
            <Link
              to="/nhscl"
              className="px-4 py-2 hover:bg-purple-700"
            >
              National High School Chess League
            </Link>
            <Link
              to="/ekg-chess"
              className="px-4 py-2 hover:bg-purple-700"
            >
              EKG Chess
            </Link>
            <Link
              to="/castle-initiative"
              className="px-4 py-2 hover:bg-purple-700"
            >
              C.A.S.T.L.E Initiative
            </Link>
          </div>
        </div>

        {/* Contact */}
        <Link to="/contact" className="hover:text-purple-400">
          Contact
        </Link>

        {/* Donate */}
        <Link to="/donate" className="hover:text-purple-400">
          Donate
        </Link>
      </div>

      {/* Join SLCA Button */}
      <Link
        to="/join-slca"
        className="ml-2 bg-purple-600 text-white py-2 px-4 rounded-lg border border-purple-400 glowing hover:animate-pulse"
      >
        Join SLCA
      </Link>
    </nav>
  );
};

export default Navbar;
