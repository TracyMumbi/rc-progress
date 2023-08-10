import React from 'react'
import { Line, Circle } from 'rc-progress';



function App() {
  return (
    <div style={{ margin: 20, height: 310, width: 130 }}>
      <Circle 
      percent={10} 
      strokeWidth={10} //thickness of the percentage circle
      strokeColor="blue" //color of the percentage
      trailColor='lightblue' //color of the remaining circle
      trailWidth={10} // thickness of the remaining circle
      strokeLinecap='square' 
      />

    </div>
  )
}

export default App
