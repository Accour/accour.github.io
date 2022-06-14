import React from 'react'
import './style.css'

const style = {
  color: 'red',
  fontSize: '30px'
}

function App() {
  return (
    <div className='App'>
      <span style={style}>this is span</span>
      <span style={{ color: 'red', fontSize: '30px' }}>this is span</span>
      <span className='active'>123</span>
    </div>
  )
}

export default App
