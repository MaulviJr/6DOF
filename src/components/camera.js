import * as THREE from "three";

export default function camera (width, height) {
       const camera = new THREE.PerspectiveCamera(
          75,
          width / height,
          0.1,
          1000
        );

    // const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 20 );
        camera.position.set(0, 0, 5);
        camera.lookAt(0, 0, 0); 
        return camera
}