import { FC, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import useScrollPos from 'hooks/useScrollPos';

const Box: FC<{ scrollY: number | null }> = ({ scrollY }) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    const rotate = scrollY ? scrollY * 0.01 : 0;
    ref.current.rotation.x = rotate;
    ref.current.rotation.y = rotate;
    ref.current.rotation.z = rotate;
  });

  return (
    <mesh ref={ref} scale={1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

const Background: FC<{}> = () => {
  const scrollY = useScrollPos();

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-slate-400 -z-10">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box scrollY={scrollY} />
      </Canvas>
    </div>
  );
};

export default Background;
