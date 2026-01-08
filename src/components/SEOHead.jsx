import { useEffect } from 'react'

/**
 * SEOHead - Injects JSON-LD structured data for rich search results
 * Includes SoftwareApplication, FAQPage, and Organization schemas
 */
function SEOHead() {
    useEffect(() => {
        // Create and inject JSON-LD structured data
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.id = 'seo-structured-data'

        const structuredData = {
            "@context": "https://schema.org",
            "@graph": [
                // Software Application Schema
                {
                    "@type": "SoftwareApplication",
                    "name": "ChatLeafy",
                    "applicationCategory": "Artificial Intelligence",
                    "operatingSystem": "Web Browser",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    },
                    "description": "Free AI chat powered by GPT-4, Claude 3.5, Gemini, and Llama. The best free alternative to ChatGPT, Claude AI, Google Gemini, and Microsoft Copilot.",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "ratingCount": "10000"
                    },
                    "alternateName": [
                        "Free ChatGPT", "ChatGPT Alternative", "Free ChatGPT Alternative", "ChatGPT Free",
                        "Free Claude", "Claude Alternative", "Claude AI Free", "Free Claude AI",
                        "Free Gemini", "Gemini Alternative", "Google Gemini Free", "Free Bard", "Bard Alternative",
                        "Free GPT", "Free GPT-4", "GPT-4 Free", "Free AI Chat", "Free LLM",
                        "AI Assistant Free", "Free AI Chatbot", "All AI in One", "Multiple AI Tools",
                        "ChatGPT and Claude", "ChatGPT and Gemini", "AI Hub", "AI Playground"
                    ]
                },
                // Organization Schema
                {
                    "@type": "Organization",
                    "name": "ChatLeafy",
                    "url": "https://ChatLeafy.com",
                    "logo": "https://ChatLeafy.com/assets/ChatLeafylogo.png",
                    "sameAs": [],
                    "description": "Free AI chat service providing access to leading language models like GPT-4, Claude, Gemini, and Llama."
                },
                // WebSite Schema
                {
                    "@type": "WebSite",
                    "name": "ChatLeafy - Free AI Chat",
                    "url": "https://ChatLeafy.com",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://ChatLeafy.com?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    },
                    "description": "Free access to ChatGPT, Claude, Gemini, Bard, and other AI models. No subscription required. All AI in one place."
                },
                // FAQ Schema for common questions
                {
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Is ChatLeafy really free?",
                            "acceptedChatLeafy": {
                                "@type": "ChatLeafy",
                                "text": "Yes! ChatLeafy is 100% free. We fund our service through clearly labeled, non-intrusive sponsored placements within responses. You get full access to GPT-4, Claude 3.5, Gemini, and Llama without any subscription or credit card."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is ChatLeafy a free ChatGPT alternative?",
                            "acceptedChatLeafy": {
                                "@type": "ChatLeafy",
                                "text": "Yes! ChatLeafy provides free access to multiple AI models including GPT-4 (the same model powering ChatGPT), Claude 3.5 (from Anthropic), Google Gemini (formerly Bard), and Meta's Llama. It's the best free alternative to ChatGPT, Claude AI, and other paid AI services."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How is ChatLeafy different from ChatGPT, Claude, or Gemini?",
                            "acceptedChatLeafy": {
                                "@type": "ChatLeafy",
                                "text": "Unlike ChatGPT, Claude, or Gemini which require subscriptions for full access, ChatLeafy is completely free. We provide access to all these leading AI models in one place, funded by relevance-based placements instead of subscription fees."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do I need to create an account or login to use this free AI chat?",
                            "acceptedChatLeafy": {
                                "@type": "ChatLeafy",
                                "text": "No account, signup, or login required. You can start chatting with GPT-4, Claude, Gemini, and Llama immediately. ChatLeafy offers anonymous, free AI chat with no registration needed - just open and start asking."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What AI models can I access for free on ChatLeafy?",
                            "acceptedChatLeafy": {
                                "@type": "ChatLeafy",
                                "text": "ChatLeafy provides free access to GPT-4.1 (OpenAI/ChatGPT), Claude 3.5 (Anthropic), Gemini 1.5 (Google, formerly Bard), and Llama 3 (Meta). All models are available without any subscription or payment."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is this like Google Bard or Bard AI?",
                            "acceptedChatLeafy": {
                                "@type": "ChatLeafy",
                                "text": "Yes! ChatLeafy includes Google Gemini, which is the evolution of Google Bard. You get free access to Gemini (Bard) along with ChatGPT (GPT-4), Claude, and Llama - all in one place without paying for any subscription."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I use ChatGPT and Claude together?",
                            "acceptedChatLeafy": {
                                "@type": "ChatLeafy",
                                "text": "Yes! ChatLeafy is an AI hub that gives you access to multiple AI models including ChatGPT (GPT-4), Claude, Gemini, and Llama. Switch between models anytime - all completely free."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is this free for students?",
                            "acceptedChatLeafy": {
                                "@type": "ChatLeafy",
                                "text": "Absolutely! ChatLeafy is 100% free for everyone including students. No credit card, no subscription, no student verification needed. Just open the site and start chatting with GPT-4, Claude, Gemini, and more."
                            }
                        }
                    ]
                }
            ]
        }

        script.textContent = JSON.stringify(structuredData)

        // Remove existing script if present
        const existing = document.getElementById('seo-structured-data')
        if (existing) {
            existing.remove()
        }

        document.head.appendChild(script)

        return () => {
            const script = document.getElementById('seo-structured-data')
            if (script) {
                script.remove()
            }
        }
    }, [])

    return null // This component only injects scripts, no visual output
}

export default SEOHead
