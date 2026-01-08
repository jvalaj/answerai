import HowItWorks from './HowItWorks'
import WhyItWorks from './WhyItWorks'
import Safety from './Safety'
import Pricing from './Pricing'

function HowItWorksPage({ onStartChatting, onNavigate }) {
    return (
        <div className="bg-bg text-primary min-h-screen">
            <div className="max-w-6xl mx-auto px-6 pt-16 pb-12 space-y-8">
                <header className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-wide text-secondary">Overview</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        How ChatLeafy Works
                    </h1>
                    <p className="text-lg text-secondary max-w-3xl">
                        ChatLeafy gives you quick access to modern language models without signups. Responses may include
                        sponsored cards that are labeled and relevant, which funds the free experience. No chat transcripts
                        are indexed for search.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={onStartChatting}
                            className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                        >
                            Start free chat
                        </button>
                        <button
                            onClick={() => onNavigate?.('/free-chatgpt')}
                            className="px-6 py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-white transition-colors"
                        >
                            Read the Free ChatGPT guide
                        </button>
                    </div>
                </header>
            </div>

            <main className="space-y-12">
                <HowItWorks />
                <WhyItWorks />
                <Safety />
                <Pricing />
            </main>
        </div>
    )
}

export default HowItWorksPage
