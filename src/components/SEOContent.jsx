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
                    {/* Main Heading - Primary Keywords */}
                    <h2 className="text-lg font-semibold text-primary mb-4">
                        Free AI Chat: Your Gateway to GPT-4, Claude, Gemini, Bard & Llama
                    </h2>

                    <p className="text-secondary text-sm leading-relaxed mb-4">
                        Looking for a <strong>free ChatGPT alternative</strong>? ChatLeafy provides 100% free access to
                        leading AI models including <strong>GPT-4</strong>, <strong>Claude 3.5</strong>, <strong>Google Gemini</strong> (formerly Bard),
                        and <strong>Meta Llama</strong>. Unlike paid services, we believe everyone deserves access to
                        cutting-edge AI technology without subscriptions or credit cards.
                    </p>

                    {/* All AI in One Section */}
                    <h3 className="text-base font-medium text-primary mt-6 mb-3">
                        All AI Models in One Place - ChatGPT and Claude and Gemini Together
                    </h3>

                    <p className="text-secondary text-sm leading-relaxed mb-4">
                        Stop switching between <strong>OpenAI ChatGPT</strong>, <strong>Anthropic Claude</strong>,
                        <strong>Google Bard</strong>, and <strong>Microsoft Copilot</strong>. ChatLeafy is your
                        <strong> AI hub</strong> - an <strong>AI aggregator</strong> that brings <strong>all AI tools in one place</strong>.
                        Use <strong>ChatGPT and Claude</strong> together, or switch to <strong>Gemini and Llama</strong> anytime.
                        It's like having an <strong>AI playground</strong>, <strong>AI dashboard</strong>, and <strong>AI studio</strong> combined.
                    </p>

                    {/* Bard & Gemini Section */}
                    <h3 className="text-base font-medium text-primary mt-6 mb-3">
                        Free Google Bard & Gemini Access
                    </h3>

                    <p className="text-secondary text-sm leading-relaxed mb-4">
                        Searching for <strong>Google Bard AI free</strong> or <strong>Bard AI chat</strong>?
                        Google Bard is now <strong>Gemini</strong>, and ChatLeafy gives you free access to it.
                        Whether you call it <strong>Bard</strong>, <strong>Bard AI</strong>, <strong>Google AI chat</strong>,
                        or <strong>Gemini AI</strong> - you can use it here for free alongside ChatGPT and Claude.
                    </p>

                    {/* Claude Section */}
                    <h3 className="text-base font-medium text-primary mt-6 mb-3">
                        Free Claude AI - Anthropic's Best Model
                    </h3>

                    <p className="text-secondary text-sm leading-relaxed mb-4">
                        Need <strong>Claude AI free</strong>? ChatLeafy provides free access to <strong>Claude 3.5</strong>
                        from <strong>Anthropic</strong>. No need to search for "claude ai", "claude chat", or "anthropic claude" -
                        just start chatting here. Works better than <strong>Claude login</strong> or <strong>Claude website</strong>
                        because there's no signup required.
                    </p>

                    {/* No Login Section */}
                    <h3 className="text-base font-medium text-primary mt-6 mb-3">
                        Free AI Chat - No Login, No Sign Up Required
                    </h3>

                    <p className="text-secondary text-sm leading-relaxed mb-4">
                        Tired of <strong>ChatGPT login</strong> pages and <strong>Claude sign in</strong> requirements?
                        ChatLeafy offers <strong>AI chat no sign up</strong> - completely anonymous.
                        <strong> Free AI no login</strong>, <strong>AI chat no registration</strong>,
                        <strong> free AI without account</strong>. Just open and start chatting.
                        Perfect for students who need <strong>free AI for students</strong> without creating accounts.
                    </p>

                    {/* FAQ-style content */}
                    <div className="mt-8 space-y-4 text-xs text-muted">
                        <h4 className="text-sm font-medium text-secondary">Frequently Asked Questions</h4>

                        <details className="group">
                            <summary className="cursor-pointer text-secondary hover:text-primary transition-colors">
                                Is this really a free ChatGPT / free Claude / free Bard alternative?
                            </summary>
                            <p className="mt-2 pl-4 text-muted">
                                Yes! ChatLeafy provides free access to GPT-4.1 (the technology behind ChatGPT),
                                Claude 3.5, Gemini 1.5 (formerly Google Bard), and Llama 3. We're funded by sponsored placements,
                                not subscriptions, so you never pay a cent.
                            </p>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer text-secondary hover:text-primary transition-colors">
                                Can I use ChatGPT and Claude and Gemini all in one place?
                            </summary>
                            <p className="mt-2 pl-4 text-muted">
                                Absolutely! ChatLeafy is an AI hub that combines multiple AI tools. Switch between
                                GPT-4 (ChatGPT), Claude, Gemini (Bard), and Llama anytime. All models, one interface, completely free.
                            </p>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer text-secondary hover:text-primary transition-colors">
                                Do I need an account, login, or signup to use this free AI chat?
                            </summary>
                            <p className="mt-2 pl-4 text-muted">
                                No signup required! Start chatting immediately with GPT-4, Claude, Gemini,
                                and Llama. Anonymous AI chat with no login, no registration, no account needed - just free AI.
                            </p>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer text-secondary hover:text-primary transition-colors">
                                Is Google Bard available here?
                            </summary>
                            <p className="mt-2 pl-4 text-muted">
                                Yes! Google Bard has been rebranded to Gemini, and we offer free access to Google Gemini.
                                Whether you're searching for Bard AI, Google Bard, or Bard chat - you'll find it here as Gemini.
                            </p>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer text-secondary hover:text-primary transition-colors">
                                Is this free for students?
                            </summary>
                            <p className="mt-2 pl-4 text-muted">
                                100% free for everyone including students! No credit card, no student email verification,
                                no subscription. Just open ChatLeafy and start using GPT-4, Claude, Gemini for homework, research, and more.
                            </p>
                        </details>
                    </div>

                    {/* Keywords naturally embedded - Full Coverage */}
                    <p className="mt-8 text-xs text-muted/60 leading-relaxed">
                        ChatLeafy serves millions who search for: free chatgpt, chatgpt free, chat gpt free online,
                        free chat gpt, chatgpt alternative free, cahtgpt, chat-gpt, chatgpt ai, chatgpt login,
                        open ai chat gpt, openai chatgpt, gpt 4 free, gpt4 free, free gpt,
                        claude ai free, claude free, claude chat, free claude, anthropic claude, claude ai,
                        gemini free, gemini ai free, google gemini free, bard ai, google bard, bard ai free, bard ai chat,
                        copilot free, free ai chat, free ai chatbot, ai chat free, talk to ai free, ask ai free,
                        ai no signup, free ai no login, ai chat no sign up, free ai for students,
                        all ai in one, chatgpt and claude, chatgpt and gemini, ai hub, ai playground, multiple ai tools.
                    </p>

                    <p className="mt-4 text-xs text-muted/40 leading-relaxed">
                        Common searches we help with: catgpt, chatgtp, chat gtp, chagpt, chatgptt, gemeni, geminie, gemmini,
                        claud, cloude, cloud ai, calude, cluade, copiot, copiliot, bard google, google bard ai.
                        We're here for everyone who deserves access to world-class AI without financial barriers.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default SEOContent
