function FreeChatGPT({ onStartChatting, onNavigate }) {
    return (
        <div className="bg-white text-primary min-h-screen">
            <header className="max-w-5xl mx-auto px-6 py-16 space-y-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">Free ChatGPT Alternative</p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
                    Free ChatGPT Alternative — ChatLeafy
                </h1>
                <p className="text-lg text-secondary max-w-3xl">
                    ChatLeafy is a free AI chat tool that mirrors the ChatGPT experience without requiring an account.
                    Ask questions, draft content, and troubleshoot ideas in your browser with no subscriptions or logins.
                    We keep the lights on through clearly labeled sponsored placements, never hidden ads.
                </p>
                <div className="flex flex-wrap gap-3">
                    <button
                        onClick={onStartChatting}
                        className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                        Start free chat
                    </button>
                    <button
                        onClick={() => onNavigate?.('/')}
                        className="px-6 py-3 border border-gray-200 text-sm font-medium rounded-full hover:bg-gray-50 transition-colors"
                    >
                        Go to homepage
                    </button>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 pb-20 space-y-16">
                <section className="grid md:grid-cols-2 gap-8">
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-3">
                        <h2 className="text-xl font-semibold">How ChatLeafy works</h2>
                        <p className="text-secondary">
                            ChatLeafy routes your prompts to modern language models so you can get fast, high-quality
                            answers. Sponsored suggestions appear in a dedicated card beneath responses and are always
                            labeled. No popups, no hidden upsells.
                        </p>
                        <ul className="space-y-2 text-secondary text-sm">
                            <li>• Free access with no login</li>
                            <li>• Switch between popular models</li>
                            <li>• Sponsored placements are clearly disclosed</li>
                        </ul>
                        <p className="text-sm text-secondary">
                            This transparency keeps the service free while protecting your browsing experience.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-4">
                        <h2 className="text-xl font-semibold">Key details</h2>
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-secondary">
                            <div>
                                <dt className="font-semibold text-primary">Is it free?</dt>
                                <dd>Yes. ChatLeafy is free to use and supported by disclosed sponsors.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-primary">Do I need an account?</dt>
                                <dd>No signup or credit card. Open the site and start chatting.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-primary">Which models?</dt>
                                <dd>Popular options like GPT-class, Claude-style, and other modern large models.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-primary">Privacy</dt>
                                <dd>Chats are not indexed. See our privacy approach below.</dd>
                            </div>
                        </dl>
                        <button
                            onClick={onStartChatting}
                            className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-black transition-colors"
                        >
                            Start a chat now
                            <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Why people search for “free ChatGPT”</h2>
                    <p className="text-secondary">
                        Many people want the convenience of ChatGPT without paying or creating an account. ChatLeafy meets
                        that need by keeping the experience simple: no logins, instant answers, and a modern interface. It is
                        designed for quick research, brainstorming, and everyday questions.
                    </p>
                    <p className="text-secondary">
                        When you need guaranteed uptime or premium models, traditional ChatGPT or other paid tools may still
                        be useful. For everyday use, ChatLeafy removes the friction.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold">Comparison at a glance</h2>
                    <div className="overflow-hidden rounded-2xl border border-gray-200">
                        <div className="grid grid-cols-4 bg-gray-50 text-sm font-semibold text-primary">
                            <div className="px-4 py-3 bg-white/40">Feature</div>
                            <div className="px-4 py-3">ChatGPT Free</div>
                            <div className="px-4 py-3">ChatGPT Plus</div>
                            <div className="px-4 py-3">ChatLeafy</div>
                        </div>
                        {[
                            ['Cost', 'Free with limits', '$20/mo', 'Free, sponsored'],
                            ['Account', 'Required', 'Required', 'Not required'],
                            ['Access', 'Limited availability', 'Priority access', 'Available anytime'],
                            ['Models', 'Core models', 'Latest models', 'Modern models, rotating'],
                            ['Ads', 'None', 'None', 'Labeled cards only'],
                            ['Use cases', 'Light prompts', 'Heavy usage', 'Everyday free chat'],
                        ].map((row, idx) => (
                            <div
                                key={row[0]}
                                className={`grid grid-cols-4 text-sm text-secondary ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}`}
                            >
                                {row.map((cell, cellIdx) => (
                                    <div
                                        key={`${row[0]}-${cellIdx}`}
                                        className={`px-4 py-3 ${cellIdx === 0 ? 'font-medium text-primary bg-gray-50' : 'border-l border-gray-200'}`}
                                    >
                                        {cell}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-secondary">
                        {[
                            {
                                q: 'Do I have to log in to use ChatLeafy?',
                                a: 'No. Open the site and start chatting instantly. We do not require an account for the free experience.',
                            },
                            {
                                q: 'Is ChatLeafy affiliated with OpenAI or Anthropic?',
                                a: 'No. ChatLeafy is an independent experience that uses a rotating set of modern language models.',
                            },
                            {
                                q: 'Will you index my conversations?',
                                a: 'No. We do not want chat transcripts showing up in search. robot rules block chat URLs from indexing.',
                            },
                            {
                                q: 'How is the service funded?',
                                a: 'We keep it free through clearly marked sponsored cards. Nothing is hidden or injected into answers.',
                            },
                        ].map((item) => (
                            <div key={item.q} className="p-4 rounded-xl border border-gray-200 bg-gray-50">
                                <h3 className="font-semibold text-primary mb-2">{item.q}</h3>
                                <p>{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="p-6 rounded-2xl border border-gray-200 bg-gray-900 text-white space-y-3">
                    <h2 className="text-2xl font-semibold">Ready to try ChatLeafy?</h2>
                    <p className="text-gray-100">
                        Start a free session with no login. You can always return to this page for the details or share it
                        when people search for a free ChatGPT option.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={onStartChatting}
                            className="px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                        >
                            Start chatting free
                        </button>
                        <button
                            onClick={() => onNavigate?.('/privacy')}
                            className="px-6 py-3 border border-white/40 text-sm font-medium rounded-full hover:bg-white/10 transition-colors"
                        >
                            View privacy approach
                        </button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default FreeChatGPT
