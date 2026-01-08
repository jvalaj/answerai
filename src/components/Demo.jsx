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
    ChatLeafy: `Based on the latest research, the most effective approaches to learning a new skill involve spaced repetition, deliberate practice, and immediate feedback loops. Studies show that breaking learning into 25-minute focused sessions with short breaks leads to better retention.

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
        <section id="demo" className="py-32 px-6 relative bg-bg">
            <div className="max-w-3xl mx-auto relative z-10">
                {/* Section header with logo */}
                <div className="text-center mb-16">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full overflow-hidden border border-border 
                                    bg-white shadow-sm flex items-center justify-center">
                        <img src="/assets/ChatLeafylogo.png" alt="" className="w-12 h-12 object-cover opacity-80" />
                    </div>
                    <h2 className="section-title">try it yourself</h2>
                    <p className="section-subtitle mx-auto">
                        ask anything. see how placements work.
                    </p>
                </div>

                {/* Demo container - glass effect */}
                <div className="border border-border rounded-xl bg-white p-0 overflow-hidden
                                shadow-lg">
                    {/* Top bar */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-gray-50/50">
                        <span className="text-sm text-secondary tracking-wide">ChatLeafy demo</span>

                        {/* Model selector */}
                        <div className="relative">
                            <button
                                onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
                                className="flex items-center gap-2 px-3 py-1.5 text-sm text-secondary hover:text-primary
                           border border-border rounded-lg transition-all duration-300 hover:border-gray-300 bg-white"
                            >
                                <span>{selectedModel}</span>
                                <svg className={`w-4 h-4 transition-transform duration-300 ${modelDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {modelDropdownOpen && (
                                <div className="absolute right-0 top-full mt-2 w-48 border border-border rounded-lg 
                                bg-white shadow-xl overflow-hidden z-10">
                                    {models.map((model, index) => (
                                        <div key={model.id}>
                                            {model.id === 'coming-soon' && (
                                                <div className="border-t border-gray-100" />
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
                                                        ? 'text-secondary hover:text-primary hover:bg-gray-50'
                                                        : 'text-muted cursor-not-allowed'
                                                    }
                          ${selectedModel === model.name ? 'text-primary bg-gray-50 font-medium' : ''}
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
                                className="input-modern flex-1 bg-gray-50 border-gray-200 focus:bg-white"
                            />
                            <button
                                onClick={handleGenerate}
                                disabled={isLoading || !query.trim()}
                                className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed shadow-none"
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
                        <div className="border-t border-border animate-fade-in bg-gray-50/30">
                            {/* ChatLeafy section */}
                            <div className="p-6 border-b border-border/50">
                                <div className="text-xs text-secondary uppercase tracking-wider mb-3 font-semibold">ChatLeafy</div>
                                <div className="text-primary leading-relaxed whitespace-pre-line text-sm">
                                    {mockResponse.ChatLeafy}
                                </div>
                            </div>

                            {/* Placement section */}
                            <div className="p-6 border-b border-border/50 bg-blue-50/20">
                                <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-blue-100 bg-white rounded-md text-xs text-secondary mb-4 shadow-sm">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                    Sponsored
                                </div>
                                <div className="bg-white border border-border rounded-xl p-5 shadow-sm">
                                    <div className="text-primary text-sm font-semibold mb-2">{mockResponse.placement.sponsor}</div>
                                    <ul className="space-y-2">
                                        {mockResponse.placement.bullets.map((bullet, i) => (
                                            <li key={i} className="text-secondary text-sm flex items-start gap-2">
                                                <span className="text-muted mt-1.5 w-1 h-1 bg-gray-300 rounded-full flex-shrink-0"></span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Disclosure */}
                            <div className="p-4 flex items-center justify-between bg-white">
                                <p className="text-muted text-xs">
                                    placements help keep ChatLeafy free.
                                </p>

                                {/* Frequency toggle */}
                                <div className="flex items-center gap-3">
                                    <span className="text-xs text-muted">placement frequency</span>
                                    <div className="flex bg-gray-100 p-1 rounded-lg">
                                        <button
                                            onClick={() => setPlacementFrequency('strict')}
                                            className={`px-3 py-1 rounded-md text-xs transition-all ${placementFrequency === 'strict' ? 'bg-white text-primary shadow-sm font-medium' : 'text-secondary hover:text-primary'}`}
                                        >
                                            strict
                                        </button>
                                        <button
                                            onClick={() => setPlacementFrequency('relaxed')}
                                            className={`px-3 py-1 rounded-md text-xs transition-all ${placementFrequency === 'relaxed' ? 'bg-white text-primary shadow-sm font-medium' : 'text-secondary hover:text-primary'}`}
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
