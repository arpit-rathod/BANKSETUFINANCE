import { Canvas } from "@react-three/fiber";

const HeroBackground = () => {
  return (
    <Canvas className="absolute inset-0 opacity-20">
      <ambientLight />
      <mesh rotation={[1, 1, 0]}>
        <sphereGeometry args={[3, 64, 64]} />
        <meshStandardMaterial color="#fbbf24" />
      </mesh>
    </Canvas>
  );
};

export default HeroBackground;