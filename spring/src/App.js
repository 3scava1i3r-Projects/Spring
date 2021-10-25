import "./App.css";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <div className="App">
        <h1>vineet bsdka</h1>
      </div>

      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <sphereBufferGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
