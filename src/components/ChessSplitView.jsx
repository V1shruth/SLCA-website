import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ChessGame from "./ChessGame";
import "./ChessSplitView.css";
import { Suspense } from "react";

const ChessSplitView = () => {
  return (
    <div className="split-view">
      {/* Left Half */}
      <div className="half left">
        <Canvas camera={{ position: [2, 2, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <ChessGame />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
      {/* Right Half */}
      <div className="half right">
        <Canvas camera={{ position: [-2, 2, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <ChessGame />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
};

export default ChessSplitView;
