import { useState } from 'react'
import './App.css'
import Galaxy from './Galaxy/three.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My Portfolio</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Galaxy />
    </>
  )
}

export default App