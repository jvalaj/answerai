const steps = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        ),
        title: 'detect intent',
        description: 'understand what the user is asking and identify relevant categories.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
        ),
        title: 'select relevance',
        description: 'match the query to structured, relevant placements from partners.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        ),
        title: 'render structure',
        description: 'embed placement in a clean, labeled format the user can trust.',
    },
]

const schemaPreview = `{
  "response": {
    "answer": "...",
    "placement": {
      "sponsor": "Partner",
      "relevance": ["..."],
      "disclosure": true
    }
  }
}`

function HowItWorks() {
    return (
        <section id="how-it-works" className="py-32 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-20">
                    <h2 className="section-title">how it works</h2>
                    <p className="section-subtitle mx-auto">
                        simple. predictable. transparent.
                    </p>
                </div>

                {/* Steps grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {steps.map((step, index) => (
                        <div key={step.title} className="card group">
                            <div className="text-secondary group-hover:text-accent transition-colors duration-400 mb-6">
                                {step.icon}
                            </div>
                            <div className="text-xs text-muted tracking-wider mb-2">0{index + 1}</div>
                            <h3 className="text-lg text-white mb-3">{step.title}</h3>
                            <p className="text-secondary text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>

                {/* Schema preview */}
                <div className="max-w-xl mx-auto">
                    <div className="outlined-subtle p-4">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 rounded-full bg-white/20" />
                            <div className="w-2 h-2 rounded-full bg-white/20" />
                            <div className="w-2 h-2 rounded-full bg-white/20" />
                            <span className="text-xs text-muted ml-2">response.json</span>
                        </div>
                        <pre className="text-xs text-secondary font-mono leading-relaxed overflow-x-auto">
                            {schemaPreview}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
