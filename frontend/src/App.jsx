import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState('loading')
  const apiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:8080'

  useEffect(() => {
    fetch(`${apiUrl}/api/health`)
      .then((response) => response.json())
      .then((data) => setStatus(data.status ?? 'unknown'))
      .catch(() => setStatus('offline'))
  }, [apiUrl])

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
