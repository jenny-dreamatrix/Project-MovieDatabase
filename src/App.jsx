import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import DetailMovie from './pages/DetailMovie'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/movies/:title' element={<DetailMovie/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
