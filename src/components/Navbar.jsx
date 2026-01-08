import { useState, useEffect } from 'react'

const navLinks = [
    { label: 'product', href: '#product' },
    { label: 'demo', href: '#demo' },
    { label: 'how it works', href: '#how-it-works' },
    { label: 'safety', href: '#safety' },
    { label: 'docs', href: '#docs' },
    { label: 'get access', href: '#pricing' },
]

function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl 
                 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl
                 transition-all duration-500 shadow-2xl shadow-black/50"
        >
            <div className="px-6 py-3 flex items-center justify-between">
                {/* Logo - Circle cropped, bigger */}
                <a href="#" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 
                          bg-black flex items-center justify-center
                          group-hover:border-white/40 transition-all duration-300">
                        <img
                            src="/assets/answerailogo.png"
                            alt="answerAI"
                            className="w-8 h-8 object-contain opacity-90 group-hover:opacity-100 
                         transition-all duration-300 group-hover:scale-110"
                        />
                    </div>
                    <span className="text-white text-xl tracking-wide font-light">
                        answerAI
                    </span>
                </a>

                {/* Nav Links - Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className="nav-link">
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-secondary hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
