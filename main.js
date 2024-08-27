import './style.css'

import * as THREE from "three"

// Scene
const scene = new THREE.Scene()

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
camera.position.setZ(50)
scene.add(camera)

// Geometry
const geometry = new THREE.TorusGeometry(12, 3, 25, 100)
const material = new THREE.MeshStandardMaterial({ color: 0x88ff4d })
const torus = new THREE.Mesh(geometry, material)
scene.add(torus)

// const geometry = new THREE.SphereGeometry(3, 50, 50)
// const material = new

// Light
const light = new THREE.PointLight(0xffffff, 100, 200)
light.position.set(0, 10, 10)
scene.add(light)

// Renderer
const canvas = document.querySelector("#canvas")
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)

// Resize
window.addEventListener("resize", (event) => {
    // Update Sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update Camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update Renderer
    renderer.setSize(sizes.width, sizes.height)
})

const loop = () => {
    torus.rotateX(0.01)
    torus.rotateY(0.01)
    torus.rotateZ(0.01)
    renderer.render(scene, camera)
    window.requestAnimationFrame(loop)
}
loop()