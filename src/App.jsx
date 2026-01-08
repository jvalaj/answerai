import { useEffect, useMemo, useState } from 'react'
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
import FreeChatGPT from './components/FreeChatGPT'
import LegalPage from './components/LegalPage'
import HowItWorksPage from './components/HowItWorksPage'

const getRouteFromPath = () => {
    const path = window.location.pathname.replace(/\/+$/, '') || '/'
    switch (path) {
        case '/free-chatgpt':
            return 'free-chatgpt'
        case '/how-it-works':
            return 'how-it-works'
        case '/privacy':
            return 'privacy'
        case '/terms':
            return 'terms'
        default:
            return 'home'
    }
}

function App() {
    const [route, setRoute] = useState(getRouteFromPath)
    const [showProduct, setShowProduct] = useState(false)

    useEffect(() => {
        const handlePopState = () => setRoute(getRouteFromPath())
        window.addEventListener('popstate', handlePopState)
        return () => window.removeEventListener('popstate', handlePopState)
    }, [])

    const navigate = (path) => {
        if (path !== window.location.pathname) {
            window.history.pushState({}, '', path)
        }
        setRoute(getRouteFromPath())
        window.scrollTo({ top: 0, behavior: 'smooth' })
        if (path === '/') {
            setShowProduct(false)
        }
    }

    const handleStartChatting = () => {
        navigate('/')
        setShowProduct(false)
    }

    const handleLearnMore = () => {
        navigate('/free-chatgpt')
    }

    const legalPages = useMemo(
        () => ({
            privacy: {
                title: 'Privacy at ChatLeafy',
                intro: 'We keep ChatLeafy simple: no required accounts, sponsored placements are labeled, and chat URLs are blocked from indexing.',
                sections: [
                    {
                        title: 'Data handling',
                        body: 'We only store what is needed to operate the service. Conversations are not published or indexed. We may use aggregate, anonymized analytics to improve the product.',
                    },
                    {
                        title: 'Sponsored content',
                        body: 'Sponsored cards are separated from answers and clearly labeled. They help fund the free experience and are never hidden inside responses.',
                    },
                    {
                        title: 'Your controls',
                        body: 'If you want to clear local history, use the new chat controls in the sidebar. For any data questions, contact us and we will help.',
                    },
                ],
            },
            terms: {
                title: 'ChatLeafy Terms',
                intro: 'ChatLeafy is provided as-is for personal and educational use. Please review these basics before you chat.',
                sections: [
                    {
                        title: 'Usage',
                        body: 'Use ChatLeafy responsibly. Do not submit unlawful, harmful, or misleading content. Our models may generate incorrect outputs—review important information before acting on it.',
                    },
                    {
                        title: 'Availability',
                        body: 'We may update or rotate models to keep the free experience available. Service availability can vary based on demand.',
                    },
                    {
                        title: 'Monetization',
                        body: 'Sponsored placements are disclosed and help keep the service free. We do not sell personal data or require subscriptions.',
                    },
                ],
            },
        }),
        [],
    )

    if (route === 'free-chatgpt') {
        return (
            <>
                <SEOHead page={route} />
                <FreeChatGPT onStartChatting={handleStartChatting} onNavigate={navigate} />
            </>
        )
    }

    if (route === 'how-it-works') {
        return (
            <>
                <SEOHead page={route} />
                <HowItWorksPage onStartChatting={handleStartChatting} onNavigate={navigate} />
            </>
        )
    }

    if (route === 'privacy' || route === 'terms') {
        const page = legalPages[route]
        return (
            <>
                <SEOHead page={route} />
                <LegalPage
                    title={page.title}
                    intro={page.intro}
                    sections={page.sections}
                    onStartChatting={handleStartChatting}
                />
            </>
        )
    }

    if (!showProduct) {
        return (
            <>
                <SEOHead page="home" />
                <ChatLanding onLearnMore={handleLearnMore} />
            </>
        )
    }

    return (
        <div className="min-h-screen bg-bg text-primary font-sans">
            <SEOHead page="home" />
            {/* Back to chat button - Refined Pill */}


            <Navbar onStartChatting={handleStartChatting} onNavigate={navigate} />
            <main>
                <Hero onStartChatting={handleStartChatting} />
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
