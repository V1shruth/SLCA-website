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
          <axesHelper args={[200]} position={[15, 0, 0]} />
        </Canvas>
      </div>

      <div className="quarter right">
        <Canvas>
          <PerspectiveCamera
            makeDefault
            position={[17, 21, 73]}
            fov={75}
            near={0.1}
            far={2000}
            onUpdate={(self) => {
              self.lookAt(0, 0, 0);
              self.setRotationFromEuler(new Euler(-0.1, 0, -0));
            }}
          />
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <ChessGame />
          </Suspense>
          <axesHelper args={[200]} />
        </Canvas>
      </div>
    </div>
  );
};

export default ChessSplitView;
