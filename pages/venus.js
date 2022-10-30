import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'

import Venus from '../venus-model'

import Navbar from '../navbar'

export default function venus() {
  return (
    <div className={styles.scene}>
      <Head>
        <title>3D TESTS by ssik824</title>
      </Head>
      <Navbar/>
      <Canvas
      shadows={true}
      camera={{position:[0,0,10]}}
      >
        <OrbitControls/>
        <ambientLight color={"white"} intensity={0.3}/>
        <pointLight castShadow={true}/>
        <Venus/>
      </Canvas>
    </div>
  )
}
