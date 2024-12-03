import { useGLTF, useTexture, useAnimations } from "@react-three/drei";
import { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";

const ChessGame = () => {
  const { scene, animations } = useGLTF(
    "src/assets/chess_scene/chess_scene_1.glb"
  );
  const whiteTexture = useTexture(
    "src/assets/chess_scene/textures/material_1_baseColor.jpg"
  );
  const blackTexture = useTexture(
    "src/assets/chess_scene/textures/material_baseColor.jpg"
  );

  const clonedScene = useMemo(() => scene.clone(), [scene]);

  const mixer = useRef();

  const { actions } = useAnimations(animations, clonedScene);

  useEffect(() => {
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

    if (animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(clonedScene);
      animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip);

        action.setLoop(THREE.LoopPingPong, Infinity);
        action.play();
      });
    }

    const animate = (time) => {
      if (mixer.current) mixer.current.update(time / 1000);
    };

    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.addEventListener("animation", animate);
      }
    });

    actions["Take 001"].play();
  }, [clonedScene, whiteTexture, blackTexture, animations]);

  return <primitive object={clonedScene} />;
};

export default ChessGame;
