// import React from "react";
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Stars } from '@react-three/drei';
// import { Physics, usePlane, useBox } from '@react-three/cannon';
// import "./App.css";


import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

import { Ground } from './components/Ground';
import Cubes from './components/Cubes';
import { Player } from './components/Player';
import { Hud } from './components/Hud';

function App() {
  return (
    <div style={{height:"100%",width:"100%",position:"absolute"}}>
    <Canvas shadowMap sRGB>
      <Sky sunPosition={[100, 20, 100]} />
      {/* <Stars
          radius={100} // Radius of the inner sphere (default=100)
          depth={50} // Depth of area where stars should fit (default=50)
          count={5000} // Amount of stars (default=5000)
          factor={4} // Size factor (default=4)
          saturation={0} // Saturation 0-1 (default=0)
          fade // Faded dots (default=false)
      /> */}
      <ambientLight intensity={0.25} />
      <pointLight castShadow intensity={0.7} position={[100, 100, 100]} />
      <Hud position={[0, 0, -2]} />
      <Physics gravity={[0, -30, 0]}>
        <Ground position={[0, 0.5, 0]} />
        <Player position={[0, 3, 10]} />
        <Cubes />
      </Physics>
    </Canvas>
    </div>
  );
}

export default App;
// function Box() {
//   const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
//   return (
//     <mesh
//       onClick={() => {
//         api.velocity.set(0, 2, 0);
//       }}
//       ref={ref}
//       position={[0, 2, 0]}
//     >
//       <boxBufferGeometry attach="geometry" />
//       <meshLambertMaterial attach="material" color="hotpink" />
//     </mesh>
//   );
// }

// function Plane() {
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//   }));
//   return (
//     <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
//       <planeBufferGeometry attach="geometry" args={[100, 100]} />
//       <meshLambertMaterial attach="material" color="lightblue" />
//     </mesh>
//   );
// }

// export default function App() {
//   return (
//     <div style={{height:"100%",width:"100%",position:"absolute"}}>
//     <Canvas>
//       <OrbitControls />
//       <Stars />
//       <ambientLight intensity={0.1} />
//       <spotLight position={[10, 15, 10]} angle={0.3} />
//       <Physics>
//         <Box />
//         <Plane />
//       </Physics>
//     </Canvas>
//     </div>
//   );
// }
