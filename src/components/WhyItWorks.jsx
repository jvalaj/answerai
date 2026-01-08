const statements = [
    {
        title: 'no banners',
        description: 'placements live inside the response. never around it.',
    },
    {
        title: 'no dark patterns',
        description: 'every placement is clearly labeled. no tricks.',
    },
    {
        title: 'consistent structure',
        description: 'same format every time. users know what to expect.',
    },
    {
        title: 'works across models',
        description: 'gpt, claude, gemini. same honest format.',
    },
]

function WhyItWorks() {
    return (
        <section className="py-32 px-6 bg-gray-50/50">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-20">
                    <h2 className="section-title">why it works</h2>
                    <p className="section-subtitle mx-auto">
                        honest monetization. no compromises.
                    </p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {statements.map((statement) => (
                        <div key={statement.title} className="card text-center group bg-white border-gray-100 hover:border-gray-200">
                            <div className="w-10 h-10 mx-auto mb-4 border border-gray-200 rounded-lg 
                            flex items-center justify-center group-hover:border-primary/20 bg-gray-50
                            transition-colors duration-400">
                                <svg className="w-5 h-5 text-secondary group-hover:text-primary transition-colors duration-400"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <h3 className="text-primary font-semibold mb-2 text-lg">{statement.title}</h3>
                            <p className="text-secondary text-sm leading-relaxed">{statement.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyItWorks
