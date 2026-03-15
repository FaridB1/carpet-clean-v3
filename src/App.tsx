import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Prices from './pages/Prices/Prices'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/haqqimizda" element={<About />} />
          <Route path="/xidmetlerimiz" element={<Services />} />
          <Route path="/qiymetler" element={<Prices />} />
          <Route path="/elaqe" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
