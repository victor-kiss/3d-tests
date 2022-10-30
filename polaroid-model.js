import React, { Suspense } from 'react'
import { useLoader } from "@react-three/fiber";
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'



export default function PolaroidModel(props) {
  const model = useLoader(FBXLoader, '/Polaroid.fbx')
  return (
    <Suspense>
    <mesh {...props} receiveShadow={true}>
      <primitive object={model} />
    </mesh>
    </Suspense>
  )
}
