/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: '#FFFFFF',
                surface: '#F7F7F8',
                primary: '#1A1A1A',
                secondary: '#374151',
                muted: '#6B7280',
                accent: '#10A37F',
                'accent-light': '#E6F7F3',
                border: '#E5E5E5',
                'border-hover': '#D1D1D1',
            },
            fontFamily: {
                sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'sans-serif'],
                mono: ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Menlo', 'monospace'],
            },
            letterSpacing: {
                wide: '0.025em',
                wider: '0.05em',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                glow: {
                    '0%': { boxShadow: 'inset 0 0 20px rgba(79, 209, 197, 0)' },
                    '100%': { boxShadow: 'inset 0 0 20px rgba(79, 209, 197, 0.1)' },
                },
            },
            transitionDuration: {
                '400': '400ms',
                '600': '600ms',
            },
        },
    },
    plugins: [],
}
