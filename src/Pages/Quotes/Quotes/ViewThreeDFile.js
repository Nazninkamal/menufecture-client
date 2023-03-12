import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib';
import { Environment, OrbitControls } from '@react-three/drei'
import { Loading } from '../../../Components/Buttons/LoadingButton';
const ViewThreeDFile = ({ file, OrbitControl }) => {


  function Scene() {


    const gltf = useLoader(GLTFLoader, file);


    return (
      <mesh scale={0.5}>
        <primitive object={gltf.scene} />
      </mesh>

    )
  }

  return (
    <Suspense fallback={<Loading />}>
      <Canvas  legacy={true} scale={52}>

        {OrbitControl && <OrbitControls />}

    

        <Scene />
        <Environment preset="warehouse" />
      </Canvas>
    </Suspense>
  );
};

export default ViewThreeDFile;