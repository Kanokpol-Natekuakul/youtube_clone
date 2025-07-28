import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './layout/MainLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchPage from './layout/SearchPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}></Route>
          <Route path="/results" element={<SearchPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
