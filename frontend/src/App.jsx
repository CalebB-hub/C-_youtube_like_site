import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    fetch('http://localhost:8080/api/health')
      .then((response) => response.json())
      .then((data) => setStatus(data.status ?? 'unknown'))
      .catch(() => setStatus('offline'))
  }, [])

  return (
    <main className="app">
      <h1>YouTube-like Site</h1>
      <p>React frontend scaffold</p>
      <p>Backend: Drogon + C++</p>
      <p>
        API health: <strong>{status}</strong>
      </p>
    </main>
  )
}

export default App
