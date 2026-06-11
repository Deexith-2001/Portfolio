import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Background() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
    renderer.setSize(innerWidth, innerHeight)
    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
    camera.position.z = 5

    // Particles
    const N = 2200
    const geo = new THREE.BufferGeometry()
    const pos = new Float32Array(N * 3)
    const col = new Float32Array(N * 3)
    const palette = [
      new THREE.Color(0x00f5ff),
      new THREE.Color(0x0066ff),
      new THREE.Color(0x7b2fff),
      new THREE.Color(0xffffff),
    ]
    for (let i = 0; i < N; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 22
      pos[i * 3 + 1] = (Math.random() - 0.5) * 22
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
      const c = palette[Math.floor(Math.random() * palette.length)]
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3))
    const pmat = new THREE.PointsMaterial({ size: 0.038, vertexColors: true, transparent: true, opacity: 0.65 })
    const particles = new THREE.Points(geo, pmat)
    scene.add(particles)

    // Wireframe shapes
    const shapes = []
    const geos = [
      new THREE.IcosahedronGeometry(0.6, 0),
      new THREE.OctahedronGeometry(0.5, 0),
      new THREE.TetrahedronGeometry(0.6, 0),
      new THREE.TorusGeometry(0.4, 0.14, 8, 16),
      new THREE.BoxGeometry(0.7, 0.7, 0.7),
    ]
    for (let i = 0; i < 7; i++) {
      const g = geos[i % geos.length]
      const m = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00f5ff : 0x7b2fff,
        wireframe: true,
        transparent: true,
        opacity: 0.13,
      })
      const mesh = new THREE.Mesh(g, m)
      mesh.position.set(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 4 - 2
      )
      const s = 0.5 + Math.random() * 0.9
      mesh.scale.set(s, s, s)
      scene.add(mesh)
      shapes.push({ mesh, sx: (Math.random() - 0.5) * 0.005, sy: (Math.random() - 0.5) * 0.008 })
    }

    let mmx = 0, mmy = 0
    const onMouseMove = e => {
      mmx = (e.clientX / innerWidth - 0.5) * 2
      mmy = (e.clientY / innerHeight - 0.5) * 2
    }
    document.addEventListener('mousemove', onMouseMove)

    const clock = new THREE.Clock()
    let animId

    const render = () => {
      const t = clock.getElapsedTime()
      particles.rotation.y = t * 0.018
      particles.rotation.x = t * 0.009
      camera.position.x += (mmx * 0.5 - camera.position.x) * 0.05
      camera.position.y += (-mmy * 0.3 - camera.position.y) * 0.05
      camera.lookAt(scene.position)
      shapes.forEach(s => {
        s.mesh.rotation.x += s.sx
        s.mesh.rotation.y += s.sy
        s.mesh.position.y += Math.sin(t * 0.4 + s.mesh.position.x) * 0.002
      })
      renderer.render(scene, camera)
      animId = requestAnimationFrame(render)
    }
    render()

    const onResize = () => {
      camera.aspect = innerWidth / innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(innerWidth, innerHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      document.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
    }
  }, [])

  return <canvas id="canvas-bg" ref={canvasRef} />
}
