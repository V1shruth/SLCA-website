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
      {/* Navbar */}
      <Navbar />
      <ChessSplitView />

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

        <p>iihi</p>
      </main>
    </>
  );
};

export default App;
