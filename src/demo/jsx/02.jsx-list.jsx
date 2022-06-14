import React from 'react'

const list = [
  { id: 1, name: 'Accour1' },
  { id: 2, name: 'Accour2' },
  { id: 3, name: 'Accour3' }
]
function App() {
  return (
    <div className='App'>
      <ul>
        { list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}

export default App
