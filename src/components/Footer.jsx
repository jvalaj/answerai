const footerLinks = [
    { label: 'privacy', href: '#' },
    { label: 'terms', href: '#' },
    { label: 'docs', href: '#docs' },
    { label: 'contact', href: '#' },
]

function Footer() {
    return (
        <footer className="py-16 px-6 border-t border-white/10">
            <div className="max-w-6xl mx-auto">
                {/* Centered logo section */}
                <div className="flex flex-col items-center mb-12">
                    <div className="w-16 h-16 rounded-full overflow-hidden border border-white/20 
                          bg-black/50 backdrop-blur-sm flex items-center justify-center mb-4
                          hover:border-white/40 transition-all duration-300">
                        <img
                            src="/assets/answerailogo.png"
                            alt="answerAI"
                            className="w-10 h-10 object-contain"
                        />
                    </div>
                    <span className="text-white text-lg tracking-wide">answerAI</span>
                </div>

                {/* Links */}
                <div className="flex items-center justify-center gap-8 mb-12">
                    {footerLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-muted text-sm hover:text-secondary transition-colors duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Tagline */}
                <div className="pt-8 border-t border-white/5 text-center">
                    <p className="text-muted text-xs tracking-wide">
                        built for transparent monetization.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
