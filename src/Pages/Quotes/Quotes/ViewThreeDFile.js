import React,{ Suspense} from 'react';
import { Canvas,useLoader} from '@react-three/fiber';
import { GLTFLoader} from 'three-stdlib';
import {Environment} from '@react-three/drei'
import { Loading } from '../../../Components/Buttons/LoadingButton';
const ViewThreeDFile = ({file}) => {


    function Scene() {

  
        const gltf = useLoader(GLTFLoader, file);
      
      
        return (
          <mesh  scale={0.5}>
            <primitive object={gltf.scene}  />
          </mesh>
      
        )
      }

    return (
        <Suspense fallback={Loading}>
        <Canvas frameloop="always" legacy={true}  >
          {/* <OrbitControls /> */}
          <sphereGeometry />
        
          <Scene />
          <Environment preset="warehouse"  />
        </Canvas>
      </Suspense>
    );
};

export default ViewThreeDFile;