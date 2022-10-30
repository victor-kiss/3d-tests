import React from 'react'
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function DiscoBallModel(props) {
  const texture = useLoader(TextureLoader,'/discoball.jpg')
  return (
      <mesh {...props} receiveShadow={true}>
        <sphereBufferGeometry args={[4, 30, 10]}/>
        <meshStandardMaterial map={texture}/>
      </mesh>
  )
}
