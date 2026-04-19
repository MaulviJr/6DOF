import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

function NewCube() {
    const mountRef = useRef(null)

    useEffect(() => {
        const mount = mountRef.current
        if (!mount) return

        const scene = new THREE.Scene()
        const gridHelper = new THREE.GridHelper(12, 12, 0x444444, 0x222222)
        const axesHelper = new THREE.AxesHelper(3)
        scene.add(gridHelper)
        scene.add(axesHelper)

        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000)
        camera.position.z = 5

        const renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setSize(mount.clientWidth, mount.clientHeight)
        mount.appendChild(renderer.domElement)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true

        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: 0x0b1020 })
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)

        // Keep currently pressed keys in a set so movement/rotation can be continuous.
        const pressedKeys = new Set()
        const trackedKeys = new Set(['arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'x', 'y', 'z'])

        const onKeyDown = (event) => {
            const key = event.key.toLowerCase()
            console.log("the key: ", key);
            if (!trackedKeys.has(key)) return

            pressedKeys.add(key)

            // Prevent browser scrolling while arrow keys control the cube.
            if (key.startsWith('arrow')) {
                event.preventDefault()
            }
        }

        const onKeyUp = (event) => {
            const key = event.key.toLowerCase()
            if (!trackedKeys.has(key)) return
            pressedKeys.delete(key)
        }

        window.addEventListener('keydown', onKeyDown)
        window.addEventListener('keyup', onKeyUp)

        // Speeds are frame-rate independent because they are scaled with delta time.
        const moveSpeed = 3
        const rotateSpeed = THREE.MathUtils.degToRad(90)
        const clock = new THREE.Clock()

        let animationId
        const animate = () => {
            animationId = requestAnimationFrame(animate)

            const delta = clock.getDelta()

            // Translation controls (arrow keys) with custom axis mapping.
            if (pressedKeys.has('arrowup')) cube.position.y += moveSpeed * delta
            if (pressedKeys.has('arrowdown')) cube.position.y -= moveSpeed * delta
            if (pressedKeys.has('arrowleft')) cube.position.z -= moveSpeed * delta
            if (pressedKeys.has('arrowright')) cube.position.x += moveSpeed * delta

            // Rotation controls: X = pitch, Y = yaw, Z = roll.
            if (pressedKeys.has('x')) cube.rotateX(rotateSpeed * delta)
            if (pressedKeys.has('y')) cube.rotateY(rotateSpeed * delta)
            if (pressedKeys.has('z')) cube.rotateZ(rotateSpeed * delta)

            controls.update()
            renderer.render(scene, camera)
        }

        animate()

        const handleResize = () => {
            const width = mount.clientWidth
            const height = mount.clientHeight
            camera.aspect = width / height
            camera.updateProjectionMatrix()
            renderer.setSize(width, height)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.cancelAnimationFrame(animationId)
            window.removeEventListener('keydown', onKeyDown)
            window.removeEventListener('keyup', onKeyUp)
            window.removeEventListener('resize', handleResize)

            controls.dispose()
            pressedKeys.clear()
            geometry.dispose()
            material.dispose()
            renderer.dispose()

            if (mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement)
            }
        }
    }, [])

    return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />
}

export default NewCube