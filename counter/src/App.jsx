import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is a Counter Application</h1>
      <div className="card">
        <div>
          <button>
            count is {count}
          </button>
        </div>

        <div style={{ paddingTop: '20px' }}>
          <button style={{ marginRight: '20px' }} onClick={() => setCount((count) => count + 1)}>
            +
          </button>
          <button onClick={() => setCount((count) => count - 1)}>
            -
          </button>
        </div>
      </div >
    </>
  )
}

export default App
