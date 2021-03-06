import React from 'react'

const getHtag = (type) => {
  if (type === 1) {
    return <h1>this is h1</h1>
  } else if (type === 2) {
    return <h2>this is h2</h2>
  } else {
    return <h3>this is h3</h3>
  }
}

function App() {
  return (
    <div className='App'>
      { getHtag(1) }
      { getHtag(2) }
      { getHtag(3) }
    </div>
  )
}

export default App
