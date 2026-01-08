import { useState, useRef, useEffect } from 'react'

const models = [
    { id: 'gpt-5.1', name: 'GPT-5.2', available: true },
    { id: 'claude-4.5', name: 'Claude 4.5', available: true },
    { id: 'gemini-4', name: 'Gemini 4', available: true },
    { id: 'llama-3', name: 'Llama 3', available: true },
]

const mockResponse = {
    ChatLeafy: `Based on the latest research, effective learning involves spaced repetition and immediate feedback.
Key principles:
• Start with fundamentals
• Practice at the edge of ability
• Get quick feedback loops`,
    placement: {
        sponsor: 'MasterClass',
        bullets: [
            'Expert-led courses',
            'Learn from the best',
        ],
    },
}

function ChatLanding({ onLearnMore }) {
    const [selectedModel, setSelectedModel] = useState('GPT-5.2')
    const [modelDropdownOpen, setModelDropdownOpen] = useState(false)
    const [query, setQuery] = useState('')
    const [messages, setMessages] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [chatHistory, setChatHistory] = useState([])
    const [currentChatId, setCurrentChatId] = useState(null)
    const messagesEndRef = useRef(null)

    // Load chats from localStorage on mount
    useEffect(() => {
        const savedChats = localStorage.getItem('chatHistory')
        if (savedChats) {
            setChatHistory(JSON.parse(savedChats))
        }
    }, [])

    // Save chats to localStorage whenever they change
    useEffect(() => {
        if (chatHistory.length > 0) {
            localStorage.setItem('chatHistory', JSON.stringify(chatHistory))
        }
    }, [chatHistory])

    // Save current chat when messages change
    useEffect(() => {
        if (messages.length > 0 && currentChatId) {
            const updatedHistory = chatHistory.map(chat =>
                chat.id === currentChatId ? { ...chat, messages, updatedAt: new Date().toISOString() } : chat
            )
            setChatHistory(updatedHistory)
        }
    }, [messages])

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, isLoading])

    const handleNewChat = () => {
        const newChatId = Date.now().toString()
        setCurrentChatId(newChatId)
        setMessages([])
        setQuery('')
        
        // Add new chat to history
        const newChat = {
            id: newChatId,
            messages: [],
            model: selectedModel,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            title: 'New Chat'
        }
        setChatHistory(prev => [newChat, ...prev])
    }

    const handleLoadChat = (chatId) => {
        const chat = chatHistory.find(c => c.id === chatId)
        if (chat) {
            setCurrentChatId(chatId)
            setMessages(chat.messages)
            setSelectedModel(chat.model)
        }
    }

    const handleSubmit = (e) => {
        e?.preventDefault()
        if (!query.trim() || isLoading) return

        // Create new chat if this is the first message
        if (!currentChatId) {
            handleNewChat()
        }

        const userMessage = { role: 'user', content: query, id: Date.now() }
        setMessages(prev => [...prev, userMessage])
        setQuery('')
        setIsLoading(true)

        // Simulate API response
        setTimeout(() => {
            const assistantMessage = {
                role: 'assistant',
                content: mockResponse.ChatLeafy,
                placement: mockResponse.placement,
                id: Date.now() + 1
            }
            setMessages(prev => [...prev, assistantMessage])
            setIsLoading(false)
        }, 1500)
    }

    return (
        <div className="flex h-screen bg-white font-sans text-primary">
            {/* Sidebar */}
            <div className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-gray-50 text-gray-900 flex flex-col transition-all duration-300 overflow-hidden border-r border-gray-200`}>
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 overflow-hidden">
                            <img src="./assets/ChatLeafylogoinverted.png" alt="ChatLeafy" className="w-7 h-7 object-contain" />
                        </div>
                     
                    </div>
                    <button onClick={() => setSidebarOpen(false)} className="p-1 hover:bg-gray-200 rounded-lg transition-colors text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* New Chat Button */}
                <button onClick={handleNewChat} className="m-3 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-200 hover:bg-gray-300 rounded-full font-medium text-sm transition-colors border border-gray-300 text-gray-900">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    New chat
                </button>

                {/* Chat History */}
                <div className="flex-1 overflow-y-auto px-3 space-y-2">
                    {chatHistory.length > 0 && (
                        <>
                            <div className="text-xs text-gray-500 font-semibold px-2 py-2">Recent</div>
                            {chatHistory.map(chat => (
                                <button
                                    key={chat.id}
                                    onClick={() => handleLoadChat(chat.id)}
                                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors truncate ${
                                        currentChatId === chat.id
                                            ? 'bg-gray-200 text-gray-900 font-medium'
                                            : 'text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {chat.messages.length > 0 
                                        ? chat.messages[0].content.substring(0, 30) + '...'
                                        : chat.title
                                    }
                                </button>
                            ))}
                        </>
                    )}
                </div>

                {/* Sidebar Footer */}
                <div className="p-3 border-t border-gray-200 space-y-2">
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg transition-colors flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Settings
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col relative">
                {/* Toggle Sidebar Button */}
                {!sidebarOpen && (
                    <button onClick={() => setSidebarOpen(true)} className="absolute left-4 top-4 z-40 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                )}

                {/* Chat Area */}
                <main className="flex-1 w-full relative z-10 flex flex-col">
                {messages.length === 0 ? (
                    /* Empty State - Perplexity Style Centered */
                    <div className="flex-1 flex flex-col items-center justify-center px-4 animate-fade-in">
                        {/* Centered Logo with Text */}
                        <div className="mb-12 flex items-center gap-3">
                            <div className="w-20 h-20 rounded-full bg-white text-white flex items-center justify-center flex-shrink-0 overflow-hidden">
                                <img src="./assets/ChatLeafylogoinverted.png" alt="ChatLeafy AI" className="w-20 h-20 object-contain" />
                            </div>
                            <span className="text-7xl text-primary tracking-tight">Ask anything. </span>
                        </div>

                        {/* Large Search Input */}
                        <div className="w-full max-w-3xl">
                            <form onSubmit={handleSubmit} className="relative flex items-center bg-white border-2 border-gray-200 rounded-full pl-3 pr-2 py-2 focus-within:border-primary transition-all duration-200">
                                {/* Model Selector Dropdown */}
                                <div className="relative flex-shrink-0">
                                    <button
                                        type="button"
                                        onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
                                        className="flex items-center gap-1 px-2 py-1 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                                    >
                                        {selectedModel}
                                        <svg className={`w-3 h-3 transition-transform duration-200 ${modelDropdownOpen ? 'rotate-180' : ''}`}
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {modelDropdownOpen && (
                                        <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50 animate-fade-in py-1">
                                            {models.map((model) => (
                                                <button
                                                    key={model.id}
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedModel(model.name)
                                                        setModelDropdownOpen(false)
                                                    }}
                                                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-200
                                        text-gray-700 hover:text-primary hover:bg-gray-50
                                        ${selectedModel === model.name ? 'text-primary bg-gray-50 font-medium' : ''}
                                      `}
                                                >
                                                    {model.name}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Divider */}
                                <div className="w-px h-5 bg-gray-300 mx-1 flex-shrink-0" />

                                {/* Input */}
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Ask anything..."
                                    className="flex-1 bg-transparent px-3 py-1 text-gray-900 placeholder-gray-400 outline-none text-lg font-medium"
                                />
                                
                                {/* Send Button */}
                                <button
                                    type="submit"
                                    disabled={!query.trim() || isLoading}
                                    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-gray-800 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </form>

                            {/* Action Buttons Row */}
                            <div className="flex items-center justify-center gap-3 mt-6">
                                <button className="p-2.5 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                                <button className="p-2.5 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </button>
                                <button className="p-2.5 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </button>
                                <button className="p-2.5 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </button>
                            </div>

                            {/* Footer CTA */}
                            <div className="mt-8 text-center">
                                <button onClick={onLearnMore} className="group inline-flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                                    <span>Learn more about ChatLeafy.com</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Conversation */
                    <div className="flex-1 overflow-y-auto pt-12 pb-4 space-y-6 no-scrollbar max-w-3xl mx-auto w-full px-4">
                        {messages.map((msg) => (
                            <div key={msg.id} className="animate-slide-up">
                                {/* User Bubble */}
                                {msg.role === 'user' && (
                                    <div className="flex justify-end mb-2">
                                        <div className="px-5 py-3 bg-black text-white rounded-2xl rounded-br-md max-w-[80%] leading-relaxed text-[15px] font-medium">
                                            {msg.content}
                                        </div>
                                    </div>
                                )}

                                {/* Assistant Message */}
                                {msg.role === 'assistant' && (
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V8" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 space-y-3">
                                            <div className="text-gray-900 leading-7 text-[15px] whitespace-pre-line">
                                                {msg.content}
                                            </div>

                                            {/* Sponsored Placement */}
                                            {msg.placement && (
                                                <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-200">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Sponsored</span>
                                                    </div>
                                                    <div className="font-semibold text-gray-900 text-sm mb-1">
                                                        {msg.placement.sponsor}
                                                    </div>
                                                    <ul className="space-y-1">
                                                        {msg.placement.bullets.map((b, j) => (
                                                            <li key={j} className="text-gray-600 text-xs flex items-center gap-2">
                                                                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                                                                {b}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Loading */}
                        {isLoading && (
                            <div className="flex items-start gap-4 animate-fade-in">
                                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V8" />
                                    </svg>
                                </div>
                                <div className="flex items-center gap-1.5 h-6">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} className="h-4" />
                    </div>
                )}
            </main>

            {/* Input Area - Only show when there are messages */}
            {messages.length > 0 && (
                <div className="flex-shrink-0 w-full max-w-3xl mx-auto px-4 pb-8 pt-4 z-20 bg-gradient-to-t from-white via-white to-transparent">
                    <form onSubmit={handleSubmit} className="relative">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Ask a follow-up..."
                            className="w-full bg-white border-2 border-gray-200 pl-6 pr-14 py-4 rounded-full
                       text-gray-900 placeholder-gray-400 outline-none 
                       focus:border-primary focus:ring-0 transition-all duration-200
                       font-medium"
                        />
                        <button
                            type="submit"
                            disabled={!query.trim() || isLoading}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-white
                       flex items-center justify-center hover:bg-gray-800 transition-all duration-200
                       disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </form>
                </div>
            )}
        </div>
        </div>
    )
}

export default ChatLanding
