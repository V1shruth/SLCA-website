import React from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Sponsors from "./components/Sponsors";
import ChessSplitView from "./components/ChessSplitView";
import AnimatedCounter from "./components/AnimatedCounter";

const App = () => {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">
        Welcome to Student Led Chess Association!
      </h1>
      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          height: "500px",
          margin: "0 auto",
        }}
      >
        <Sponsors />
      </div> */}
      <ChessSplitView />
      {/* Navbar */}
      <Navbar />
      
      <main className="mt-8">
        {/* Welcome Section */}
        <h1 className="text-3xl font-bold underline text-center">
          Welcome to Student Led Chess Association!
        </h1>
        
        {/* Sponsors Section */}
        <div
          style={{
            maxWidth: "1000px",
            width: "100%",
            height: "500px",
            margin: "0 auto",
          }}
        >
          <Sponsors />
        </div>

        {/* Metrics Section with Animated Counters */}
        <section className="mt-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Impact</h2>
          {/* Custom grid layout for symmetric alignment */}
          <div className="grid grid-cols-3 gap-8">
            {/* Row 1: 3 Metrics */}
            <div>
              <AnimatedCounter from={0} to={2000} />
              <p className="text-xl mt-2">Students Reached</p>
            </div>
            <div>
              <AnimatedCounter from={0} to={15000} />
              <p className="text-xl mt-2">Raised for charity</p>
            </div>
            <div>
              <AnimatedCounter from={0} to={400} />
              <p className="text-xl mt-2">Affiliated Schools</p>
            </div>
          </div>

          {/* Row 2: 2 Metrics Centered */}
          <div className="grid grid-cols-5 gap-8 mt-8">
            {/* Empty placeholders to create spacing */}
            <div></div>
            <div>
              <AnimatedCounter from={0} to={200} />
              <p className="text-xl mt-2">Events Run</p>
            </div>
            <div></div> {/* Empty space between the two metrics */}
            <div>
              <AnimatedCounter from={0} to={200} />
              <p className="text-xl mt-2">Officers across 17 provinces</p>
            </div>
            <div></div>
          </div>
        </section>

         {/*Footer */}
        <footer className="bg-gray-800 text-gray-300 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Section 1: About */}
              <div>
                <h2 className="text-lg font-semibold text-white mb-4">About Us</h2>
                <p className="text-sm">
                  Student Led Chess Association is a nonprofit corporation (501(c)(3) tax-exemption). All donations are tax-deductible.
                </p>
              </div>

              {/* Section 2: Events */}
              <div>
                <h2 className="text-lg font-semibold text-white mb-4">Events</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="/home" className="hover:text-white">Home</a>
                  </li>
                  <li>
                    <a href="/nhscl" className="hover:text-white">High School Tournaments</a>
                  </li>
                  <li>
                    <a href="ekg-chess" className="hover:text-white">EKG CHESS</a>
                  </li>
                  <li>
                    <a href="castle-initiative" className="hover:text-white">CASTLE</a>
                  </li>
                </ul>
              </div>

              {/* Section 3: Clubs */}
              <div>
                <h2 className="text-lg font-semibold text-white mb-4">Clubs</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="/meet-the-team" className="hover:text-white">Meet the team</a>
                  </li>
                  <li>
                    <a href="/join-slca" className="hover:text-white">Join the team</a>
                  </li>
                  <li>
                    <a href="/state-affiliates" className="hover:text-white">State Affiliates</a>
                  </li>
                </ul>
              </div>

              {/* Section 4: Social Media */}
              <div>
                <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
                <div className="flex space-x-4">
                  <a
                    href="https://x.com/studentledca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M24 4.557a9.84 9.84 0 0 1-2.828.775 4.933 4.933 0 0 0 2.165-2.723 9.865 9.865 0 0 1-3.127 1.195A4.92 4.92 0 0 0 16.845 3c-2.73 0-4.943 2.215-4.943 4.945 0 .39.045.77.128 1.135C7.691 8.862 4.066 6.92 1.64 3.897a4.93 4.93 0 0 0-.666 2.48 4.942 4.942 0 0 0 2.197 4.112 4.904 4.904 0 0 1-2.24-.618v.06c0 2.445 1.74 4.483 4.042 4.947a4.902 4.902 0 0 1-2.237.084 4.926 4.926 0 0 0 4.604 3.417 9.869 9.869 0 0 1-6.11 2.107c-.397 0-.788-.024-1.175-.069A13.945 13.945 0 0 0 7.548 21c9.056 0 14.012-7.503 14.012-14.012 0-.213-.005-.426-.014-.637A10.01 10.01 0 0 0 24 4.557z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/studentledca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.347 3.608 1.322.975.975 1.26 2.242 1.322 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.347 2.633-1.322 3.608-.975.975-2.242 1.26-3.608 1.322-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.347-3.608-1.322-.975-.975-1.26-2.242-1.322-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.347-2.633 1.322-3.608C4.53 2.583 5.797 2.298 7.163 2.236 8.428 2.178 8.808 2.163 12 2.163M12 0C8.741 0 8.332.015 7.052.072 5.773.13 4.519.406 3.472 1.452 2.426 2.498 2.15 3.753 2.093 5.032 2.035 6.312 2.02 6.721 2.02 12c0 5.279.015 5.688.072 6.968.058 1.279.334 2.533 1.38 3.58.975.975 2.242 1.26 3.608 1.322 1.28.058 1.689.072 6.968.072s5.688-.015 6.968-.072c1.366-.062 2.633-.347 3.608-1.322.975-.975 1.26-2.242 1.322-3.608.058-1.28.072-1.689.072-6.968s-.015-5.688-.072-6.968c-.062-1.366-.347-2.633-1.322-3.608-.975-.975-2.242-1.26-3.608-1.322C17.688.015 17.279 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.996 3.996 0 1 1 0-7.992 3.996 3.996 0 0 1 0 7.992zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@studentledca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm2.808 7.763c1.136 1.097 2.689 1.757 4.196 1.777v3.423c-1.657-.12-3.199-.694-4.196-1.645v6.108c0 3.24-2.63 5.874-5.875 5.874-1.066 0-2.067-.283-2.932-.777a5.86 5.86 0 0 1 3.166-10.846v3.553a2.292 2.292 0 0 0-1.415 4.227c.354.207.759.317 1.181.317 1.278 0 2.314-1.035 2.314-2.313v-12.936h3.561v4.339z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/slca-north-america"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.275c-.967 0-1.75-.784-1.75-1.75s.783-1.75 1.75-1.75 1.75.784 1.75 1.75-.783 1.75-1.75 1.75zm13.5 11.275h-3v-5.356c0-1.284-.026-2.935-1.791-2.935-1.793 0-2.068 1.4-2.068 2.849v5.442h-3v-10h2.859v1.367h.041c.398-.756 1.369-1.551 2.817-1.551 3.012 0 3.542 1.982 3.542 4.558v5.626z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@studentledca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M23.499 6.203c-.274-1.03-1.083-1.84-2.113-2.114-1.867-.507-9.386-.507-9.386-.507s-7.519 0-9.386.507c-1.03.274-1.839 1.084-2.113 2.114-.507 1.867-.507 5.773-.507 5.773s0 3.906.507 5.773c.274 1.03 1.083 1.84 2.113 2.114 1.867.507 9.386.507 9.386.507s7.519 0 9.386-.507c1.03-.274 1.839-1.084 2.113-2.114.507-1.867.507-5.773.507-5.773s0-3.906-.507-5.773zm-13.5 8.794v-7.588l6.5 3.794-6.5 3.794z" />
                    </svg>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default App;
