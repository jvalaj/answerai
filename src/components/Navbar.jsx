import { useState, useEffect } from 'react'

const navLinks = [
    { label: 'Free ChatGPT', href: '/free-chatgpt' },
    { label: 'How it works', href: '/how-it-works' },
]

function Navbar({ onStartChatting, onNavigate }) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNav = (href) => {
        if (onNavigate) {
            onNavigate(href)
        } else {
            window.location.href = href
        }
    }

    return (
        <nav
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-5xl 
                  transition-all duration-300 rounded-full
                  bg-white/90 backdrop-blur-xl border border-border shadow-soft`}
        >
            <div className="px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <button onClick={() => handleNav('/')} className="flex items-center gap-2 group">
                    <div className="w-12 h-12 rounded-full bg-white text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                        <img
                            src="/assets/ChatLeafylogo.png"
                            alt="ChatLeafy"
                            className="w-10 h-10 object-cover invert"
                        />
                    </div>
                </button>

                {/* Links - Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.label}
                            onClick={() => handleNav(link.href)}
                            className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* CTA */}
                <button
                    onClick={onStartChatting}
                    className="hidden md:block px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full 
                     shadow-sm hover:bg-primary/90 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                >
                    Start Chatting
                </button>

                {/* Mobile Menu Button (simplified) */}
                <button className="md:hidden text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
