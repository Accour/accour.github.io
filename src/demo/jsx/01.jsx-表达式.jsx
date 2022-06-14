import React from 'react'

const name = 'Accour'
const getAge = () => { return 18 }

function App() {
  return (
    <div className='App'>
      { name }
      { getAge() }
    </div>
  )
}

export default App
