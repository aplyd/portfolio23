import { FC, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';

const Box: FC<{}> = () => {
  const ref = useRef(null);

  useEffect(() => {}, []);

  return (
    <mesh ref={ref} scale={1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

const Background: FC<{}> = () => (
  <div className="fixed top-0 left-0 w-screen h-screen bg-slate-400 -z-10">
    <Canvas>
      <ambientLight />
      <Box />
    </Canvas>
  </div>
);

export default Background;
