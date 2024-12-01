import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import ChessGame from "./ChessGame";
import "./ChessSplitView.css";
import { Suspense } from "react";
import { Euler } from "three";

const ChessSplitView = () => {
  return (
    <div className="split-view">
      <div className="quarter left">
        <Canvas>
          <PerspectiveCamera
            makeDefault
            position={[15, 20, -20]}
            fov={100}
            near={0.1}
            far={2000}
            onUpdate={(self) => {
              self.lookAt(0, 0, 0);
              self.setRotationFromEuler(new Euler(-2.8, 0, 3.1));
            }}
          />
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <ChessGame />
          </Suspense>
        </Canvas>
      </div>
      <div className="quarter middle">
        <p>Bruh</p>
      </div>
      <div className="quarter right">
        <Canvas>
          <PerspectiveCamera
            makeDefault
            position={[17, 21, 65]}
            fov={75}
            near={0.1}
            far={2000}
            onUpdate={(self) => {
              self.lookAt(0, 0, 0);
              self.setRotationFromEuler(new Euler(-0.25, 0, -0));
            }}
          />
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <ChessGame />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default ChessSplitView;
