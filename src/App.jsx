import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import TopicPage from './pages/TopicPage'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery/:topic" element={<TopicPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
