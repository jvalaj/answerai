import { useState } from 'react'

const models = [
    { id: 'gpt-4.1', name: 'gpt-4.1', available: true },
    { id: 'claude-3.5', name: 'claude 3.5', available: true },
    { id: 'gemini-1.5', name: 'gemini 1.5', available: true },
    { id: 'llama-3', name: 'llama 3', available: true },
    { id: 'mistral', name: 'mistral', available: true },
    { id: 'deepseek', name: 'deepseek', available: true },
    { id: 'coming-soon', name: 'coming soon', available: false },
]

const mockResponse = {
    answer: `Based on the latest research, the most effective approaches to learning a new skill involve spaced repetition, deliberate practice, and immediate feedback loops. Studies show that breaking learning into 25-minute focused sessions with short breaks leads to better retention.

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
            'New classes added regularly',
        ],
    },
}

function Demo() {
    const [selectedModel, setSelectedModel] = useState('gpt-4.1')
    const [modelDropdownOpen, setModelDropdownOpen] = useState(false)
    const [query, setQuery] = useState('')
    const [showResponse, setShowResponse] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [placementFrequency, setPlacementFrequency] = useState('relaxed')

    const handleGenerate = () => {
        if (!query.trim()) return
        setIsLoading(true)
        setShowResponse(false)

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false)
            setShowResponse(true)
        }, 1500)
    }

    return (
        <section id="demo" className="py-32 px-6 relative">
            <div className="max-w-3xl mx-auto relative z-10">
                {/* Section header with logo */}
                <div className="text-center mb-16">
                    <div className="w-14 h-14 mx-auto mb-6 rounded-full overflow-hidden border border-white/20 
                                    bg-black/50 backdrop-blur-sm flex items-center justify-center">
                        <img src="/assets/answerailogo.png" alt="" className="w-9 h-9 object-contain" />
                    </div>
                    <h2 className="section-title">try it yourself</h2>
                    <p className="section-subtitle mx-auto">
                        ask anything. see how placements work.
                    </p>
                </div>

                {/* Demo container - glass effect */}
                <div className="border border-white/15 rounded-xl bg-black/40 backdrop-blur-xl p-0 overflow-hidden
                                shadow-2xl shadow-black/50">
                    {/* Top bar */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
                        <span className="text-sm text-secondary tracking-wide">answerAI demo</span>

                        {/* Model selector */}
                        <div className="relative">
                            <button
                                onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
                                className="flex items-center gap-2 px-3 py-1.5 text-sm text-secondary hover:text-white 
                           border border-white/10 rounded-lg transition-all duration-300 hover:border-white/20"
                            >
                                <span>{selectedModel}</span>
                                <svg className={`w-4 h-4 transition-transform duration-300 ${modelDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {modelDropdownOpen && (
                                <div className="absolute right-0 top-full mt-2 w-48 border border-white/15 rounded-lg 
                                bg-black/95 backdrop-blur-md overflow-hidden z-10">
                                    {models.map((model, index) => (
                                        <div key={model.id}>
                                            {model.id === 'coming-soon' && (
                                                <div className="border-t border-white/10" />
                                            )}
                                            <button
                                                onClick={() => {
                                                    if (model.available) {
                                                        setSelectedModel(model.name)
                                                        setModelDropdownOpen(false)
                                                    }
                                                }}
                                                disabled={!model.available}
                                                className={`w-full text-left px-4 py-2.5 text-sm transition-all duration-200
                          ${model.available
                                                        ? 'text-secondary hover:text-white hover:bg-white/5'
                                                        : 'text-muted cursor-not-allowed'
                                                    }
                          ${selectedModel === model.name ? 'text-white bg-white/5' : ''}
                        `}
                                            >
                                                {model.name}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Input area */}
                    <div className="p-4">
                        <div className="flex gap-3">
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                                placeholder="ask anything. answers are free."
                                className="input-outlined flex-1"
                            />
                            <button
                                onClick={handleGenerate}
                                disabled={isLoading || !query.trim()}
                                className="btn-outlined whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        generating
                                    </span>
                                ) : 'generate'}
                            </button>
                        </div>
                        <p className="text-muted text-xs mt-3 tracking-wide">
                            responses may include one clearly labeled sponsored placement.
                        </p>
                    </div>

                    {/* Response area */}
                    {showResponse && (
                        <div className="border-t border-white/10 animate-fade-in">
                            {/* Answer section */}
                            <div className="p-4 border-b border-white/5">
                                <div className="text-xs text-secondary uppercase tracking-wider mb-3">Answer</div>
                                <div className="text-white/90 leading-relaxed whitespace-pre-line text-sm">
                                    {mockResponse.answer}
                                </div>
                            </div>

                            {/* Placement section */}
                            <div className="p-4 border-b border-white/5">
                                <div className="inline-flex items-center gap-2 px-2 py-1 border border-white/10 rounded text-xs text-secondary mb-3">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                    Sponsored
                                </div>
                                <div className="outlined-subtle p-4 mt-2">
                                    <div className="text-white text-sm font-medium mb-2">{mockResponse.placement.sponsor}</div>
                                    <ul className="space-y-1.5">
                                        {mockResponse.placement.bullets.map((bullet, i) => (
                                            <li key={i} className="text-secondary text-sm flex items-start gap-2">
                                                <span className="text-muted mt-1">•</span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Disclosure */}
                            <div className="p-4 flex items-center justify-between">
                                <p className="text-muted text-xs">
                                    placements help keep answerAI free.
                                </p>

                                {/* Frequency toggle */}
                                <div className="flex items-center gap-3">
                                    <span className="text-xs text-muted">placement frequency</span>
                                    <div className="toggle-group">
                                        <button
                                            onClick={() => setPlacementFrequency('strict')}
                                            className={`toggle-option ${placementFrequency === 'strict' ? 'active' : ''}`}
                                        >
                                            strict
                                        </button>
                                        <button
                                            onClick={() => setPlacementFrequency('relaxed')}
                                            className={`toggle-option ${placementFrequency === 'relaxed' ? 'active' : ''}`}
                                        >
                                            relaxed
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Demo
