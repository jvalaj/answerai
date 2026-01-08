const footerLinks = [
    { label: 'privacy', href: '#' },
    { label: 'terms', href: '#' },
    { label: 'docs', href: '#docs' },
    { label: 'contact', href: '#' },
]

function Footer() {
    return (
        <footer className="py-16 px-6 border-t border-gray-200 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Centered logo section */}
                <div className="flex flex-col items-center mb-12">
                    <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-100 
                          bg-gray-50 flex items-center justify-center mb-4 shadow-sm
                          hover:shadow-md transition-all duration-300">
                        <img
                            src="/assets/ChatLeafylogo.png"
                            alt="ChatLeafy"
                            className="w-10 h-10 object-cover opacity-80"
                        />
                    </div>
                    <span className="text-primary text-lg font-medium tracking-wide">ChatLeafy</span>
                </div>

                {/* Links */}
                <div className="flex items-center justify-center gap-8 mb-12">
                    {footerLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-secondary text-sm hover:text-primary transition-colors duration-300 font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Tagline */}
                <div className="pt-8 border-t border-gray-100 text-center">
                    <p className="text-muted text-xs tracking-wide">
                        built for transparent monetization.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
