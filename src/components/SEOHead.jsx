import { useEffect } from 'react'

/**
 * SEOHead - Injects JSON-LD structured data and updates meta tags per page
 */
function SEOHead({ page = 'home' }) {
    useEffect(() => {
        const metaByPage = {
            home: {
                title: 'ChatLeafy — Free AI Chat, No Login',
                description: 'Use ChatLeafy for free AI chat. A simple ChatGPT-like experience with no signup or subscription required.',
                canonical: 'https://chatleafy.com/',
            },
            'free-chatgpt': {
                title: 'Free ChatGPT Alternative — ChatLeafy',
                description: 'ChatLeafy is a free ChatGPT alternative. No login. No subscription. Instant AI chat in your browser.',
                canonical: 'https://chatleafy.com/free-chatgpt',
            },
            'how-it-works': {
                title: 'How ChatLeafy Works — Free AI Chat',
                description: 'See how ChatLeafy keeps AI chat free with labeled sponsors, no required logins, and rotating modern models.',
                canonical: 'https://chatleafy.com/how-it-works',
            },
            privacy: {
                title: 'ChatLeafy Privacy',
                description: 'Learn how ChatLeafy handles data, blocks chat logs from indexing, and funds the free experience.',
                canonical: 'https://chatleafy.com/privacy',
            },
            terms: {
                title: 'ChatLeafy Terms',
                description: 'Review the usage guidelines, availability notes, and monetization approach for ChatLeafy.',
                canonical: 'https://chatleafy.com/terms',
            },
        }

        const current = metaByPage[page] || metaByPage.home
        document.title = current.title

        const setMeta = (key, value, attr = 'name') => {
            if (!value) return
            let element = document.querySelector(`meta[${attr}="${key}"]`)
            if (!element) {
                element = document.createElement('meta')
                element.setAttribute(attr, key)
                document.head.appendChild(element)
            }
            element.setAttribute('content', value)
        }

        const setCanonical = (url) => {
            if (!url) return
            let link = document.querySelector('link[rel="canonical"]')
            if (!link) {
                link = document.createElement('link')
                link.setAttribute('rel', 'canonical')
                document.head.appendChild(link)
            }
            link.setAttribute('href', url)
        }

        setMeta('description', current.description)
        setMeta('og:title', current.title, 'property')
        setMeta('og:description', current.description, 'property')
        setMeta('og:url', current.canonical, 'property')
        setMeta('twitter:title', current.title)
        setMeta('twitter:description', current.description)
        setCanonical(current.canonical)

        const faq = [
            {
                question: 'Is ChatLeafy really free?',
                answer: 'Yes. ChatLeafy stays free through clearly labeled sponsored placements shown below responses.',
            },
            {
                question: 'Do I need to create an account?',
                answer: 'No login or subscription is required to start chatting.',
            },
            {
                question: 'How are chats handled?',
                answer: 'Chats are not intended to be indexed. Robots rules block chat paths from search engines.',
            },
            {
                question: 'Which models can I try?',
                answer: 'ChatLeafy rotates between modern large language models so you can compare answers easily.',
            },
        ]

        const structuredData = {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Organization",
                    "name": "ChatLeafy",
                    "url": "https://chatleafy.com",
                    "logo": "https://chatleafy.com/assets/ChatLeafylogo.png",
                    "description": "Free AI chat service providing access to modern language models without a required login.",
                },
                {
                    "@type": "WebSite",
                    "name": "ChatLeafy",
                    "url": "https://chatleafy.com",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://chatleafy.com/?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    },
                    "description": "Free AI chat with optional model switching and clearly labeled sponsored placements.",
                },
                {
                    "@type": "WebPage",
                    "name": current.title,
                    "url": current.canonical,
                    "description": current.description,
                },
                {
                    "@type": "SoftwareApplication",
                    "name": "ChatLeafy",
                    "applicationCategory": "AI chatbot",
                    "operatingSystem": "Web Browser",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    },
                    "description": "ChatLeafy offers free, no-login AI chat with clearly labeled sponsored placements to keep access open.",
                },
                {
                    "@type": "FAQPage",
                    "mainEntity": faq.map((item) => ({
                        "@type": "Question",
                        "name": item.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": item.answer,
                        },
                    })),
                }
            ]
        }

        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.id = 'seo-structured-data'
        script.textContent = JSON.stringify(structuredData)

        const existing = document.getElementById('seo-structured-data')
        if (existing) {
            existing.remove()
        }

        document.head.appendChild(script)

        return () => {
            const cleanup = document.getElementById('seo-structured-data')
            if (cleanup) {
                cleanup.remove()
            }
        }
    }, [page])

    return null
}

export default SEOHead
