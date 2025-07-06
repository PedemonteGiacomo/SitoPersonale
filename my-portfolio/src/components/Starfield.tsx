import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Stars() {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const arr = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 100;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 100;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.elapsedTime * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="white" size={0.1} />
    </points>
  );
}

export default function Starfield() {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    >
      <Stars />
    </Canvas>
  );
}
