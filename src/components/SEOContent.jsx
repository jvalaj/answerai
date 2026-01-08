/**
 * SEOContent - Semantic SEO content section with keyword variations
 * Renders at the bottom of the page with natural language containing search terms
 * Visible to search engines but styled subtly for users
 */
function SEOContent() {
    return (
        <section
            className="bg-gray-50 border-t border-border py-16 px-6"
            aria-label="About ChatLeafy - Free AI Chat Service"
        >
            <div className="max-w-4xl mx-auto">
                <article className="prose prose-sm prose-gray max-w-none">
                    <h2 className="text-lg font-semibold text-primary mb-4">
                        Free AI chat with no login
                    </h2>

                    <p className="text-secondary text-sm leading-relaxed mb-4">
                        ChatLeafy is built for people who search for a free ChatGPT-style experience. Open the site, pick a
                        model, and chat immediately—no account or credit card needed. Sponsored cards appear under answers so
                        you always know how the product is funded.
                    </p>

                    <h3 className="text-base font-medium text-primary mt-6 mb-3">
                        How ChatLeafy keeps the service free
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed mb-4">
                        Instead of subscriptions, ChatLeafy uses clearly labeled sponsored placements. They never interrupt
                        your conversation and are separated from the assistant response. This transparency is designed to keep
                        trust while covering infrastructure costs.
                    </p>

                    <h3 className="text-base font-medium text-primary mt-6 mb-3">
                        When to use ChatLeafy
                    </h3>
                    <ul className="list-disc list-inside text-secondary text-sm leading-relaxed mb-4">
                        <li>Quick brainstorming, summaries, and drafts without logging in</li>
                        <li>Testing prompts across multiple modern models in one place</li>
                        <li>Lightweight research when you do not want to switch devices or apps</li>
                    </ul>

                    <div className="mt-8 space-y-4 text-xs text-muted">
                        <h4 className="text-sm font-medium text-secondary">Frequently asked</h4>

                        <details className="group">
                            <summary className="cursor-pointer text-secondary hover:text-primary transition-colors">
                                Is ChatLeafy free to use?
                            </summary>
                            <p className="mt-2 pl-4 text-muted">
                                Yes. ChatLeafy stays free through labeled sponsored cards. There is no required account or payment.
                            </p>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer text-secondary hover:text-primary transition-colors">
                                Do you index chat logs?
                            </summary>
                            <p className="mt-2 pl-4 text-muted">
                                No. Chat URLs are blocked from indexing in robots.txt and are not intended to appear in search results.
                            </p>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer text-secondary hover:text-primary transition-colors">
                                Which models can I try?
                            </summary>
                            <p className="mt-2 pl-4 text-muted">
                                ChatLeafy rotates between popular large language models so you can test different behaviors without switching apps.
                            </p>
                        </details>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default SEOContent
