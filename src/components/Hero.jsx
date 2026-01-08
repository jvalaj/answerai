function Hero({ onStartChatting }) {
    return (
        <section id="product" className="min-h-[90vh] flex items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden bg-bg">
            {/* Subtle Gradient Spot - Very soft */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl pointer-events-none opacity-60" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Logo Mark */}
                <div className="mb-8 animate-fade-in inline-block shadow-soft rounded-full p-1 bg-white overflow-hidden">
                    <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center overflow-hidden">
                        <img
                            src="/assets/ChatLeafylogo.png"
                            alt="ChatLeafy"
                            className="w-24 h-24 object-cover"
                        />
                    </div>
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-primary mb-6 animate-slide-up leading-[1.1] text-balance">
                    Free Answers.
                    <br />
                    <span className="text-secondary font-normal">Funded by Ads.</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up"
                    style={{ animationDelay: '0.1s' }}>
                    Access leading language models for free. <br /> We treat ads like citations: structured, clearly labeled, and strictly relevant.
                </p>

                {/* CTA */}
                <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <button onClick={onStartChatting} className="bg-black text-white px-10 py-4 text-lg min-w-[200px] rounded-full">
                        Start Chatting
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
