import React from 'react'

const flag = true

function App() {
  return (
    <div className='App'>
      { flag ? 'true' : 'false'}
      { flag && <span>accour</span> }
    </div>
  )
}

export default App
