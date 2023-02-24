import { FC, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import useScrollPos from 'hooks/useScrollPos';
import { MathUtils } from 'three';
import vertexShader from '@utils/shaders/vertexShader';
import fragmentShader from '@utils/shaders/fragmentShader';

const Blob: FC<{ scrollY: number | null }> = () => {
  const ref = useRef<THREE.Mesh>(null);
  const hover = useRef(false);
  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    if (ref.current) {
      (ref.current.material as THREE.ShaderMaterial).uniforms.u_time.value =
        0.4 * clock.getElapsedTime();

      (
        ref.current.material as THREE.ShaderMaterial
      ).uniforms.u_intensity.value = MathUtils.lerp(
        (ref.current.material as THREE.ShaderMaterial).uniforms.u_intensity
          .value,
        hover.current ? 1 : 0.15,
        0.02
      );
    }
  });

  return (
    <mesh
      scale={1}
      onPointerOver={() => {
        hover.current = true;
      }}
      onPointerOut={() => {
        hover.current = false;
      }}
      ref={ref}
    >
      <icosahedronBufferGeometry args={[2, 20]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
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
        <Blob scrollY={scrollY} />
      </Canvas>
    </div>
  );
};

export default Background;
