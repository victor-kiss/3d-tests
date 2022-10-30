import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import Polaroid from '../polaroid-model'

import Navbar from '../navbar'

export default function Home() {
  return (
    <div className={styles.scene}>
      <Head>
        <title>3D TESTS by ssik824</title>
      </Head>
      <Navbar/>
      <Canvas
      shadows={true}
      camera={
        {position:[0,0,6]}
      }
      >
     
        <OrbitControls/>
        <ambientLight color={"white"} intensity={0.3}/>
        <pointLight castShadow={true}/>
        <Polaroid/>
      </Canvas>
    </div>
  )
}
