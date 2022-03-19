import React from 'react'
import * as THREE from 'three'

function run(node) {
  let camera
  let scene
  let renderer
  let geometry
  let particle
  let material
  let particleCount
  let points
  let texture
  let xSpeed
  let ySpeed
  xSpeed = 0.0005
  ySpeed = 0.001
  const winWidth = window.innerWidth
  const winHeight = window.innerHeight

  init()
  animate()

  function init() {
    scene = new THREE.Scene()
    // scene.background = new THREE.Color(0xff0000);
    scene.fog = new THREE.FogExp2('#222', 0.001)

    camera = new THREE.PerspectiveCamera(75, winWidth / winHeight, 1, 1000)
    camera.position.z = 500

    // particle
    material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 3,
      transparent: true,
      blending: THREE.AdditiveBlending,
    })

    particleCount = 10000
    geometry = new THREE.BufferGeometry()
    geometry.vertices = []
    const pointsArray = []

    for (let i = 0; i < particleCount; i++) {
      const px = Math.random() * 2000 - 1000
      const py = Math.random() * 2000 - 1000
      const pz = Math.random() * 1200 - 1000
      particle = new THREE.Vector3(px, py, pz)
      particle.velocity = new THREE.Vector3(0, Math.random(), 0)
      pointsArray.push(particle)
      geometry.vertices.push(particle)
    }

    geometry.setFromPoints(pointsArray)
    points = new THREE.Points(geometry, material)
    points.sortParticles = true
    scene.add(points)

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(winWidth, winHeight)
    renderer.setClearColor('#222', 1)
    renderer.setClearAlpha(0)
    node.appendChild(renderer.domElement)
  }

  function animate() {
    requestAnimationFrame(animate)

    scene.rotation.y += xSpeed
    // パ┼ティクル上下移?
    let i = particleCount
    while (i--) {
      const particle = geometry.vertices[i]

      // y
      if (particle.y > 1000) {
        particle.y = -1000
        particle.velocity.y = Math.random()
      }
      particle.velocity.y += Math.random() * ySpeed

      particle.add(particle.velocity)
    }
    points.geometry.verticesNeedUpdate = true
    render()
  }

  function render() {
    camera.lookAt(scene.position)
    renderer.render(scene, camera)
  }
}

export default function DecorateThree() {
  const canvasRef = React.useCallback((node) => {
    if (node) {
      run(node)
    }
  }, [])
  return <div ref={canvasRef} />
}
