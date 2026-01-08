function Hero() {
    return (
        <section id="product" className="min-h-screen flex items-center justify-center px-6 pt-24 relative">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Big Logo */}
                <div className="mb-12 animate-fade-in">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden 
                          bg-black/50 backdrop-blur-sm flex items-center justify-center">
                        <img
                            src="/assets/answerailogo.png"
                            alt="answerAI"
                            className="w-16 h-16 object-contain"
                        />
                    </div>
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight mb-8 animate-fade-in"
                    style={{ animationDelay: '0.1s' }}>
                    free answers.
                    <br />
                    <span className="text-secondary">funded by relevance.</span>
                </h1>

                {/* Subheadline */}
                <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up"
                    style={{ animationDelay: '0.2s' }}>
                    answerAI lets anyone talk to leading language models for free by embedding one clearly labeled, structured placement inside the response.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up"
                    style={{ animationDelay: '0.3s' }}>
                    <a href="#demo" className="btn-outlined">
                        try the demo
                    </a>
                    <a href="#how-it-works" className="btn-secondary">
                        read the spec
                    </a>
                </div>

                {/* Muted line */}
                <p className="text-muted text-sm tracking-wide animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    works across leading models. more coming soon.
                </p>

                {/* Scroll indicator */}
                <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                    <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent mx-auto" />
                </div>
            </div>
        </section>
    )
}

export default Hero
