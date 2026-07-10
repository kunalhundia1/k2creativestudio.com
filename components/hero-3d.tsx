'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

function RotatingShape() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.005
        meshRef.current.rotation.y += 0.008
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!meshRef.current) return
    const interval = setInterval(() => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.003
        meshRef.current.rotation.y += 0.005
      }
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <mesh ref={meshRef} scale={scale}>
      <icosahedronGeometry args={[2, 4]} />
      <meshPhongMaterial color="#f2d24b" emissive="#f2d24b" emissiveIntensity={0.3} wireframe={false} />
    </mesh>
  )
}

function FloatingCube() {
  const meshRef = useRef<THREE.Mesh>(null)
  const timeRef = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      timeRef.current += 0.01
      if (meshRef.current) {
        meshRef.current.position.y = Math.sin(timeRef.current) * 0.5
        meshRef.current.rotation.x += 0.004
        meshRef.current.rotation.z += 0.006
      }
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <mesh ref={meshRef} position={[3, 0, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#f2d24b" emissive="#d4a800" emissiveIntensity={0.2} metalness={0.4} roughness={0.6} />
    </mesh>
  )
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, -10, 5]} intensity={0.8} color="#f2d24b" />
    </>
  )
}

export default function Hero3D() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* 3D Canvas */}
      <div className="absolute inset-0 w-full h-96 md:h-screen">
        <Canvas style={{ background: '#0a0a0a' }}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <Lights />
          <RotatingShape />
          <FloatingCube />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-32 md:py-48">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-serif text-pretty text-3xl md:text-5xl font-semibold text-white drop-shadow-lg">
              Grow faster with performance marketing and standout design
            </h1>
            <p className="text-gray-300 max-w-prose drop-shadow">
              K2 Creative Studio helps brands scale with social media management, Meta & Google ads, and high-converting
              design for graphics and websites.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:opacity-90">
                <a href="mailto:k2creativestudio@gmail.com">Book a free strategy call</a>
              </Button>
              <Button asChild size="lg" className="bg-accent/20 text-accent border-2 border-accent hover:bg-accent/30">
                <a href="#services">See our services</a>
              </Button>
            </div>
            <ul className="flex flex-wrap items-center gap-4 pt-2 text-sm text-gray-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-accent" aria-hidden />
                ROI-focused campaigns
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-accent" aria-hidden />
                Design that converts
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-accent" aria-hidden />
                Transparent reporting
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
