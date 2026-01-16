import Navigation from './components/Navigation'
import Hero from './components/Hero'
import TrustedPartners from './components/TrustedPartners'
import Features from './components/Features'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navigation />
      <Hero />
      <TrustedPartners />
      <Features />
      <Footer />
    </div>
  )
}

export default App
