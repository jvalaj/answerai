/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: '#000000',
                primary: '#ffffff',
                secondary: '#a1a1a1',
                muted: '#666666',
                accent: '#4fd1c5',
                border: 'rgba(255, 255, 255, 0.15)',
                'border-hover': 'rgba(255, 255, 255, 0.3)',
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
