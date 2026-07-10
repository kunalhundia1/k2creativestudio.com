'use client'

import { Canvas } from '@react-three/fiber'
import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { Button } from '@/components/ui/button'
import {
  Megaphone,
  MousePointerClick,
  Search,
  Palette,
  MonitorSmartphone,
  BarChart3,
} from 'lucide-react'

interface Service3DCardProps {
  position: [number, number, number]
  color: string
  title: string
  icon: React.ReactNode
}

function Service3DBox({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.003
        meshRef.current.rotation.y += 0.005
        if (hovered) {
          meshRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1)
        } else {
          meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
        }
      }
    }, 30)
    return () => clearInterval(interval)
  }, [hovered])

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={hovered ? 0.6 : 0.2}
        metalness={0.6}
        roughness={0.4}
      />
    </mesh>
  )
}

function Service3DScene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, -10, 5]} intensity={0.8} color="#f2d24b" />

      <Service3DBox position={[-3, 0, 0]} color="#f2d24b" />
      <Service3DBox position={[0, 0, 0]} color="#e5b700" />
      <Service3DBox position={[3, 0, 0]} color="#d4a800" />
    </>
  )
}

export default function Services3D() {
  const services = [
    {
      icon: <Megaphone className="size-5" aria-hidden />,
      title: 'Social Media Management',
      desc: 'Strategy, content, and community to grow your brand across Instagram, Facebook, LinkedIn, and more.',
    },
    {
      icon: <MousePointerClick className="size-5" aria-hidden />,
      title: 'Meta Ads',
      desc: 'Performance-driven campaigns across Facebook & Instagram with precise targeting and testing.',
    },
    {
      icon: <Search className="size-5" aria-hidden />,
      title: 'Google Ads',
      desc: 'Search, Performance Max, and YouTube campaigns optimized for conversions and ROAS.',
    },
    {
      icon: <Palette className="size-5" aria-hidden />,
      title: 'Graphic Design',
      desc: 'On-brand creative for social, ads, presentations, and print that elevates your message.',
    },
    {
      icon: <MonitorSmartphone className="size-5" aria-hidden />,
      title: 'Website Design',
      desc: 'Modern, responsive websites that communicate clearly and convert visitors into customers.',
    },
    {
      icon: <BarChart3 className="size-5" aria-hidden />,
      title: 'Analytics & Reporting',
      desc: 'Clear dashboards and insights so you always know what&apos;s working and why.',
    },
  ]

  return (
    <section id="services" className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="max-w-2xl mb-12">
        <h2 className="font-serif text-pretty text-2xl md:text-4xl font-semibold">What we do</h2>
        <p className="text-muted-foreground mt-3">Full-funnel marketing and design support to move your metrics forward.</p>
      </div>

      {/* 3D Canvas Container */}
      <div className="w-full h-64 md:h-80 rounded-lg border border-border/50 mb-12 overflow-hidden">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <Service3DScene />
        </Canvas>
      </div>

      {/* Service Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`group relative p-6 rounded-lg border transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${
              i % 2 === 0
                ? 'bg-card border-border hover:border-accent/50'
                : 'bg-background border-border/50 hover:border-accent/50'
            }`}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity bg-gradient-to-br from-accent/5 to-transparent" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center rounded-md bg-accent/10 text-accent p-2 mb-3 group-hover:bg-accent/20 transition-colors">
                {s.icon}
              </div>
              <h3 className="font-serif text-base font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <Button asChild size="sm" className="bg-accent text-accent-foreground hover:opacity-90">
                <a href="mailto:k2creativestudio@gmail.com" aria-label={`Book a strategy call about ${s.title}`}>
                  Book a Strategy Call
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
