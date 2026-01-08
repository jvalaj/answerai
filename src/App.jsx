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
import SEOHead from './components/SEOHead'
import SEOContent from './components/SEOContent'

function App() {
    const [showProduct, setShowProduct] = useState(false)

    if (!showProduct) {
        return (
            <>
                <SEOHead />
                <ChatLanding onLearnMore={() => setShowProduct(true)} />
            </>
        )
    }

    return (
        <div className="min-h-screen bg-bg text-primary font-sans">
            <SEOHead />
            {/* Back to chat button - Refined Pill */}


            <Navbar onStartChatting={() => setShowProduct(false)} />
            <main>
                <Hero onStartChatting={() => setShowProduct(false)} />
                <HowItWorks />
                <WhyItWorks />
                <Safety />
                <Pricing />
            </main>
            <SEOContent />
            <Footer />
        </div>
    )
}

export default App
