import { useGLTF, useTexture } from "@react-three/drei";
import { useMemo } from "react";

const ChessGame = () => {
  const { scene } = useGLTF("src/assets/chess_scene/chess_scene_1.glb");

  const whiteTexture = useTexture(
    "src/assets/chess_scene/textures/material_1_baseColor.jpg"
  );
  const blackTexture = useTexture(
    "src/assets/chess_scene/textures/material_baseColor.jpg"
  );

  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useMemo(() => {
    clonedScene.traverse((object) => {
      if (object.isMesh && object.material) {
        object.castShadow = true;
        object.receiveShadow = true;

        if (object.name.includes("white")) {
          object.material.map = whiteTexture;
        } else if (object.name.includes("black")) {
          object.material.map = blackTexture;
        }

        object.material.needsUpdate = true;
      }
    });

    clonedScene.scale.set(0.1, 0.1, 0.1);
    clonedScene.rotation.set(0, 0, 0);
    clonedScene.position.set(0, 0, 0);
  }, [clonedScene, whiteTexture, blackTexture]);

  return (
    // The loaded GLTF scene is added to the 3D world as a `primitive` object.
    <primitive object={clonedScene} />
  );
};

export default ChessGame;
