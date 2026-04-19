import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function Cube() {
	const mountRef = useRef(null)

	return (
		<div
			ref={mountRef}
			style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}
		/>
	)
}

export default Cube
