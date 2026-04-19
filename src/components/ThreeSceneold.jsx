import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
/**
 * Creates a single side of a cube as a Mesh.
 * @param {string} name - The side identifier (front, back, etc.)
 * @param {number} sizeX - Width
 * @param {number} sizeY - Height
 * @param {number} color - Hex color
 * @param {THREE.Vector3} position - Where to place the side
 * @param {THREE.Euler} rotation - How to orient the side
 */
const createCubeSide = (name, sizeX, sizeY, color, position, rotation) => {
  const geometry = new THREE.PlaneGeometry(sizeX, sizeY);
  const material = new THREE.MeshPhongMaterial({ 
    color, 
    side: THREE.DoubleSide,
    shininess: 100 
  });
  const mesh = new THREE.Mesh(geometry, material);
  
  mesh.name = name;
  mesh.position.copy(position);
  mesh.rotation.copy(rotation);
  
  return mesh;
};

const ThreeSceneOld = () => {
  const mountRef = useRef(null);
  const [separation, setSeparation] = useState(0);
  

  useEffect(() => {
    const mountElement = mountRef.current;
    if (!mountElement) return;
const handleScroll = () => {
 
  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  const scrollProgress = scrollTop / maxScroll; // 0 → 1

  const explosionAmount = scrollProgress * 2; // same as slider max
  mountElement.setAttribute("data-sep", explosionAmount);
};

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
//text logic
let textMesh;

const fontLoader = new FontLoader();

fontLoader.load(
  "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
  (font) => {

    const textGeometry = new TextGeometry("Eid Mubarak", {
      font: font,
      size: 0.25,
      depth: 0.02,
      height: 0.02,
      curveSegments: 12,
      bevelEnabled: false
    });
textGeometry.center();
    const textMaterial = new THREE.MeshStandardMaterial({
      color: 0xffd700
    });

    textMesh = new THREE.Mesh(textGeometry, textMaterial);

    // Start inside the box
  textMesh.position.set(0, -0.3, 0);
textMesh.visible = false;
    scene.add(textMesh);
  }
);

// logic ends here of text
    const width = mountElement.clientWidth;
    const height = mountElement.clientHeight;
    
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(3, 3, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountElement.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false
    controls.enableDamping = true;
window.addEventListener("scroll", handleScroll);
    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 1);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x4444ff, 0.5);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    // --- Modular Cube Construction ---
    const w = 2, h = 2, d = 2;
    const halfW = w / 2;
    const halfH = h / 2;
    const halfD = d / 2;

    const group = new THREE.Group();
    scene.add(group);

    const sides = [
      { name: 'front',  w: w, h: h, col: 0xff00ff, pos: [0, 0, halfD],  rot: [0, 0, 0] },
      { name: 'back',   w: w, h: h, col: 0x00ffff, pos: [0, 0, -halfD], rot: [0, Math.PI, 0] },
      { name: 'right',  w: d, h: h, col: 0xff0000, pos: [halfW, 0, 0],  rot: [0, Math.PI / 2, 0] },
      { name: 'left',   w: d, h: h, col: 0x00ff00, pos: [-halfW, 0, 0], rot: [0, -Math.PI / 2, 0] },
      { name: 'top',    w: w, h: d, col: 0x0000ff, pos: [0, halfH, 0],  rot: [-Math.PI / 2, 0, 0] },
      { name: 'bottom', w: w, h: d, col: 0xffff00, pos: [0, -halfH, 0], rot: [Math.PI / 2, 0, 0] },
    ];

    const meshes = sides.map(s => {
      const side = createCubeSide(
        s.name, 
        s.w, 
        s.h, 
        s.col, 
        new THREE.Vector3(...s.pos), 
        new THREE.Euler(...s.rot)
      );
      group.add(side);
      return { mesh: side, originalPos: new THREE.Vector3(...s.pos) };
    });

    // Find the top face
const topObj = meshes.find(m => m.mesh.name === "top");
const topFace = topObj.mesh;

// Remove it from the cube group
group.remove(topFace);

// Create pivot
const lidPivot = new THREE.Group();

// Add pivot to the cube group (important)
group.add(lidPivot);

// Position pivot at hinge edge
lidPivot.position.set(0, halfH, -halfD);

// Move lid relative to pivot
topFace.position.set(0, 0, halfD);

// Attach lid to pivot
lidPivot.add(topFace);

    // --- Animation Loop ---

    let currentSep = 0;
    let animationId;

//   animationId = requestAnimationFrame(animate);

//   group.rotation.y += 0.00;
//   group.rotation.x += 0.00;

//   // Get explosion factor
//   const sep = parseFloat(mountElement.getAttribute('data-sep') || 0);

//   // Open lid like a real box (0 → 90°)
//   lidPivot.rotation.x = -sep * Math.PI / 2;

//   // Move other faces outward (exclude top)
//   // meshes.forEach(({ mesh, originalPos }) => {

//   //   if (mesh.name === "top") return;

//   //   const direction = originalPos.clone().normalize();
//   //   const offset = direction.multiplyScalar(sep);

//   //   mesh.position.copy(originalPos).add(offset);
//   // });

//   controls.update();
//   renderer.render(scene, camera);
// };

const animate = () => {
  animationId = requestAnimationFrame(animate);

  group.rotation.y += 0.00;
  group.rotation.x += 0.00;

  // target value from slider
  const targetSep = parseFloat(mountElement.getAttribute('data-sep') || 0);

  // smooth interpolation (easing)
  currentSep += (targetSep - currentSep) * 0.08;

  // lid rotation
  lidPivot.rotation.x = -currentSep * Math.PI / 2;

  // move other faces outward
  // meshes.forEach(({ mesh, originalPos }) => {

  //   if (mesh.name === "top") return;

  //   const direction = originalPos.clone().normalize();
  //   const offset = direction.multiplyScalar(currentSep);

  //   mesh.position.copy(originalPos).add(offset);
  // });
   if (textMesh) {
        if (currentSep > 0.9) {
          textMesh.visible = true;
          // Increased the target Y to 1.2 so it clears the 1.0 height walls
          if (textMesh.position.y < 1.2) {
            textMesh.position.y += 0.02; // Made it rise slightly faster
          }
        } else {
          // Optional: hide/reset text if box is closed again
          if (textMesh.position.y > -0.3) {
            textMesh.position.y -= 0.04;
          }
          if (textMesh.position.y <= -0.3) {
             textMesh.visible = false;
          }
        }
      }
  controls.update();
  renderer.render(scene, camera);
};
    animate();

    // --- Resize Handler ---
    const handleResize = () => {
      const newWidth = mountElement.clientWidth;
      const newHeight = mountElement.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    // --- Cleanup ---
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      meshes.forEach(({ mesh }) => {
        mesh.geometry.dispose();
        mesh.material.dispose();
      });
      if (mountElement && mountElement.contains(renderer.domElement)) {
        mountElement.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-hidden bg-black font-sans">
      {/* UI Overlay */}
      <div className="absolute top-6 left-6 z-10 bg-black/60 backdrop-blur-xl p-6 rounded-3xl border border-white/10 text-white max-w-xs shadow-2xl">
        
       

        <div className="mt-6 pt-4 border-t border-white/5 grid grid-cols-3 gap-2">
           {['X', 'Y', 'Z'].map(axis => (
             <div key={axis} className="text-center">
                <div className="text-[9px] text-gray-500 mb-1">AXIS</div>
                <div className="text-xs font-bold">{axis}</div>
             </div>
           ))}
        </div>
      </div>

      {/* 3D Canvas Mount Point */}
      <div 
        ref={mountRef} 
        className="w-full h-full" 
        data-sep={separation} 
      />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] text-white/60 uppercase tracking-widest font-medium">
          Interactive WebGL Viewport
        </span>
      </div>
    </div>
  );
};

export default ThreeSceneOld;