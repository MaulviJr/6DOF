import './App.css'
import Cube from './components/cube'
import NewCube from './components/newcube'
import ThreeScene from './components/ThreeScene.jsx'
import { useState } from 'react'
// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <>
//       {/* <Cube/> */}
//       <NewCube/>
//       {/* <ThreeScene /> */}
//       <div style={{ height: "300vh" }}></div>
//     </>
//   )
// }
function App() {
    const [show3D, setShow3D] = useState(true);

    return (
        <div>
            <button onClick={() => setShow3D(false)}>Destroy 3D World</button>
            
            {/* If show3D is true, mount it. If false, unmount it. */}
            {show3D && <NewCube />} 
        </div>
    )
}

export default App
