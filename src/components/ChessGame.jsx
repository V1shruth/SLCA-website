import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

const ChessGame = () => {
  const { scene } = useGLTF("src/assets/chess_scene/scene.gltf");

  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useMemo(() => {
    clonedScene.traverse((object) => {
      if (object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });

    clonedScene.scale.set(0.1, 0.1, 0.1);
    clonedScene.rotation.set(0, 0, 0);
    clonedScene.position.set(0, 0, 0);
  }, [clonedScene]);

  return (
    // The loaded GLTF scene is added to the 3D world as a `primitive` object.
    <primitive object={clonedScene} />
  );
};

export default ChessGame;
