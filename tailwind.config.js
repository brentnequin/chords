module.exports = {
    // darkMode: false, // or 'media' or 'class'
    content: [
        './pages/**/*.{html,js,vue}',
        './components/**/*.{html,js,vue}',
        './layouts/**/*.{html,js,vue}',
    ],
    theme: {
        container: {
            center: true
        },
        screens: {
            'mobile': '480px',
            'tablet': '760px',
            'desktop': '1420px',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}