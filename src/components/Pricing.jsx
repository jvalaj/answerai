const tiers = [
    {
        title: 'users',
        price: 'free',
        description: 'always free access to leading models.',
        features: [
            'unlimited conversations',
            'all supported models',
            'placement frequency control',
            'no account required',
        ],
        cta: 'start using',
        primary: false,
    },
    {
        title: 'developers',
        price: 'usage-based',
        description: 'integrate ChatLeafy into your product.',
        features: [
            'api access',
            'custom placement rules',
            'analytics dashboard',
            'priority support',
        ],
        cta: 'get api access',
        primary: true,
    },
    {
        title: 'partners',
        price: 'pay for relevance',
        description: 'reach users at the moment of intent.',
        features: [
            'structured placement format',
            'intent-based targeting',
            'transparency reporting',
            'custom integration',
        ],
        cta: 'become a partner',
        primary: false,
    },
]

function Pricing() {
    return (
        <section id="pricing" className="py-32 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-20">
                    <h2 className="section-title">pricing</h2>
                    <p className="section-subtitle mx-auto">
                        simple. no surprises.
                    </p>
                </div>

                {/* Pricing cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tiers.map((tier) => (
                        <div
                            key={tier.title}
                            className={`card flex flex-col bg-white ${tier.primary ? 'border-primary/20 shadow-md ring-1 ring-primary/5' : ''}`}
                        >
                            <div className="mb-6">
                                <h3 className="text-lg text-primary font-semibold mb-2 capitalize">{tier.title}</h3>
                                <div className="text-3xl text-primary font-bold mb-2 tracking-tight">{tier.price}</div>
                                <p className="text-secondary text-sm">{tier.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm text-secondary">
                                        <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={tier.primary ? 'btn-primary w-full' : 'btn-secondary w-full'}
                            >
                                {tier.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing
