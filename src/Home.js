import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

const RelativeCamera = React.memo(function RelativeCamera(props) {
  // modified version of code from partynikko from this github issue: https://github.com/pmndrs/react-three-fiber/issues/67#issuecomment-496507403

  return <PerspectiveCamera makeDefault position={[-30, 20, 100]} />
})
function Box(props) {
  const { x, y, z, color, size } = props.box

  return (
    <mesh
      //x,z,y
      position={[x, z, y]}
      scale={clicked ? 1.5 : 1}
      // onClick={(event) => click(!clicked)}
      // onPointerOver={(event) => hover(true)}
      // onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial opacity={0.5} color={color} />
    </mesh>
  )
}

/*

[
  [{x: 0.5, y:1, z:0.5, color: "red", size: 1}],
  [{x: 0.5, y:1, z:0.5, color: "red", size: 1}, {x: 1.5, y:2, z:0.5, color: "yellow", size: 1}],
  [{}.{}.{}],
  [{}.{}.{},{},{}],
  [{}.{}.{},{},{},{},{},{}]
  
]

*/

const colors = [
  'blue', //0
  'yellow', //1
  'red', //2
  'green', //3
  'orange', //4
  'cyan', //5
  'magenta', //6
  'grey', //7
  'black' //8
]

const testBoxes = [
  { x: 0.5, y: 0.5, z: 0.5, color: 'blue', size: 1, dir: 'start' }, //0
  { x: 1.5, y: 0.5, z: 0.5, color: 'yellow', size: 1, dir: 'right' }, //1
  { x: 1, y: -1, z: 1, color: 'red', size: 2, dir: 'up' }, //2
  { x: -1.5, y: -0.5, z: 1.5, color: 'green', size: 3, dir: 'left' }, //3
  { x: -0.5, y: 3.5, z: 2.5, color: 'orange', size: 5, dir: 'down' }, //4
  { x: 6, y: 2, z: 4, color: 'cyan', size: 8, dir: 'right' }, //5 x = 2 (furthest right) + 6 (8-2 = 6)
  { x: 3.5, y: -8.5, z: 6.5, color: 'magenta', size: 13, dir: 'up' }, //6
  { x: -13.5, y: -4.5, z: 10.5, color: 'grey', size: 21, dir: 'left' }, //7
  { x: -7, y: 23, z: 17, color: 'blue', size: 34, dir: 'down' }, //8
  { x: 37.5, y: 12.5, z: 27.5, color: 'yellow', size: 55, dir: 'right' } //9
]

export const Home = () => {
  const [fibNumber, setFibNumber] = useState(0)

  useEffect(() => {
    document.title = 'Home | Kyle Lee'
  }, [])

  const handleFib = (e) => {
    setFibNumber(e.target.value)
  }

  return (
    <div style={{ height: '75%', width: '100%' }}>
      <Canvas>
        <RelativeCamera />
        <axesHelper args={[100, 100, 100]} />
        <gridHelper args={[100, 100]} />
        <OrbitControls makeDefault position={[100, 100, 100]} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {testBoxes.map((box, i) => {
          if (i > fibNumber) {
            return null
          } else {
            return <Box key={i} box={box} />
          }
        })}
      </Canvas>
      <br />
      <span>
        Fib Num
        <input
          onChange={(e) => handleFib(e)}
          value={fibNumber}
          type="range"
          min={0}
          max={10}
        />
        {fibNumber}
      </span>
      <p>Fibonacci Sequence visualized in 3D up to 10.</p>
      <p>
        Move the slider to trigger the visualization. Move the camera in the 3D
        viewer on desktop with left click / scroll. Pinch to zoom in/out on
        mobile
      </p>
    </div>
  )
}
