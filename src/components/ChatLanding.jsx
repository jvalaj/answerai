import { useState, useRef, useEffect } from 'react'

const models = [
    { id: 'gpt-4.1', name: 'gpt-4.1', available: true },
    { id: 'claude-3.5', name: 'claude 3.5', available: true },
    { id: 'gemini-1.5', name: 'gemini 1.5', available: true },
    { id: 'llama-3', name: 'llama 3', available: true },
    { id: 'mistral', name: 'mistral', available: true },
    { id: 'deepseek', name: 'deepseek', available: true },
]

const mockResponse = {
    answer: `Based on the latest research, the most effective approaches to learning a new skill involve spaced repetition, deliberate practice, and immediate feedback loops.

Key principles:
• Start with fundamentals before advancing
• Practice at the edge of your ability
• Get feedback as quickly as possible
• Sleep consolidates learning`,
    placement: {
        sponsor: 'Masterclass',
        bullets: [
            'Expert-led courses on hundreds of skills',
            'Mobile-friendly for learning anywhere',
        ],
    },
}

function ChatLanding({ onLearnMore }) {
    const [selectedModel, setSelectedModel] = useState('gpt-4.1')
    const [modelDropdownOpen, setModelDropdownOpen] = useState(false)
    const [query, setQuery] = useState('')
    const [messages, setMessages] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, isLoading])

    const handleSubmit = (e) => {
        e?.preventDefault()
        if (!query.trim() || isLoading) return

        const userMessage = { role: 'user', content: query, id: Date.now() }
        setMessages(prev => [...prev, userMessage])
        setQuery('')
        setIsLoading(true)

        // Simulate API response
        setTimeout(() => {
            const assistantMessage = {
                role: 'assistant',
                content: mockResponse.answer,
                placement: mockResponse.placement,
                id: Date.now() + 1
            }
            setMessages(prev => [...prev, assistantMessage])
            setIsLoading(false)
        }, 1500)
    }

    return (
        <div className="flex flex-col h-screen bg-bg relative overflow-hidden font-sans">
            {/* Header */}
            <header className="flex-shrink-0 flex items-center justify-between px-6 py-4 z-20">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden 
                          bg-black/50 backdrop-blur-sm flex items-center justify-center">
                        <img src="/assets/answerailogo.png" alt="answerAI" className="w-5 h-5 object-contain" />
                    </div>
                    <span className="text-white/90 text-sm font-medium tracking-wide">answerAI</span>
                </div>

                {/* Model selector - minimalist pill */}
                <div className="relative">
                    <button
                        onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm text-secondary hover:text-white 
                       transition-colors duration-200"
                    >
                        <span className="opacity-80">{selectedModel}</span>
                        <svg className={`w-3 h-3 transition-transform duration-300 ${modelDropdownOpen ? 'rotate-180' : ''}`}
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {modelDropdownOpen && (
                        <div className="absolute right-0 top-full mt-2 w-48 border border-white/10 rounded-xl 
                            bg-[#0A0A0A] overflow-hidden z-50 animate-fade-in">
                            {models.map((model) => (
                                <button
                                    key={model.id}
                                    onClick={() => {
                                        setSelectedModel(model.name)
                                        setModelDropdownOpen(false)
                                    }}
                                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-200
                    text-secondary hover:text-white hover:bg-white/5
                    ${selectedModel === model.name ? 'text-white bg-white/5' : ''}
                  `}
                                >
                                    {model.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </header>

            {/* Main chat area */}
            <main className="flex-1 flex flex-col w-full max-w-3xl mx-auto px-4 md:px-0 relative z-10">
                {messages.length === 0 ? (
                    /* Empty state - Center Vertically */
                    <div className="flex-1 flex flex-col items-center justify-center -mt-20 animate-fade-in">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 backdrop-blur-sm">
                            <img src="/assets/answerailogo.png" alt="" className="w-10 h-10 object-contain opacity-90" />
                        </div>
                        <h1 className="text-2xl text-white font-medium mb-3 tracking-tight">
                            How can I help you today?
                        </h1>
                        <p className="text-secondary text-sm max-w-md text-center leading-relaxed">
                            answerAI provides free access to leading models, funded by relevant, transparent placements.
                        </p>
                    </div>
                ) : (
                    /* Messages List */
                    <div className="flex-1 overflow-y-auto pt-4 pb-4 space-y-8 no-scrollbar">
                        {messages.map((msg) => (
                            <div key={msg.id} className="animate-slide-up group">
                                {/* User Message */}
                                {msg.role === 'user' && (
                                    <div className="flex justify-end mb-2">
                                        <div className="px-5 py-3 bg-white/10 text-white rounded-3xl rounded-br-sm max-w-[85%] leading-relaxed text-[15px]">
                                            {msg.content}
                                        </div>
                                    </div>
                                )}

                                {/* Assistant Message */}
                                {msg.role === 'assistant' && (
                                    <div className="flex items-start gap-4 px-2">
                                        <div className="w-8 h-8 rounded-full bg-black flex-shrink-0 flex items-center justify-center mt-1">
                                            <img src="/assets/answerailogo.png" alt="AI" className="w-5 h-5 opacity-80" />
                                        </div>
                                        <div className="flex-1 space-y-4">
                                            <div className="text-white/90 leading-7 text-[15px] whitespace-pre-line pt-1">
                                                {msg.content}
                                            </div>

                                            {/* Sponsored Placement */}
                                            {msg.placement && (
                                                <div className="border border-white/5 rounded-xl bg-white/5 p-4 max-w-md hover:border-white/10 transition-colors duration-300">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <span className="w-1.5 h-1.5 bg-accent/80 rounded-full" />
                                                        <span className="text-[10px] font-medium text-white/50 tracking-wide uppercase">Sponsored</span>
                                                    </div>
                                                    <div className="text-white font-medium text-sm mb-2">
                                                        {msg.placement.sponsor}
                                                    </div>
                                                    <ul className="space-y-2">
                                                        {msg.placement.bullets.map((b, j) => (
                                                            <li key={j} className="text-secondary text-[13px] flex items-start gap-2.5">
                                                                <span className="text-white/20 mt-1.5">•</span>
                                                                {b}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Loading Indicator */}
                        {isLoading && (
                            <div className="flex items-start gap-4 px-2 animate-fade-in">
                                <div className="w-8 h-8 rounded-full bg-black flex-shrink-0 flex items-center justify-center mt-1">
                                    <img src="/assets/answerailogo.png" alt="AI" className="w-5 h-5 opacity-80" />
                                </div>
                                <div className="flex items-center gap-1.5 h-8">
                                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} className="h-4" />
                    </div>
                )}
            </main>

            {/* Footer / Input Area */}
            <div className="flex-shrink-0 w-full max-w-3xl mx-auto px-4 pb-6 pt-2 z-20">
                <form onSubmit={handleSubmit} className="relative group">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Ask anything..."
                        className="w-full bg-white/5 border border-white/10 rounded-full pl-6 pr-12 py-4 
                       text-white placeholder-white/30 outline-none 
                       focus:border-white/20 focus:bg-white/10
                       transition-all duration-300 text-[15px]"
                    />
                    <button
                        type="submit"
                        disabled={!query.trim() || isLoading}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full 
                       bg-white/10 hover:bg-white text-white hover:text-black
                       flex items-center justify-center transition-all duration-300
                       disabled:opacity-0 disabled:scale-75 disabled:hover:bg-transparent"
                    >
                        <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </form>

                <div className="flex items-center justify-center mt-4 pb-2">
                    <button
                        onClick={onLearnMore}
                        className="group flex items-center gap-2 text-xs text-white/30 hover:text-white/60 transition-colors duration-300"
                    >
                        <span className="font-light tracking-wide">Learn how we keep this free</span>
                        <div className="w-3.5 h-3.5 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                            <svg className="w-2 h-2 transform group-hover:-rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatLanding
