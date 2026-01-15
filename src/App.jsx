import Navigation from './components/Navigation'
import Hero from './components/Hero'
import TrustedPartners from './components/TrustedPartners'
import Features from './components/Features'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navigation />
      <Hero />
      <TrustedPartners />
      <Features />
    </div>
  )
}

export default App
