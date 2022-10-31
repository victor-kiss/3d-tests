import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'

import Navbar from '../navbar'

import Mars from '../mars-model'

export default function mars() {
  return (
    <div className={styles.scene}>
      <Head>
        <title>3D TESTS</title>
      </Head>
      <Navbar/>
      <Canvas
      shadows={true}
      camera={{position:[0,0,10]}}
      
      >

        <OrbitControls/>
        <ambientLight color={"white"} intensity={0.3}/>
        <pointLight castShadow={true}/>
        <Mars/>
      </Canvas>
    </div>
  )
}
