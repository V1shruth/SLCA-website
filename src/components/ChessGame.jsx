import { useGLTF } from "@react-three/drei";

const ChessGame = () => {
  // Load the GLTF model
  const { scene } = useGLTF("src/assets/chess_scene/scene.gltf");

  return (
    // The loaded GLTF scene is added to the 3D world as a `primitive` object.
    <primitive object={scene} />
  );
};

export default ChessGame;
