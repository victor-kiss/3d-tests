import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader'


function MarsModel(props) {
  const texture = useLoader(TextureLoader,'/mars.jpg')
    return (
      <mesh {...props} >
        <pointLight castShadow />
        <sphereBufferGeometry args={[4, 40, 10]} />
        <meshStandardMaterial map={texture}/>
      </mesh>
    );
  }
  
  export default MarsModel;