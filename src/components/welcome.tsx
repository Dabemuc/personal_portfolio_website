import { Canvas } from "@react-three/fiber";

export function WelcomeContent() {
  return (
    <div className="z-10 ml-8 mr-auto w-1/3 flex justify-center items-center">
      <h1 className="text-3xl font-bold">Hi, im Daniel</h1>
    </div>
  );
}

export function WelcomeBackground() {
  return (
    <div className="z-0 absolute h-full w-full">
      <Canvas camera={{ position: [0, 4, 5] }}>
        <mesh position={[2.5, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
        <ambientLight intensity={0.4} />
        <directionalLight position={[0, 0, 5]} />
      </Canvas>
    </div>
  );
}
