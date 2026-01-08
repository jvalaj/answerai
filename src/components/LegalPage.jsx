function LegalPage({ title, intro, sections = [], onStartChatting }) {
    return (
        <div className="bg-white text-primary min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
                <header className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">ChatLeafy</p>
                    <h1 className="text-4xl font-bold leading-tight">{title}</h1>
                    <p className="text-secondary text-lg">{intro}</p>
                </header>

                <div className="space-y-8 text-secondary">
                    {sections.map((section) => (
                        <section key={section.title} className="space-y-2">
                            <h2 className="text-xl font-semibold text-primary">{section.title}</h2>
                            <p className="leading-relaxed">{section.body}</p>
                            {section.points && (
                                <ul className="list-disc list-inside space-y-2">
                                    {section.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    ))}
                </div>

                {onStartChatting && (
                    <button
                        onClick={onStartChatting}
                        className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                        Back to free chat
                    </button>
                )}
            </div>
        </div>
    )
}

export default LegalPage
