import { useState } from 'react'
import ChatLanding from './components/ChatLanding'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Demo from './components/Demo'
import HowItWorks from './components/HowItWorks'
import WhyItWorks from './components/WhyItWorks'
import Safety from './components/Safety'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
    const [showProduct, setShowProduct] = useState(false)

    if (!showProduct) {
        return <ChatLanding onLearnMore={() => setShowProduct(true)} />
    }

    return (
        <div className="min-h-screen bg-bg">
            {/* Back to chat button */}
            <button
                onClick={() => setShowProduct(false)}
                className="fixed top-6 right-6 z-50 px-5 py-2.5 text-xs font-medium text-secondary 
                   border border-white/10 rounded-full bg-black/50 backdrop-blur-xl
                   hover:text-white hover:border-white/20 hover:bg-white/5 
                   transition-all duration-300 tracking-wide uppercase flex items-center gap-2"
            >
                <span>chat</span>
                <span className="text-white/40">/</span>
                <span className="text-white">product</span>
            </button>

            <Navbar />
            <main>
                <Hero />
                <Demo />
                <HowItWorks />
                <WhyItWorks />
                <Safety />
                <Pricing />
            </main>
            <Footer />
        </div>
    )
}

export default App
