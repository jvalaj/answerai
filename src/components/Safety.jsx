const safetyItems = [
    {
        title: 'always labeled',
        description: 'every placement is clearly marked as sponsored. no exceptions.',
    },
    {
        title: 'user control',
        description: 'adjust placement frequency or disable entirely in settings.',
    },
    {
        title: 'no tracking',
        description: "we don't build profiles. relevance is based on the query, not history.",
    },
    {
        title: 'partner vetting',
        description: 'all placement partners go through manual review.',
    },
    {
        title: 'open format',
        description: 'our placement schema is public. see exactly what we return.',
    },
    {
        title: 'no injection',
        description: 'placements are separate from the model response. never mixed.',
    },
]

function Safety() {
    return (
        <section id="safety" className="py-32 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-20">
                    <h2 className="section-title">safety & transparency</h2>
                    <p className="section-subtitle mx-auto">
                        built on trust. designed for clarity.
                    </p>
                </div>

                {/* Checklist */}
                <div className="outlined p-10 bg-gray-50/50 border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {safetyItems.map((item) => (
                            <div key={item.title} className="flex items-start gap-4 group">
                                <div className="mt-1 w-6 h-6 border border-gray-300 rounded-md flex-shrink-0
                                flex items-center justify-center group-hover:border-primary/40 bg-white
                                transition-colors duration-300">
                                    <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-primary text-base font-semibold mb-1.5">{item.title}</h4>
                                    <p className="text-secondary text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Safety
